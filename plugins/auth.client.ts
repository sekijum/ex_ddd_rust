import { RouteLocationNormalized } from 'vue-router'
import api from '@/api'
import store from '@/store'

async function beforeRouting(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  const response = await api.get('/sessions/currentUser').catch(console.error)
  if (response) {
    store.state.currentUser = response.data
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
