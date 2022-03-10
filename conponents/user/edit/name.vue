<template>
  <div class="box">
    <p>
      Amazonアカウントに関連付けられている名前を変更する場合は、下で変更を行うことができます。完了したら、[変更を保存]
      ボタンをクリックしてください。
    </p>
    <Form @submit="$emit('onSave')" :validation-schema="schema">
      <div class="ユーザーフォーム">
        <p class="control has-icons-left has-icons-right">
          <Field class="input" placeholder="名前" name="name" />
          <ErrorMessage name="name" class="has-text-danger" />
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
import { IUser } from '@/models/user'

const { schema } = useUserValidate()

defineProps<{
  name: Pick<IUser, 'name'>
}>()

const onCancel = () => {
  useRouter().back()
}
</script>
