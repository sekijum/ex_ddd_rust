<template>
  <div>
    <UpdateForm :form="post" @onSave="onSave" />
  </div>
</template>

<script setup lang="ts">
import UpdateForm from '@/conponents/post/form.vue'
import { omit } from 'lodash'
definePageMeta({ middleware: ['authenticated'] })

const { fetchPost, savePost, post } = usePost()

await fetchPost()

const onSave = async () => {
  await savePost({ ...omit(post.value, 'id') })
  useRouter().back()
}
</script>
