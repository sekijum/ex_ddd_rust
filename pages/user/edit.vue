<template>
  <div>
    <PageHeader title="Change personal information" />
    <Name v-if="EditType === 'NAME'" :name="user.name" />
    <Email v-if="EditType === 'EMAIL'" :email="user.email" />
    <Password v-if="EditType === 'PASSWORD'" />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/conponents/tools/page.header.vue'
import Name from '@/conponents/user/edit/name.vue'
import Email from '@/conponents/user/edit/email.vue'
import Password from '@/conponents/user/edit/password.vue'
import { omit } from 'lodash'

const route = useRoute()
const EditType = route.params.type

const { fetchUser, user } = useUser()

await fetchUser()
</script>
