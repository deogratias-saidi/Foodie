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
          <div class="font-bold text-[14px]">
            <p>Sarangi Perera</p>
          </div>
          <div class="flex">
            <div
              class="
                h-[35px]
                rounded-sm
                text-blue-500
                flex
                justify-center
                items-center
                text-xs
                w-[84px]
                border-2
              "
            >
              Edit Profile
            </div>
          </div>
        </div>
      </div>
      <router-link to="/settings" class="text-[20px] text-blue-500">
        <i class="fas fa-cog"></i>
      </router-link>
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
      <div class="flex justify-between">
        <p class="my-4 font-bold">Recipes</p>
        <p class="my-4">Recipes</p>
        <p class="my-4">Recipes</p>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
        <div class="flex justify-between">

        <p class="font-semibold text-[13px]">Creamy chicken & chorizo pasta</p>
        <div>
            <i class="fas fa-ellipsis-v"></i>
        </div>
        </div>
      </div>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
