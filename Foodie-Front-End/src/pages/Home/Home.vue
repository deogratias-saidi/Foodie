<template>
  <div class="">
    <!-- Top bar -->
    <div class="px-[30px]">
      <div class="flex justify-between pt-5 items-center">
        <div class="font5 font-extrabold text-[28px]">Hello, Deogratias</div>
        <box-icon name="bell"></box-icon>
      </div>
      <div class="text-[#586593] font5 text-[13px]">
        <p>What would like to cook today?</p>
      </div>
      <!-- Scroll -->

      <div class="pt-4 flex overflow-y-auto">
        <div
          class="
            rounded-full
            mr-4
            p-3
            py-3
            px-6...flex
            flex
            row-auto
            border-solid border-2
          "
        >
          <img
            class="mr-1"
            src="../../assets/SVG/svg-img/Burger.svg"
            alt="Burger"
          />
          Burger
        </div>
     
      </div>
    </div>

    <!-- Latest Recipes -->
    <div>
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
    <latest-recipes/>
    <nav-links/>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import NavLinks from "../../components/common/NavLinks/NavLinks.vue"


// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper"
import LatestRecipes from "../../components/Home/LatestRecipes.vue"


// install Swiper modules
SwiperCore.use([Pagination])


export default {

  components: {
    Swiper,
    SwiperSlide,
    NavLinks,
    LatestRecipes
},
  
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap");
.font5 {
  font-family: "Playfair Display", serif;
}
</style>
