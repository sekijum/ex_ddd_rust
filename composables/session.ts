import * as yup from 'yup'
import api from '@/api'
import identityManager from '@/identity-manager'
import store from '@/store'
import { IUser } from '@/models/user'
import { ISignin } from '@/models/session'

export const useSession = () => {
  const signin = async (form: ISignin) => {
    const response = await api.post<any>('/sessions/signin', form).catch((error) => {
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
    const response = await api.get<IUser>('/sessions/currentUser').catch(console.error)
    if (response) {
      store.state.currentUser = response.data
    }
  }

  return {
    signin,
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
