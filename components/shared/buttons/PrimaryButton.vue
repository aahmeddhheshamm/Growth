<script setup>
import LoaderButton from "~/components/shared/loders/LoaderButton.vue";
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  disabledClass: {
    type: String,
    default: "!bg-mutedColor",
  },
  type: {
    type: String,
    default: "button",
  },
  submitTitle: {
    type: String,
    default: "",
  },
  classContent: {
    type: String,
    default: "px-4",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="[
      'bg-primary-200 hover:bg-white hover:text-primary-200 hover:border-primary-200 text-white border rounded-[3.75px] min-w-[112px] min-h-[31px] font-semibold text-[15px]  py-[8.5px] px-[16px]',
      disabled ? `${disabledClass} cursor-not-allowed` : '',
    ]"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <loader-button v-if="loading" />
    <slot v-else>
      <span>{{ $t(submitTitle) }}</span>
    </slot>
  </button>
</template>

<style scoped></style>
