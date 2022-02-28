import * as yup from 'yup'
import api from '@/api.1'
import identityManager from '@/identity-manager'
import { IUser } from '@/models/user'

export const useSession = () => {
  const signUp = async (form) => {
    const response = await api.post<any>('/sessions/signUp', form).catch((error) => {
      if (error.response.status === 401) {
        return error.response.data
      }
    })
    if (response.message) {
      return response.message
    }
    identityManager.tokenSet = {
      token: response.data.access_token,
      expire: response.data.expires_in,
    }
    return
  }

  const currentUser = async () => {
    const response = await api.get<IUser>('/sessions/currentUser')
    return response
  }

  return {
    signUp,
    currentUser,
  }
}

export const useSessionValidate = () => {
  const schema = {
    email: yup.string().required('メールアドレスは必須です。'),
    password: yup.string().required('パスワードは必須です。'),
  }

  return {
    schema,
  }
}
