<template>
  <div class="box">
    <Form @submit="$emit('onSave')" :validation-schema="schema">
      <div class="投稿フォーム">
        <p class="control has-icons-left has-icons-right">
          <Field class="input" placeholder="タイトル" name="title" v-model="form.title" />
          <ErrorMessage name="title" class="has-text-danger" />
          <span class="icon is-small is-left">
            <i class="mdi mdi-grease-pencil"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <Field class="input" placeholder="本文" name="content" v-model="form.content" />
          <ErrorMessage name="content" class="has-text-danger" />
          <span class="icon is-small is-left">
            <i class="mdi mdi-grease-pencil"></i>
          </span>
        </p>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="onCancel">Cancel</button>
        </div>
      </div>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate'
import { TPostForm } from '@/models/post'

const { schema } = usePostValidate()

defineProps<{
  form: TPostForm
}>()

const onCancel = () => {
  useRouter().back()
}
</script>
