<script setup>
import {Pagination} from "swiper/modules";
defineProps(['headerSlider'])
</script>

<template>
  <div class=" lg:mb-[50px] mb-[24px]">
    <swiper
        :spaceBetween="1"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :modules="[SwiperAutoplay, Pagination]"
        class="mySwiper"
    >
      <swiper-slide v-for="(item, key) in headerSlider" :key="key.id">
        <div class="lg:h-[391px] h-[120px]">
          <a :href="item?.link || '/'" target="_blank">
            <img :src="item.image" class="w-full h-full object-cover"/>
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet{
  background: #E8E8E8 !important;
  opacity: 1 !important;
  width: 13px !important;
  height: 13px !important;
}
.swiper-pagination-bullet-active{
  background: white !important;
}
</style>