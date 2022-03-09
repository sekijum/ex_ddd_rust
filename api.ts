import axios from 'axios'
import identityManager from '@/identity-manager'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
  },
})

api.interceptors.request.use(function (config) {
  const headers: { Authorization?: string; Pragma: string } = {
    Pragma: 'no-cache',
  }
  if (identityManager.accessToken) {
    headers.Authorization = `Bearer ${identityManager.accessToken.token}`
  }
  return { ...config, headers }
})

api.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    const router = useRouter()
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      error.response.data.message === 'Token has expired' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      const response = await api.get('/sessions/refresh')

      if (response.status === 200) {
        identityManager.clearCredentials()
        const token = response.data.access_token
        identityManager.tokenSet = {
          token,
          expire: response.data.expires_in,
        }
        return api.request(originalRequest)
      } else {
        identityManager.clearCredentials()
        return router.push({ name: 'signin' })
      }
    }

    return Promise.reject(error)
  }
)

export default api
