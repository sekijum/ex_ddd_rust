<template>
  <List :item="user" />
</template>

<script setup lang="ts">
import List from '@/conponents/user/list.vue'
definePageMeta({ middleware: ['authenticated'] })

const { fetchUser, removeUser, user, isLoading } = useUser()

onMounted(async () => {
  await fetchUser()
})

const onRemove = async (id: number) => {
  await removeUser(id)
  isLoading.value = false
  await fetchUser()
}
</script>
