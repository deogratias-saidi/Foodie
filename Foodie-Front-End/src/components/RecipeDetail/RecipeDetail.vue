<template>
<div>

  <div class="mt-[50px]">
    <div class="px-[30px]">
      <div class="flex justify-between items-center py-4">
        <h1 class="font5 font-extrabold text-[24px]">Neapolitan-style pizza</h1>
        <div
          class="
            h-[30px]
            rounded-full
            text-white
            flex
            justify-center
            items-center
            text-sm
            w-[30px]
            bg-gray-300
          "
        >
        <router-link to="/home">

          <i class="fas fa-times"></i>
        </router-link>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="flex items-center">
          <img
            class="h-[20px] w-[20px] rounded-full object-cover mr-2"
            src="../../assets/Images/jessica-felicio-_cvwXhGqG-o-unsplash.jpg"
            alt=""
          />
          <p>Mom's Kitchen</p>
        </div>
        <div
          class="
            h-[34px]
            rounded-sm
            text-white
            flex
            justify-center
            items-center
            text-sm
            w-[64px]
            bg-red-500
          "
        >
          Follow
        </div>
      </div>
    </div>
    <div class="pt-4">
      <img
        class="h-[279px] w-full object-cover"
        src="../../assets/Images/alex-lvrs-aX_ljOOyWJY-unsplash.jpg"
        alt=""
      />
    </div>
    <div class="px-[30px]">
      <div
        class="
          flex
          justify-between
          py-5
          text-gray-500
          border-b-2 border-gray-200
        "
      >
        <div class="flex items-center">
          <i class="far fa-clock"> </i>
          <p class="ml-2">45</p>
        </div>
        <div class="flex items-center">
          <i class="far fa-heart"> </i>
          <p class="ml-2">1.5k</p>
        </div>
        <div class="flex items-center">
          <i class="far fa-comment-dots"> </i>
          <p class="ml-2">32</p>
        </div>
      </div>
      <div class="w-full py-3">
        <h4 class="font-bold text-[20px]">Ingredients</h4>
        <div class="flex">
          <p  class="mr-3 text-gray-500 text-[15px]">Serving for 5</p>
          <p class="text-blue-600 text-[15px]" @click="toggleServing = !toggleServing ">Change</p>
        </div>
        <div class="my-3">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/Garlic.jpg"
                  alt=""
                />
              </div>
              <div>Garlic</div>
            </div>
            <div class="text-gray-500">1 Glove</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/Lemon.jpg"
                  alt=""
                />
              </div>
              <div>Lemon</div>
            </div>
            <div class="text-gray-500">3 Tsb</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/Strawberry.jpg"
                  alt=""
                />
              </div>
              <div>Strawberry</div>
            </div>
            <div class="text-gray-500">5 Strawberries</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/RedOnion.jpg"
                  alt=""
                />
              </div>
              <div>Red Onion</div>
            </div>
            <div class="text-gray-500">1 Half</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/Obergine.jpg"
                  alt=""
                />
              </div>
              <div>Obergine</div>
            </div>
            <div class="text-gray-500">1 Obergine</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/Cucumber.jpg"
                  alt=""
                />
              </div>
              <div>Cucumber</div>
            </div>
            <div class="text-gray-500">1/5 Cucumber</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/Chilli.jpg"
                  alt=""
                />
              </div>
              <div>Chilli</div>
            </div>
            <div class="text-gray-500">1 Chill</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/Brocolli.jpg"
                  alt=""
                />
              </div>
              <div>Brocolli</div>
            </div>
            <div class="text-gray-500">1</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <img
                  class="w-[50px] h-[50] object-cover"
                  src="../../assets/veggies/CherryTomato.jpg"
                  alt=""
                />
              </div>
              <div>Cherry Tomatos</div>
            </div>
            <div class="text-gray-500">10 Cherry Tomatos</div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="h-[30px] w-[30px] rounded-full object-cover mr-2"
              src="../../assets/Images/jessica-felicio-_cvwXhGqG-o-unsplash.jpg"
              alt=""
            />
            <p>Andrea</p>
          </div>
          <div>3 days a</div>
        </div>
        <div class="ml-10">
            <p class="font2 text-[13px] ">
                The pizza has already worked great in the oven. 😍 Thank you for this great recipe !!...
            </p>
        </div>
        <div @click="toggleComments = !toggleComments" class="font2 font-normal py-5">
            <p>View All Comments</p>
        </div>
        <div class="h-[48px] mb-20  w-[355] border-[1px] flex justify-between items-center bg-[#F8F9FF] text-gray-500 ">
            <i class="fas fa-paperclip pl-3 text-xl"></i>
            <input class="w-[240px] outline-none bg-[#F8F9FF] " type="text" placeholder="Type what your review..."  >
            <i class=" pr-3  far fa-smile h-[20] w-[20] text-xl"></i>
        </div>
      </div>
    </div>
    
  </div>

    <div class=" fixed bg-white inset-7 z-50" v-if="toggleServing">
      <div class="flex-col content-center text-center">

      <div>Servings for</div>
      <div class="flex text-center justify-evenly my-6">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
      </div>
      <div class="h-[46px] w-[315px] bg-[#1EBC5D] flex justify-center items-center">
        <p class="font2 text-[13px] text-lg font-semibold text-white" @click="toggleServing = false">Change</p>
      </div>
    </div>
    <div class="absolute inset-0 z-40 bg-white" v-if="toggleServing" ></div>
    <div
        class="fixed bg-white inset-7 z-50"
        v-if="toggleComments"
      >
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">Comments</div>
          <div @click="toggleComments = false" class="text-[20px] font-thin cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <div class="flex justify-between">
          <div class="flex">
            <img
              class="h-[30px] w-[30px] rounded-full object-cover mr-2"
              src="../../assets/Images/jessica-felicio-_cvwXhGqG-o-unsplash.jpg"
              alt=""
            />
            <p>Andrea</p>
          </div>
          <div>3 days a</div>
        </div>
        <div class="ml-10">
            <p class="font2 text-[13px] ">
                The pizza has already worked great in the oven. 😍 Thank you for this great recipe !! Can someone help me with the procedure with the pizza stone on the gas grill? eg what temperature? And do you also use baking paper here because the dough sticks at first? Would like to try, but I'm not sure how it works best ... Thank you very much for your help! 😊 
                Show original language: German
            </p>
        </div>
        </div>
      </div>
      <div class="absolute inset-0 z-40 bg-white" v-if="toggleComments" ></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      toggleComments : false,
      toggleServing: false

    }
  }
}
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
