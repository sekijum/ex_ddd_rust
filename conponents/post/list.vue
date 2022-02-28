<template>
  <div class="q-pa-md">
    <button>
      <NuxtLink to="/post/create"> 作成 </NuxtLink>
    </button>

    <q-table title="投稿一覧" :rows="items" :columns="columns" color="primary">
      <template v-slot:body-cell-edit="props">
        <q-td :props="props">
          <button
            class="button is-warning"
            @click="router.push({ name: 'post-edit', params: { id: props.row.id } })"
          >
            変更
          </button>
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
import { IPost } from '@/models/post'

const router = useRouter()

defineProps<{
  items: Array<IPost>
  isLoading: Boolean
}>()
const columns = [
  { name: 'id', label: 'id', field: 'id' },
  { name: 'title', label: 'title', field: 'title' },
  { name: 'content', label: 'content', field: 'content' },
  { name: 'edit', label: 'Edit', field: 'Edit' },
  { name: 'delete', label: 'Delete', field: 'Delete' },
]
</script>
