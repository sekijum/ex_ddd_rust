<template>
  <div>
    <List :items="users" :isLoading="isLoading" @onRemove="onRemove" />
  </div>
</template>
<script setup lang="ts">
import List from '@/conponents/user/list.vue'

const { fetchUsers, users } = useUsers()
const { removeUser, isLoading } = useUser()

onMounted(async () => {
  await console.log('this is user page.')
  await fetchUsers()
})

const onRemove = async (id: number) => {
  await removeUser(id)
  isLoading.value = false
  await fetchUsers()
}
</script>
