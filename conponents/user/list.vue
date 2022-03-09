<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>お名前</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
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
