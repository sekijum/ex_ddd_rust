<template>
  <div class="q-pa-md">
    <div class="row no-wrap shadow-1">
      <q-toolbar class="col-8 bg-grey-3">
        <q-btn flat round dense icon="fa fa-pen" />
        <q-toolbar-title>Title</q-toolbar-title>
        <q-btn flat round dense icon="fa fa-pen" />
      </q-toolbar>
      <q-toolbar class="col-4 bg-primary text-white">
        <q-space />
        <q-btn flat round dense icon="fa fa-pen" class="q-mr-sm" />
        <q-btn flat round dense icon="fa fa-pen" />
      </q-toolbar>
    </div>
  </div>
</template>
<script setup lang="ts">
import api from '@/api.1'

onMounted(async () => {})
</script>
