<template>
  <div>
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
    <div class="py-3">

    <latest-recipes />
    </div>
    <div class="py-3">

    <trending />
    </div>
    <div class="3">

    <trending />
    </div>


    <!-- Trending -->


    <nav-links />
  </div>
</template>

<script>
import NavLinks from "../../components/common/NavLinks/NavLinks.vue"
import LatestRecipes from "../../components/Home/LatestRecipes.vue"
import Trending from "../../components/Home/Trending.vue"

export default {
  components: {
    NavLinks,
    LatestRecipes,
    Trending,
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap");
.font5 {
  font-family: "Playfair Display", serif;
}
</style>
