<template>
    <h5 class="text-[16px] font-normal text-primary-300 leading-[24px]">{{ $t(title) }} <slot name="anotherSubTitle"></slot></h5>
</template>

<script setup>
defineProps(["title"]);
</script>
