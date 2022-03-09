import * as yup from 'yup'
import api from '@/api'
import identityManager from '@/identity-manager'
import { IUser } from '@/models/user'
import { ISignIn } from '@/models/session'

export const useSession = () => {
  const signIn = async (form: ISignIn) => {
    const response = await api.post<any>('/sessions/signIn', form).catch((error) => {
      if (error.response.status === 401) {
        return error.response.data
      }
    })

    if (response.message) return response.message

    const token = response.data.access_token
    identityManager.tokenSet = {
      token,
      expire: response.data.expires_in,
    }

    return
  }

  const currentUser = async () => {
    const response = await api.get<IUser>('/sessions/currentUser')
    return response
  }

  return {
    signIn,
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
