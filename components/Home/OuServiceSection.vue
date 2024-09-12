<script setup>
import {Pagination} from "swiper/modules";
</script>

<template>
  <div class="md:mb-[350px] mb-[180px]">
    <div class="">
      <div class="flex flex-col md:mb-[101px] mb-[64px] md:gap-[21px] gap-[14px]">
        <p class="text-center text-primary-200 font-semibold md:text-[48px] text-[26px]">Our Services</p>
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
        <div class="h-[550px] rounded-[40px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/images/services/analysis.png" alt="Business Analysis" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[550px] rounded-[40px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/images/services/uiux.png" alt="UI/UX" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[550px] rounded-[40px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/images/services/development.png" alt="Development" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[550px] rounded-[40px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/images/services/seo.png" alt="Seo" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[550px] rounded-[40px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/images/services/marketing.png" alt="Marketing" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[550px] rounded-[40px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/images/services/graphic.png" alt="Graphic Design" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[550px] rounded-[40px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/images/services/photography.png" alt="Photography" onerror="this.src='/default-cover.png'">
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<style scoped>

</style>