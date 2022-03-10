<template>
  <div class="box">
    <p>
      現在のEメールアドレス: jun200191@gmail.com
      <br />
      以下のアカウントに関連付ける新しいEメールアドレスを入力してください。このアドレスに認証コードが送信されます。
    </p>
    <Form @submit="$emit('onSave')" :validation-schema="schema">
      <div class="field">
        <p class="control has-icons-left">
          <Field class="input" placeholder="メールアドレス" name="email" />
          <ErrorMessage name="email" class="has-text-danger" />
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
  email: Pick<IUser, 'email'>
}>()

const onCancel = () => {
  useRouter().back()
}
</script>
