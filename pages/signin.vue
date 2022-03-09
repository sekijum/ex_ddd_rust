<template>
  <div>
    <SigninForm :form="form" @onSave="onSave" />
  </div>
</template>
<script setup lang="ts">
import SigninForm from '@/conponents/signin.vue'
import { ISignin } from '@/models/session'

const router = useRouter()

const { signin } = useSession()
const form = ref<ISignin>({
  email: undefined,
  password: undefined,
})

const onSave = async (form) => {
  await signin(form)
  router.push({ name: 'user' })
}
</script>
