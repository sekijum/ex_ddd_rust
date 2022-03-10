<template>
  <div>
    <div>
      <span>
        {{ title }}
      </span>
      <slot name="start"> </slot>
    </div>
    <div>
      <slot name="end"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: String,
})
</script>
