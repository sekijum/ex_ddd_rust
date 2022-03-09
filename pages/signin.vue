<template>
  <div>
    <SigninForm :form="form" @onSave="onSave" />
  </div>
</template>
<script setup lang="ts">
import SigninForm from '@/conponents/signin.vue'
import { ISignIn } from '@/models/session'

const router = useRouter()

const { signIn } = useSession()
const form = ref<ISignIn>({
  email: undefined,
  password: undefined,
})

const onSave = async (form) => {
  await signIn(form)
  router.push({ name: 'user' })
}
</script>
