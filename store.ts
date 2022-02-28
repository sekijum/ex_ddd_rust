import { IUser } from '@/models/user'

export interface IState {
  currentUser: IUser | null
}

export interface IStore {
  state: IState
}

const state: IState = {
  currentUser: null,
}

const store: IStore = {
  state,
}

export default store
