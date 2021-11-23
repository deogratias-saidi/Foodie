<template>
  <div class=" h-[414px]">
      <h3 class="font5 px-[30px] font-extrabold text-[24px]">Our Latest recipes</h3>
      <swiper
        :slidesPerView="1.29"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper my-5 w-[247] px-[30px]"
      >
        <swiper-slide class="h-[360] flex-col">
          <img
            class="mr-1 rounded-xl h-[335px] w-full  "
            src="../../assets/images/alex-lvrs-aX_ljOOyWJY-unsplash.jpg"
            alt="Burger"
          />
        <p class="my-2 text-[13px] " >Creamy chicken & chorizo pasta</p>
        </swiper-slide>

        <swiper-slide>
          <img
            class="mr-1 rounded-xl h-[335px] w-full"
            src="../../assets/images/eiliv-sonas-aceron-uBigm8w_MpA-unsplash.jpg"
            alt="Burger"
          />
          <p class="my-2 text-[13px] ">Creamy chicken & chorizo pasta</p>
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
  setup() {

    // fetch data from rickandmortyapi
    const fetchData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/1"
      )
      const data = await response.json()
      return data
    }


    return {
     fetchData
    }
  }
    
}
</script>

<style>

</style>