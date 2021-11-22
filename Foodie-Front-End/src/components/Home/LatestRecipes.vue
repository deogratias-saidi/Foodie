<template>
  <div class="pb-20">
      <h3 class="font5 p-[30px] font-extrabold text-[24px]">Our Latest recipes</h3>

      <swiper
        :slidesPerView="1.2"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper px-[30px]"
      >
        <swiper-slide>
          <img
            class="mr-1 rounded-xl"
            src="../../assets/images/alex-lvrs-aX_ljOOyWJY-unsplash.jpg"
            alt="Burger"
          />
          <p class="pt-2">lol</p>
        </swiper-slide>
        <swiper-slide>
          <img
            class="mr-1"
            src="../../assets/images/kim-daniels-OrkEasJeY74-unsplash.jpg"
            alt="Burger"
          />
          <i class="fas fa-home" ></i>
        </swiper-slide>
        <swiper-slide>
          <img
            class="mr-1"
            src="../../assets/images/eiliv-sonas-aceron-uBigm8w_MpA-unsplash.jpg"
            alt="Burger"
          />
          lol
        </swiper-slide>
        <swiper-slide>
          <img
            class="mr-1"
            src="../../assets/images/kim-daniels-OrkEasJeY74-unsplash.jpg"
            alt="Burger"
          />
          lol
        </swiper-slide>
        <swiper-slide>
          <img
            class="mr-1"
            src="../../assets/images/kim-daniels-OrkEasJeY74-unsplash.jpg"
            alt="Burger"
          />
          lol
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"


// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper"


// install Swiper modules
SwiperCore.use([Pagination])
export default {
    components: {
    Swiper,
    SwiperSlide,    
  },
    
}
</script>

<style>

</style>