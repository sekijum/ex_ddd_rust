<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>お名前</q-item-label>
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            outline
            style="color: goldenrod"
            label="変更"
            @click="router.push({ name: 'user-edit', params: { type: 'NAME' } })"
          />
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
          <q-btn
            outline
            style="color: goldenrod"
            label="変更"
            @click="router.push({ name: 'user-edit', params: { type: 'EMAIL', id: item.id } })"
          />
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
          <q-btn
            outline
            style="color: goldenrod"
            label="変更"
            @click="router.push({ name: 'user-edit', params: { type: 'PASSWORD' } })"
          />
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { IUser } from '@/models/user'

const router = useRouter()

defineProps<{
  item: IUser
}>()
</script>
