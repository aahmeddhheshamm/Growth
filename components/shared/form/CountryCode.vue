<script setup>
// get country code
import InputField from "~/components/shared/form/InputField.vue";

const {countries} = await useCountryCodes();
const phone = defineModel('phone')
const country_code = defineModel('country_code')
if (typeof country_code.value === "string"){
  const selectedCountry = countries.value.find(el=>el.country_code === country_code.value)
  if (selectedCountry){
    country_code.value = selectedCountry
  }
}
</script>

<template>
  <div class="flex items-start">
    <div class="flex-1">
      <input-field
          name="phone"
          v-model="phone"
          label="phoneNumber"
          validation="required"
          type="text"
          :placeholder="$t('enterPhoneNumber')"
          id="phone"
      />
    </div>
    <div class="mt-4">
       <Dropdown v-model="country_code"  :empty-message="$t('noAvailableOptions')" :options="countries" :placeholder="$t('countryCode')" class="py-1 mt-[14px] h-[38px] lg:h-[43.81px] xl:h-[49.79px]  lg:mt-[14px] xl:mt-3 country-code-special">
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex align-items-center">
              <img v-if="slotProps.value?.image" :alt="slotProps.value?.country_code" :src="slotProps.value?.image" :class="`mr-2 flag`" style="width: 28px" />
              <div>{{ slotProps.value?.country_code }}</div>
            </div>
            <span v-else>
                    {{ slotProps.placeholder }}
                </span>
          </template>
          <template #option="slotProps">
            <div class="flex align-items-center gap-2">
              <img :alt="slotProps.option?.country_code" :src="slotProps.option?.image" :class="`mr-2 flag `" style="width: 28px" />
              <div>{{ slotProps.option?.country_code }}</div>
            </div>
          </template>
        </Dropdown>

    </div>
  </div>
</template>
<style>
@media(1280px<= width <1600px){
  .country-code-special{
    height:43.81px!important;
    margin-top:14px;
  }
}
@media(768px<= width <1024px){
  .country-code-special{
    height:43.81px!important;
    margin-top:14px;
  }
}
@media(768px<= width <991px){
  .country-code-special{
    height:40px!important;
    margin-top:14px;
  }
}
</style>