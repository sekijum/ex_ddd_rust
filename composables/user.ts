import * as yup from 'yup'
import api from '@/api'
import { IUser, TUserForm } from '@/models/user'
import store from '@/store'

export const useUser = () => {
  const user = ref<IUser>()
  const isLoading = ref(false)

  const userId = store.state.currentUser.id

  const fetchUser = async () => {
    const response = await api.get<IUser>(`/user/${userId}`).catch((error) => {
      console.error(error)
    })
    if (!response) return
    user.value = response.data
  }

  const saveUser = async (params: TUserForm) => {
    userId
      ? await api.put(`/user/${userId}`, params).catch((error) => {
          console.error(error)
        })
      : await api.post('/user', params).catch((error) => {
          console.error(error)
        })
  }

  const removeUser = async (id: number) => {
    const response = await api.delete<void>(`/user/${id}`).catch((error) => {
      if (error.response.status !== 404) {
        console.error(error)
      }
      return error.response.status
    })
    if (response === 404 || response.status === 200) {
      return true
    }
    return false
  }

  return {
    fetchUser,
    saveUser,
    removeUser,
    user,
    isLoading,
  }
}

export const useUserValidate = () => {
  const schema = {
    name: yup.string().required('名前は必須です。'),
    email: yup.string().required('メールアドレスは必須です。'),
    password: yup.string().required('パスワードは必須です。'),
  }

  return {
    schema,
  }
}
