<template>
  <div class="breadcrumb bg-secondary-200 py-[14px]">
    <ul class="flex container">
      <li
        v-for="(breadcrumb, index) in items"
        :key="index"
        class="flex items-center gap-4"
      >
        <nuxt-link v-if="breadcrumb.active == true"
          :to="localePath(breadcrumb.to)"
          class="text-primary-400 text-[16px] font-normal"
        >
          {{ breadcrumb.text }}
          <span class="text-[16px] text-primary-200" v-if="index < items.length - 1">  >  </span>
        </nuxt-link>
        <div v-else>
          <div class="flex items-center">
          <nuxt-link
              :to="localePath(breadcrumb.to)"
              class=" text-[16px] font-semibold text-primary-200"> {{ breadcrumb.text }}</nuxt-link>
            <span class="text-[16px] text-primary-200 mx-4">  >  </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useLocalePath} from "#i18n";
const localePath = useLocalePath()
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
