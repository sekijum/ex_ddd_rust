import { IUser } from '@/models/user'

export type TUserForm = Omit<IUser, 'id'> & {
  password: string
}
