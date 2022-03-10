import { RouteLocationNormalized } from 'vue-router'
import store from '@/store'

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  const { currentUser } = useSession()
  await currentUser()

  if (to.name != 'signin' && !store.state.currentUser) {
    return { name: 'signin' }
  }
})
