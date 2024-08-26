<script setup>
import sectionBg from "~/assets/images/section-background.png";
import {Pagination} from "swiper/modules";

</script>

<template>
  <div class="mb-[71px] mt-[15px]">
    <div class="container mt-[70px] mb-[66px]">
      <h1 class="text-center text-primary-200 font-semibold">GrowthTeam</h1>
      <p class="text-center text-primary-200 text-[24px] font-semibold">Your Partner in Building a Thriving Online Presence</p>
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 md:gap-[124px] gap-[82px] mb-[28px]">
      <div class="md:ps-[82px] flex flex-col md:gap-[59px] gap-[42px]">
        <h1 class="text-center text-primary-200 font-semibold w-[520px]">Lets Grow Together</h1>
        <p class="md:mx-0 mx-[24px] text-primary-200 text-[19px] font-semibold">
          Welcome to “Growth Team”, where your business vision transforms into thriving reality. We are a specialized e-commerce team, dedicated to leveraging our deep expertise and advanced strategies to help companies achieve unprecedented growth in their sales. Our goal is to multiply your successes through innovative solutions tailored specifically to meet the needs of your target market. Let us be your partners in leading the journey toward digital excellence and expansion.
        </p>
      </div>
      <div class="">
        <div class=" overflow-hidden">
          <img style="width: 100%;height: 810px;" src="@/assets/images/home-mobile.png" class="lazy img-fluid" alt="About US">
        </div>
      </div>
    </div>

    <div class="relative md:min-h-[800px] min-h-[350px]">
      <div class="absolute right-0 md:top-[-200px] top-[-100px]">
        <img style="height: 100%;" src="@/assets/images/section-background.png" class="lazy img-fluid md:w-[500px] w-[200px] md:h-[1000px] h-[350px]" alt="About US">
      </div>

      <div class="container">
        <div class="md:mt-[76px] overflow-hidden">
          <img style="width: 100%;" src="@/assets/images/infinte-img.png" class="lazy img-fluid relative" alt="About US">
          <img style="width: 70%;" src="@/assets/images/infinte2.png" class="lazy img-fluid absolute xl:top-10 lg:top-20 md:top-20 top-12 xl:right-60 lg:right-44 md:right-32 right-24" alt="About US">
        </div>
      </div>
    </div>


    <LazyHomePortfolioSection />

    <LazyHomeTestmonialsSection />

    <LazyHomeBannerSection />

    <LazyHomeAboutSection />

    <div class="mt-[210px] mb-[300px]">
      <div class="flex justify-center items-center overflow-hidden">
        <img style="width: 30%" src="@/assets/images/circles.png" class="lazy img-fluid" alt="Circles">
      </div>
    </div>
  </div>

</template>

<style>
</style>