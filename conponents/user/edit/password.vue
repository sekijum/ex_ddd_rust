<template>
  <div class="box">
    <Form @submit="$emit('onSave')" :validation-schema="schema">
      <div class="field">
        <p class="control has-icons-left">
          <Field type="password" class="input" placeholder="パスワード" name="password" />
          <ErrorMessage name="password" class="has-text-danger" />
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

const { schema } = useUserValidate()

defineProps<{}>()

const onCancel = () => {
  useRouter().back()
}
</script>
