<script setup>
import {Pagination} from "swiper/modules";
</script>

<template>
  <div class="md:mb-[250px] mb-[128px]">
    <div class="">
      <div class="flex flex-col md:mb-[101px] mb-[64px] md:gap-[21px] gap-[14px]">
        <p class="text-center text-primary-200 font-semibold md:text-[48px] text-[26px]">Our Portfolio</p>
        <p class="text-center text-primary-200 md:text-[20px] text-[14px] font-medium">Projects generating more than $100,000</p>
      </div>
    </div>
    <swiper
        :slides-per-view="3"
        :space-between="15"
        :pagination="{
              clickable: true,
          }"
        :modules="[Pagination]"
        :breakpoints="{
                     '320': {
                         slidesPerView: 1,
                         spaceBetween: 10
                      },
                    '640': {
                      slidesPerView: 1.5,
                      spaceBetween: 10,
                    },
                  '900': {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    '110':{
                         slidesPerView: 2.5,
                      spaceBetween: 15,
                    },
                    '1424': {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    }
        }"
        class="mySwiper"
    >
      <swiper-slide>
        <div class="md:h-[600px] h-[350px]">
          <img class="w-full h-full object-cover" src="@/assets/images/swiper1.png" alt="Toyz" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="md:h-[600px] h-[350px]">
          <img class="w-full h-full object-cover" src="@/assets/images/swiper2.png" alt="Sheyaka" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="md:h-[600px] h-[350px]">
          <img class="w-full h-full object-cover" src="@/assets/images/swiper3.png" alt="Palta" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="md:h-[600px] h-[350px] bg-white">
          <p class="text-center text-primary-100 font-semibold text-[48px]">Our Portfolio</p>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<style scoped>

</style>