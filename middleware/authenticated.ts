import store from '@/store'

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  if (!store.state.currentUser) {
    return router.push({ name: 'signin' })
  }
})
