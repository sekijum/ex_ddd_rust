<template>
  <div>
    <CreateForm :form="form" @onSave="onSave" />
  </div>
</template>
<script setup lang="ts">
import CreateForm from '@/conponents/post/form.vue'
import { TPostForm } from '@/models/post'

const { savePost } = usePost()

const form = ref<TPostForm>({
  title: undefined,
  content: undefined,
})

const onSave = async () => {
  await savePost(form.value)
  useRouter().back()
}
</script>
