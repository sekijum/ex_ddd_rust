<template>
  <div class="q-pa-md">
    <button>
      <NuxtLink to="/user/create"> 作成 </NuxtLink>
    </button>

    <q-table title="ユーザー一覧" :rows="items" :columns="columns" color="primary">
      <template v-slot:body-cell-edit="props">
        <q-td :props="props">
          <NuxtLink class="button is-warning" :to="`/user/edit-${props.row.id}`">変更</NuxtLink>
        </q-td>
      </template>
      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <div class="buttons">
            <q-btn
              :class="isLoading ? 'button is-danger is-loading ' : 'button is-danger'"
              @click="$emit('onRemove', props.row.id), (isLoading = true)"
            >
              削除
            </q-btn>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script setup lang="ts">
import { IUser } from '@/models/user'

defineProps<{
  items: Array<IUser>
  isLoading: Boolean
}>()
const columns = [
  { name: 'id', label: 'id', field: 'id' },
  { name: 'name', label: 'name', field: 'name' },
  { name: 'emial', label: 'email', field: 'email' },
  { name: 'edit', label: 'Edit', field: 'Edit' },
  { name: 'delete', label: 'Delete', field: 'Delete' },
]
</script>
