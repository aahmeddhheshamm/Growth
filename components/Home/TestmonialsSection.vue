<script setup>
import {Pagination} from "swiper/modules";
</script>

<template>
  <div class="md:mb-[250px] mb-[150px] md:mx-[65px] mx-[32px]">
    <div class="">
      <div class="flex items-center justify-center w-full md:mb-[55px] mb-[32px]">
        <p class="text-center text-primary-200 font-bold md:text-[48px] text-[28px] max-w-[503px]">What our clients say about us</p>
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
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px] mx-[10px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">
            Outstanding service and a professional team! Thanks to them, we significantly increased our sales.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px] mx-[10px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img2.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">
            "I can't describe how professional your team is! From the very first moment, we felt we were in safe hands. The dedication and high level of professionalism helped us reach our goals quickly and efficiently. I will definitely recommend your services to anyone looking to develop their e-commerce business."          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px] mx-[10px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img3.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">
            "Thank you to your wonderful team for your continuous support and assistance in helping us achieve great successes. The quality and attention to detail in every little aspect were amazing. We appreciate everything you’ve done for us."          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px] mx-[10px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img4.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">
            "Your team is simply the best! Not only did they complete the required tasks in record time, but they also provided innovative ideas that helped us stand out among our competitors. Thank you for this fantastic work."
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-[352px] flex flex-col gap-[20px] bg-white rounded-md ps-[26px] py-[32px] pe-[16px] mx-[10px]">
          <div class="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/user-img5.png" alt="user" onerror="this.src='/default-cover.png'">
          </div>
          <p class="text-primary-100 md:text-[20px] text-[12px]">
            "I can't express how impressed I am with your team. The efficiency, professionalism, and commitment to deadlines made our experience with you exceptional. Thank you to every member of the team."
          </p>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<style scoped>

</style>