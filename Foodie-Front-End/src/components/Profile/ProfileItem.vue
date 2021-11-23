<template>
  <div class="px-[30px] mt-[50px]">
    <div class="flex justify-between">
      <div class="flex justify-between">
        <div class="flex pr-2 items-center">
          <img
            class="h-[68px] w-[68px] rounded-full object-cover mr-2"
            src="../../assets/Images/jessica-felicio-_cvwXhGqG-o-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="flex-col w-[154px] justify-between">
          <div class="font-bold text-[18px]">
            <p>Mom's Kitchen</p>
          </div>
          <div class="flex justify-between">
            <div
              class="
                h-[35px]
                rounded-sm
                text-white
                flex
                justify-center
                items-center
                text-sm
                w-[70px]
                bg-red-500
              "
            >
              Follow
            </div>

            <div
              class="
                h-[35px]
                w-[35px]
                border-2
                flex
                justify-center
                items-center
              "
            >
              <i class="far fa-comment"></i>
            </div>
            <div
              class="
                h-[35px]
                w-[35px]
                border-2
                flex
                justify-center
                items-center
                text-[#E9378C]
              "
            >
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
    <div class="my-10 flex justify-around">
      <div class="flex-col text-center">
        <div class="font-bold text-[20px]">128</div>
        <div class="text-[12px] text-gray-400">Recipes</div>
      </div>
      <div class="flex-col text-center">
        <div class="font-bold text-[20px]">392K</div>
        <div class="text-[12px] text-gray-400">Followers</div>
      </div>
      <div class="flex-col text-center">
        <div class="font-bold text-[20px]">1.2M</div>
        <div class="text-[12px] text-gray-400">Likes</div>
      </div>
    </div>
    <div>
      <p class="my-4">Recipes</p>
    </div>
    <div class="grid grid-cols-2">
      <div class="relative w-[150px]">
        <i
          class="
            far
            fa-heart
            text-2xl text-red-500
            absolute
            cursor-pointer
            top-4
            right-3
          "
        ></i>
        <img
          class="my-2 rounded-xl h-[177px] w-[150px] object-cover"
          src="../../assets/images/alex-lvrs-aX_ljOOyWJY-unsplash.jpg"
          alt="Burger"
        />
        <p class="font-semibold text-[13px]">Creamy chicken & chorizo pasta</p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
