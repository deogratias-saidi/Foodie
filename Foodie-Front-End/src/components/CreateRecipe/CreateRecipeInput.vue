<template>
    <div >
        <div class="pt-[38px] px-[30px]">
            <router-link to="/home" class="h-[30px] w-[30px] bg-gray-300 text-white rounded-full flex justify-center items-center">
                <i class="fas fa-arrow-left" ></i>
            </router-link>
            <div class="font-bold mt-5 mb-6 text-2xl">
                <p>Basic Details</p>
            </div>
            <div class="mb-5">
                <input class="h-14 font-bold text-2xl outline-none placeholder-[#DCE0EF] placeholder " type="text" placeholder="Recipe Name">
            </div>
            <div class="h-[106px] w-full bg-[#F4F6FF] flex items-center justify-center ">
                <div class="text-[72px] text-[#7e88df] mr-3">
                    <i class="fas fa-camera" ></i>
                </div>
                <div>
                    <p class="font-light">Tap to upload a picture</p>
                    <p class="font-semibold">Max 5 MB JPEG & PNG</p>
                </div>
            </div>
        </div>
        <router-link to="/preview">
            <recipeSteps />
        </router-link>
    </div>
  
</template>

<script>
import RecipeSteps from "../common/NavLinks/RecipeSteps.vue";
export default {
    components: { RecipeSteps }
}
</script>

<style>

</style>