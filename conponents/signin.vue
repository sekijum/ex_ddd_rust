<template>
  <div class="box">
    <Form @submit="$emit('onSave', form)" :validation-schema="schema">
      <div class="field">
        <p class="control has-icons-left">
          <Field class="input" placeholder="メールアドレス" name="email" v-model="form.email" />
          <ErrorMessage name="email" class="has-text-danger" />
          <span class="icon is-small is-left">
            <i class="mdi mdi-grease-pencil"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <Field
            type="password"
            class="input"
            placeholder="パスワード"
            name="password"
            v-model="form.password"
          />
          <ErrorMessage name="password" class="has-text-danger" />
          <span class="icon is-small is-left">
            <i class="mdi mdi-grease-pencil"></i>
          </span>
        </p>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">signin</button>
        </div>
      </div>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate'
import { ISignin } from '@/models/session'

const { schema } = useSessionValidate()

defineProps<{
  form: ISignin
}>()
</script>
