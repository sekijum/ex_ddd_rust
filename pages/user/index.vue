<template>
  <List :item="user" />
</template>

<script setup lang="ts">
import List from '@/conponents/user/list.vue'

const { fetchUser, user } = useUser()

await fetchUser()
</script>
