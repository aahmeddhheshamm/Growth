<template>
  <label class="block text-[16px] leading-6 text-primary-350 mb-[0.5rem] font-normal">
    {{$t(label)}}
  </label>
</template>

<script 
setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<style>
</style>