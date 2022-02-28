<template>
  <div>
    <CreateForm :form="user" @onSave="onSave" />
  </div>
</template>
<script setup lang="ts">
import CreateForm from '@/conponents/user/form.vue'
import { TUserForm } from '@/models/user'

const { saveUser } = useUser()

const user = ref<TUserForm>({
  name: undefined,
  email: undefined,
  password: undefined,
})

const onSave = async () => {
  await saveUser(user.value)
  useRouter().back()
}
</script>
