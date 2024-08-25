<template>
  <div class="form-group">
    <label
        :for="id"
        class="capitalize p-0 font-semibold font-14 text-text-700"
        v-if="label"
    >{{ label }}</label
    >
    <Field
        :name="name"
        :rules="validation"
        validate-on-input
        validate-on-change
        validate-on-model-update
        validate-on-blur
        v-slot="{ handleChange, value, errors, field }"
        @input="$emit('update:modelValue', $event.target.value)"
        :modelValue="modelValue"

    >
        <div class="p-input-icon-left flex-grow mt-2 country-code bg-primary-450 rounded-xl border-[1px] border-primary-200  flex items-center ">
          <div class="country-code-code mx-4">
            <div class="flex items-center testphone">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_2215_29292)">
                  <path d="M23.2536 16.1725C23.736 14.8725 24 13.4665 24 11.9986C24 10.5308 23.736 9.12472 23.2536 7.82474L12 6.78125L0.746391 7.82474C0.264047 9.12472 0 10.5308 0 11.9986C0 13.4665 0.264047 14.8725 0.746391 16.1725L12 17.216L23.2536 16.1725Z" fill="#F0F0F0"/>
                  <path d="M12.0007 23.9999C17.1603 23.9999 21.5588 20.7434 23.2543 16.1738H0.74707C2.44263 20.7434 6.8411 23.9999 12.0007 23.9999Z" fill="#D80027"/>
                  <path d="M11.9997 0C6.84012 0 2.44166 3.2565 0.746094 7.82611H23.2534C21.5578 3.2565 17.1593 0 11.9997 0Z" fill="#6DA544"/>
                  <path d="M3.51471 3.51367C-1.17157 8.19995 -1.17157 15.798 3.51471 20.4843C4.73791 19.2611 5.93182 18.0672 7.82609 16.1729V7.82509L3.51471 3.51367Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_2215_29292">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span class="mx-2">965+</span>
            </div>
          </div>
<!--          <template v-if="errors.length > 0">-->
<!--            <slot :icon="true" name="icon"></slot>-->
<!--          </template>-->
<!--          <template v-else>-->
<!--            <slot :icon="false" name="icon"></slot>-->
<!--          </template>-->
          <InputText
              @keyup="$emit('write', value)"
              class="border-4 form-control !m-0"
              :class="['w-full', { 'is-invalid': errors.length > 0 }]"
              :feedback="false"
              :placeholder="placeholder"
              :type="type"
              :id="id + name"
              :disabled="disabled"
              toggleMask
              @update:modelValue="handleChange"
              @blur="handleChange"
              v-bind="field"
              @keydown="handleSpace"
              autocomplete="new-password"
          />
        </div>

    </Field>
    <ErrorMessage :name="name" class="!text-red-500 text-xs mt-1" />
  </div>
</template>
<script>

import {ErrorMessage} from "vee-validate";

export default {
  name: "Input",
  components: {ErrorMessage},
  props: {
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    validation: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    modelValue: {
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hasValidationField: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  methods: {
    handleSpace(event) {
      if (event.keyCode === 32 && event.target.value.length < 1) {
        event.preventDefault();
      }
      if(event.target.name === 'number'){
        if(event.key === 'e'){
          event.preventDefault();
        }
      }
    },
  },
};
</script>

<style lang="scss">
.country-code {
  width: 100% !important;
  //background-color: #fff !important;
  //border: 1px solid #d7dbda !important;
  font-size: 14px !important;
  //border-radius: 10px !important;
  .form-control {
    border: none !important;
    background: transparent !important;
    border-radius: 0 !important;
    border-inline-start: 1px solid  #d7dbda !important;
  }
  .testphone {
    border-radius: 0 !important;
    border: none !important;
    margin: 0 !important;
  }
}
</style>
