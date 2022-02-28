import * as yup from 'yup'
import api from '@/api'
import { IUser, TUserForm } from '@/models/user'

export const useUsers = () => {
  const users = ref<IUser[]>([])

  const fetchUsers = async () => {
    const res = await api('GET', '/user')
    users.value = res.data
  }
  return {
    fetchUsers,
    users,
  }
}

export const useUser = () => {
  const route = useRoute()

  const user = ref<IUser>()
  const isLoading = ref(false)

  const fetchUser = async () => {
    const res = await api('GET', `/user/${route.params.id}`)
    user.value = res.data
  }

  const saveUser = async (params: TUserForm) => {
    route.params.id
      ? await api('PUT', `/user/${(route.params.id, params)}`)
      : await api('POST', '/user', params)
  }

  const removeUser = async (id: number) => {
    await api('DELETE', `/user/${id}`)
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
