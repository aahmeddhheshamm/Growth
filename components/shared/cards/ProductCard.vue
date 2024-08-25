<template>
  <div>
    <div class="rounded-[10px] cursor-pointer overflow-hidden">
      <div>
        <div
            :style="{'--image':`url(${item?.image || ''})`}"
            class="relative w-full h-[269px] card--image"
        >
          <div class="absolute right-4 top-3 w-[49px] h-[42px] ">
            <button v-if="item.is_favorite == false" @click="!user ? router.push(localePath('/auth')) : addToWishlist(item.id)" class="flex justify-center items-center w-[50px] h-[44px] rounded-[10px] bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26" fill="none">
              <path d="M14.4449 21.9339L12.8044 20.5956C10.2457 18.5018 8.02745 16.5036 6.14967 14.6009C4.2719 12.6982 3.33301 10.7091 3.33301 8.63345C3.33301 6.9948 3.95721 5.6247 5.20563 4.52316C6.45404 3.42162 7.9965 2.87085 9.83301 2.87085C10.8854 2.87085 11.9275 3.09389 12.9592 3.53997C13.9909 3.98605 14.9092 4.71889 15.714 5.7385C16.6219 4.71889 17.5608 3.98605 18.5306 3.53997C19.5005 3.09389 20.5219 2.87085 21.5949 2.87085C23.4314 2.87085 24.9739 3.42162 26.2223 4.52316C27.4707 5.6247 28.0949 6.9948 28.0949 8.63345C28.0949 10.7091 27.156 12.6982 25.2782 14.6009C23.4005 16.5036 21.1822 18.5018 18.6235 20.5956L16.983 21.9339C16.6322 22.2252 16.2092 22.3708 15.714 22.3708C15.2187 22.3708 14.7957 22.2252 14.4449 21.9339ZM14.9092 7.54102C14.3521 6.64886 13.6195 5.92057 12.7116 5.35614C11.8036 4.79172 10.8441 4.50951 9.83301 4.50951C8.4711 4.50951 7.35682 4.89641 6.49015 5.67022C5.62348 6.44403 5.19015 7.43177 5.19015 8.63345C5.19015 9.68948 5.59253 10.7956 6.39729 11.9517C7.20205 13.1079 8.16158 14.2322 9.27586 15.3246C10.3901 16.4171 11.5457 17.4321 12.7425 18.3698C13.9394 19.3075 14.9298 20.0949 15.714 20.7322C16.4981 20.1131 17.4886 19.3302 18.6854 18.3835C19.8822 17.4367 21.0378 16.4125 22.1521 15.311C23.2663 14.2094 24.2259 13.0806 25.0306 11.9244C25.8354 10.7683 26.2378 9.67127 26.2378 8.63345C26.2378 7.43177 25.7993 6.44403 24.9223 5.67022C24.0453 4.89641 22.9362 4.50951 21.5949 4.50951C20.5632 4.50951 19.5985 4.78717 18.7009 5.34249C17.8032 5.89781 17.0552 6.63065 16.4568 7.54102C16.3536 7.68668 16.2401 7.79137 16.1163 7.85509C15.9925 7.91882 15.8481 7.95068 15.683 7.95068C15.5179 7.95068 15.3683 7.91882 15.2342 7.85509C15.1001 7.79137 14.9917 7.68668 14.9092 7.54102Z" fill="#212121"/>
            </svg>
            </button>
            <button v-else @click="!user ? router.push(localePath('/auth')) : removeProductFromWishlist(item.id)" class="flex justify-center items-center w-[50px] h-[44px] rounded-[10px] bg-white">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4922 2.46484C19.707 4.36328 19.8125 7.73828 17.8438 9.77734L11.0234 16.8086C10.6016 17.2656 9.86328 17.2656 9.44141 16.8086L2.62109 9.77734C0.652344 7.73828 0.757812 4.36328 2.97266 2.46484C4.90625 0.8125 7.78906 1.12891 9.54688 2.95703L10.25 3.66016L10.918 2.95703C12.7109 1.12891 15.5586 0.8125 17.4922 2.46484Z" fill="#F91216"/>
              </svg>
            </button>
          </div>
          <div class="absolute bottom-4 start-4 rounded-[4px] bg-[#2ECC71] px-[8px] py-[6px]" v-if="classificationBadge">
            <span class="text-[13px] font-normal text-white">{{item?.classification}}</span>
          </div>
        </div>



      </div>

      <div class="bg-primary-600 px-[14px] pb-[19px] pt-[6px] relative">

        <div class="pt-[17px] flex flex-col gap-[9px]">
          <h5 class="font-normal text-[16px] text-primary-400">{{  item?.title }}</h5>
          <div v-if="item.discount > 0" class="flex items-center justify-between">
            <p class="text-primary-200 text-[17px] font-normal">{{ item?.after_discount}} {{$t('sar')}}</p>
            <p class="text-gray-850 text-[17px] font-normal line-through">{{ item?.price}} {{$t('sar')}}</p>
          </div>
          <p v-else class="text-primary-200 text-[17px] font-normal">{{ item?.price}} {{$t('sar')}}</p>

          <CartButton class="!w-full mt-[9px] "
                      :class="item.out_of_stock ? '!bg-gray-50' : '!bg-primary-150'"
                      :submit-title="item.out_of_stock ? 'outStock' : 'showDetails'"
                      type="button"
                      @click="router.push(localePath(`/stores/${item?.store?.url_slug}/${item?.store?.id}/products/${item?.id}`))"
          />

        </div>
        <div class="absolute top-[-38px] w-[49px] h-[49px] rounded-full bg-[#E6E6E6] end-[9.5px] overflow-hidden	drop-shadow-md" v-if="showStoreLogo">
          <img :src="item?.store?.logo || ''"
               onerror="this.src='/default-cover.png'"
               alt="store logo" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartButton from "~/components/shared/buttons/CartButton.vue";
import {useLocalePath} from "#i18n";
import useAuth from "~/composables/useAuth.js";
import useMutate from "~/composables/useMutate.js";
const emit = defineEmits(['update-item'])
const router = useRouter()
const localePath = useLocalePath()
const props = defineProps({
  item:{required:true},
  showStoreLogo:{
    required:false,
    type:Boolean,
    default:false
  }  ,
  classificationBadge:{
    required:false,
    type:Boolean,
    default:false
  }
})
const {user} = useAuth();
const {$intercept} = useNuxtApp()

const apiAddProductToWishlist = (data) => $intercept('v2/favorites/store', {
  method: "POST",
  body: JSON.stringify(data)
})

const {mutate, isPending} = useMutate({
  mutationFn: apiAddProductToWishlist,
});
function addToWishlist(id){
  mutate({product_id: id}, {
    onSuccess: (res) => {
      emit('update-item', res.data);
    },
    onError: (err) => {
    }
  });
}

const apiDeleteProductToWishlist = (data) => $intercept(`v2/favorites/delete`, {
  method: "POST",
  body: JSON.stringify(data)
})

const {mutate: mutateDelete, isPending: pendingDelete} = useMutate({
  mutationFn: apiDeleteProductToWishlist,
});
function removeProductFromWishlist(id){
  mutateDelete({product_id: id}, {
    onSuccess: (res) => {
      emit('update-item', res.data);
      },
    onError: (err) => {
    }
  });
}
</script>

<style scoped>

.card--image{
  background: var(--image), url("@/assets/images/default-cover.png") center / cover no-repeat;
}

</style>
