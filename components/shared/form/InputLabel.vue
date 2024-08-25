<template>
  <label
    :for="for"
    class="block text-sm leading-6 text-black mb-1 font-semibold"
  >
    <slot></slot>
  </label>
</template>

<script 
setup>
defineProps({
  for: {
    type: String,
    required: true,
  },
});
</script>

<style>
</style>