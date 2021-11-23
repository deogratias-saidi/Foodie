<template>
  <div class="bg-[#F2FEFF] w-screen h-screen">
    <div>
      <img src="../../assets/SVG/couplesInTheKitchen.svg" />
    </div>
    <div class="">
      <div
        class="
          font1
          text-[#12A84F]
          flex
          content-center
          text-center text-[52px]
          leading-[57.5px]
        "
      >
        IT'S COOKING TIME
      </div>
      <div class="flex justify-center pt-[56px]">
        <div class="font2 text-[14px] mr-3">Don't have an Account</div>
        <div class="font2 text-[14px] font-semibold text-blue-700">Sign Up</div>
      </div>
      <RecipeSteps />
    </div>
  </div>
</template>

<script>
import RecipeSteps from "../../components/common/NavLinks/RecipeSteps.vue";
export default { components: { RecipeSteps } }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rozha+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap");

.font1 {
  font-family: "Rozha One", serif;
}

.font2 {
  font-family: "Montserrat", serif;
}
</style>
