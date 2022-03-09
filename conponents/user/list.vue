<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>お名前</q-item-label>
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
        <div class="q-pa-md q-gutter-sm">
          <nuxt-link to="/user/edit/name">
            <q-btn outline style="color: goldenrod" label="変更" />
          </nuxt-link>
        </div>
      </q-item>
    </q-list>
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>メールアドレス</q-item-label>
          <q-item-label>{{ item.email }}</q-item-label>
        </q-item-section>
        <div class="q-pa-md q-gutter-sm">
          <nuxt-link to="/user/edit/email">
            <q-btn outline style="color: goldenrod" label="変更" />
          </nuxt-link>
        </div>
      </q-item>
    </q-list>
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>パスワード</q-item-label>
          <q-item-label>********</q-item-label>
        </q-item-section>
        <div class="q-pa-md q-gutter-sm">
          <nuxt-link to="/user/edit/password">
            <q-btn outline style="color: goldenrod" label="変更" />
          </nuxt-link>
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { IUser } from '@/models/user'

defineProps<{
  item: IUser
}>()
</script>
