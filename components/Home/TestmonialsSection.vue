<script setup>
import {Pagination} from "swiper/modules";
</script>

<template>
  <div class="md:mb-[113px] mb-[76px]">
    <div class="">
      <div class="flex flex-col md:mb-[113px] mb-[64px] md:gap-[21px] gap-[14px]">
        <p class="text-center text-primary-200 font-semibold md:text-[48px] text-[28px]">What our clients say about us</p>
      </div>
    </div>
    <swiper
        :slides-per-view="4.5"
        :space-between="30"
        :pagination="{
              clickable: true,
          }"
        :modules="[Pagination]"
        :breakpoints="{
                     '320': {
                         slidesPerView: 1.5,
                         spaceBetween: 10
                      },
                    '640': {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                  '900': {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    '110':{
                         slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    '1424': {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    '1537': {
                      slidesPerView: 4.5,
                      spaceBetween: 30,
                    },
                  }"
        class="mySwiper"
    >
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">"Thank you to your wonderful team for your continuous support and assistance in helping us achieve great successes. The quality and attention to detail in every little aspect were amazing. We appreciate everything you’ve done for us."</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">"Thank you to your wonderful team for your continuous support and assistance in helping us achieve great successes. The quality and attention to detail in every little aspect were amazing. We appreciate everything you’ve done for us."</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">"Thank you to your wonderful team for your continuous support and assistance in helping us achieve great successes. The quality and attention to detail in every little aspect were amazing. We appreciate everything you’ve done for us."</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">"Thank you to your wonderful team for your continuous support and assistance in helping us achieve great successes. The quality and attention to detail in every little aspect were amazing. We appreciate everything you’ve done for us."</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">"Thank you to your wonderful team for your continuous support and assistance in helping us achieve great successes. The quality and attention to detail in every little aspect were amazing. We appreciate everything you’ve done for us."</p>
        </div>      </swiper-slide>

    </swiper>
  </div>
</template>

<style scoped>

</style>