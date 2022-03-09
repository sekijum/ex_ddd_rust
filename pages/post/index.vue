<template>
  <div>
    <List :items="posts" :isLoading="isLoading" @onRemove="onRemove" />
  </div>
</template>
<script setup lang="ts">
import List from '@/conponents/post/list.vue'

const { fetchPosts, posts } = usePosts()
const { removePost, isLoading } = usePost()

onMounted(async () => {
  await fetchPosts()
})

const onRemove = async (id: number) => {
  const deleteSucceeded = await removePost(id)
  isLoading.value = false
  await fetchPosts()
}
</script>
