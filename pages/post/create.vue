<template>
  <div>
    <CreateForm :form="post" @onSave="onSave" />
  </div>
</template>
<script setup lang="ts">
import CreateForm from '@/conponents/post/form.vue'
import { TPostForm } from '@/models/post'

const { savePost } = usePost()

const post = ref<TPostForm>({
  title: undefined,
  content: undefined,
})

const onSave = async () => {
  await savePost(post.value)
  useRouter().back()
}
</script>
