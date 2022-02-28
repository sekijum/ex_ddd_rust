<template>
  <div>
    <SignForm :form="form" @onSave="onSave" />
  </div>
</template>
<script setup lang="ts">
import SignForm from '@/conponents/signup.vue'
import { ISignup } from '@/models/session'

const router = useRouter()

const { signUp } = useSession()
const form = ref<ISignup>({
  email: undefined,
  password: undefined,
})

const onSave = async (form) => {
  const response = await signUp(form)
  console.error(response)
  router.push({ name: 'user' })
}
</script>
