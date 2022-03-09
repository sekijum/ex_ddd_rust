<template>
  <div>
    <UpdateForm :form="user" @onSave="onSave" />
  </div>
</template>

<script setup lang="ts">
import UpdateForm from '@/conponents/user/form.vue'
import { omit } from 'lodash'
definePageMeta({ middleware: ['authenticated'] })

const { fetchUser, saveUser, user } = useUser()

await fetchUser()

const onSave = async () => {
  await saveUser({ ...omit(user.value, 'id') })
  useRouter().back()
}
</script>
