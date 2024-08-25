<script setup>
defineProps({
  title:{
    type:String,
    required:true
  }
})
</script>

<template>
<h4 class="text-2xl	mt-12 mx-0 mb-4 px-[15px] pt-0  pb-[7.5px] border-b border-b-[#dee2e6] ">{{ title }}</h4>
</template>

<style scoped>

</style>