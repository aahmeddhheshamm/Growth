<script setup>
import {useLocalePath} from "#i18n";
const localePath = useLocalePath()
defineProps(["title", "btnTitle", "url", "link"]);
</script>

<template>
  <div class="flex items-center justify-between">
      <h5 class="text-[24px] font-semibold text-primary-400">{{ $t(title) }}</h5>
    <NuxtLink
        v-if="url"
        :to="localePath(url)"
        class="text-primary-200 text-[16px] text-xm font-bold flex items-center"
    >
      <span class="lg:inline-block hidden">{{ $t(btnTitle) }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
