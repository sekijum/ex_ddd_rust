import { RouteLocationNormalized } from 'vue-router'
import store from '@/store'

async function beforeRouting(to: RouteLocationNormalized) {
  const { currentUser } = useSession()

  await currentUser()

  if (to.name != 'signin' && !store.state.currentUser) {
    return { name: 'signin' }
  }
  return
}

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.beforeEach(async (to, from, next) => {
    const result = await beforeRouting(to)
    next(result)
  })
})
