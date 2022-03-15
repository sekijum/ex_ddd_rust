<template>
    <div>
        <PageHeader title="Change personal information" />
        <Name v-if="EditType === 'NAME'" :name="user.name" @onSave="onSave" />
        <Email v-if="EditType === 'EMAIL'" :email="user.email" @onSave="onSave" />
        <Password :form="form" v-if="EditType === 'PASSWORD'" @onSave="onSave" />
    </div>
</template>

<script setup lang="ts">
import PageHeader from '@/conponents/tools/page.header.vue'
import Name from '@/conponents/user/edit/name.vue'
import Email from '@/conponents/user/edit/email.vue'
import Password from '@/conponents/user/edit/password.vue'
import { omit } from 'lodash'
import { TPasswordForm } from '@/models/user/user.form'

const route = useRoute()
const EditType = route.params.type

const { fetchUser, saveUser, renewPassword, user } = useUser()

await fetchUser()

const form = ref<TPasswordForm>({
    oldPassword: undefined,
    password: undefined,
    passwordConfirm: undefined,
})

const onSave = async () => {
    EditType === 'PASSWORD'
        ? await renewPassword(form.value)
        : await saveUser({ ...omit(user.value, 'id') })
    useRouter().back()
}
</script>
