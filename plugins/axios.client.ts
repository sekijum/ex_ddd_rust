import { RouteLocationNormalized } from 'vue-router'
import identityManager from '@/identity-manager'
import api from '@/api.1'
import store from '@/store'

async function beforeRouting(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  const response = await api.get('/sessions/currentUser').catch((error) => {
    console.error(error)
  })
  if (response) {
    store.state.currentUser = response.data
  }
  if (to.name != 'signup' && !store.state.currentUser && !response) {
    return { name: 'signup' }
  }
  return
}

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  router.beforeEach(async (to, from, next) => {
    const result = await beforeRouting(to, from)
    next(result)
  })
})
