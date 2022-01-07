<template>
  <div class="w-screen h-screen mt-[50px]">
    <div
      class="font3 text-[52px] flex justify-center items-center text-[#1EBC5D]"
    >
      Sign Up
    </div>

    <div class="flex flex-col justify-center items-center font-semibold">
      <div class="w-full max-w-xs">
        <form class="font4" @click.prevent="signingUp">
          <div class="mb-4">
            <label class="block pb-3 text-gray-700 text-sm" for="username">
              Username
            </label>
            <input
              class="
                appearance-none
                border border-[#EFEFEF]
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
                font-light
              "
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-4">
            <label class="block pb-3 text-gray-700 text-sm" for="username">
              Email Address
            </label>
            <input
              class="
                appearance-none
                border border-[#EFEFEF]
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
                font-light
              "
              id="username"
              type="text"
              placeholder="Email Address"
              v-model="username"
            />
          </div>
          <div class="mb-6">
            <div class="flex justify-between pb-3">
              <label class="block text-gray-700 text-sm" for="password">
                Password
              </label>
            </div>
            <input
              class="
                appearance-none
                border border-[#EFEFEF]
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                mb-3
                leading-tight
                focus:outline-none focus:shadow-outline
                font-light
              "
              id="password"
              type="password"
              placeholder="******************"
              v-model="password"
            />
          </div>
          <div class="mb-6">
            <div class="flex justify-between pb-3">
              <label class="block text-gray-700 text-sm" for="password">
                Re-Password
              </label>
            </div>
            <input
              class="
                appearance-none
                border border-[#EFEFEF]
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                mb-3
                leading-tight
                focus:outline-none focus:shadow-outline
                font-light
              "
              id="password"
              type="password"
              placeholder="******************"
              v-model="password"
            />
            <p class="text-red-500 text-xs italic">Passwords do match.</p>
          </div>
          <div class="flex justify-center items-center">
            <router-link class="text-[#1EBC5D]" to="/login">
              Back to Sign In
            </router-link>
          </div>
          <div class="flex items-center justify-center py-5">
            <button
              class="
                bg-[#1EBC5D]
                hover:bg-green-700
                text-white
                font-bold
                w-full
                h-[56px]
                py-2
                px-4
                rounded-lg
                focus:outline-none
              "
              type="button"
              @click="signingUp(username, password)"
            >
              Create Account
            </button>
          </div>
        </form>
        <p class="text-center pb-8">Sign in with</p>
        <div class="">
          <Logos />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logos from "../../components/common/Logos.vue"

import { useTimeout, promiseTimeout } from "@vueuse/core"

import { ref } from "vue"
import { useRouter } from "vue-router"
import useAuth from "../../auth/userAuth"
import useError from "../../auth/useError"
const { isAuthenticated, login, signup } = useAuth()

const username = ref("")
const password = ref("")
const router = useRouter()

const signingUp = async () => {
  await signup(username.value, password.value)
  goToHome()
}
const goToHome = () => {
  if (isAuthenticated.value) {
    router.push("/home")
  } else {
    setError("Invalid username or password")
    start()
  }
}
const { error, setError } = useError()

const { ready, start } = useTimeout(3000, { controls: true })
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rozha+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap");

.font3 {
  font-family: "Rozha One", cursive;
  font-weight: 400;
}

.font4 {
  font-family: "Montserrat", serif;
}
</style>
