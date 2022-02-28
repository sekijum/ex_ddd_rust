import axios from 'axios'
import identityManager from '@/identity-manager'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const headers: { Authorization?: string; Pragma: string } = {
    Pragma: 'no-cache',
  }
  if (identityManager.tokenSet) {
    headers.Authorization = `Bearer ${identityManager.tokenSet.token}`
  }
  return { ...config, headers }
})

export default api
