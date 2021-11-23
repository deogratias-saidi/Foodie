<template>
  <div class="px-[30px] mt-[50px]">
    <router-link
      to="/myprofile"
      class="
        h-[28px]
        w-[28px]
        bg-gray-300
        flex
        text-white
        justify-center
        items-center
        rounded-full
      "
    >
      <i class="fas fa-arrow-left"></i>
    </router-link>
    <div class="mt-3 font-bold text-xl">
      <p>Settings</p>
    </div>
    <div class="text-lg font-light text-[#191A35] mt-8 cursor-pointer ">
      <p class="mt-4" @click="toggleLanguage = !toggleLanguage">Language</p>
      <p class="mt-4" @click="toggleMeasurement = !toggleMeasurement">
        Measurement System
      </p>
      <p class="mt-4" @click="toggleNotification = !toggleNotification">
        Notification
      </p>
      <p class="mt-4" @click="toggleVideo = !toggleVideo">Video Autoplay</p>
      <p class="mt-4" @click="toggleAbout = !toggleAbout">About Us</p>
      <p class="mt-4" @click="toggleRate = !toggleRate">Rate App</p>
      <p class="mt-4" @click="toggleLegal = !toggleLegal">Legal Infomation</p>
      <p class="mt-4" @click="toggleLogout = !toggleLogout">Logout</p>
    </div>

    
      <div
        class="fixed bg-white overflow-x-hidden inset-7 pt-[50px]"
        v-if="toggleLanguage"
      >
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">Select Language</div>
          <div @click="toggleLanguage = false" class="text-[20px] font-thin cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <p class="mt-4">Dutch</p>
          <p class="mt-4">English</p>
          <p class="mt-4">French</p>
          <p class="mt-4">German</p>
          <p class="mt-4">Norwegian</p>
          <p class="mt-4">Spanish</p>
        </div>
      </div>
      <div
        class="fixed bg-white overflow-x-hidden inset-7 pt-[50px]"
        v-if="toggleMeasurement"
      >
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">Measurement System</div>
          <div @click="toggleMeasurement = false" class="text-[20px] font-thin cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <p class="mt-4">Metric</p>
          <p class="mt-4">US</p>
        </div>
      </div>
      <div
        class="fixed bg-white overflow-x-hidden inset-7 pt-[50px]"
        v-if="toggleNotification"
      >
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">Notification</div>
          <div
            @click="toggleNotification = false"
            class="text-[20px] font-thin cursor-pointer"
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <p class="mt-4">Email</p>
          <p class="mt-4">Push Notification</p>
        </div>
      </div>
      <div class="fixed bg-white overflow-x-hidden inset-7 pt-[50px]" v-if="toggleVideo">
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">Video Autoplay</div>
          <div @click="toggleVideo = false" class="text-[20px] font-thin cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <p class="mt-4">On</p>
          <p class="mt-4">Off</p>
        </div>
      </div>
      <div class="fixed bg-white overflow-x-hidden inset-7 pt-[50px]" v-if="toggleAbout">
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">About Us</div>
          <div @click="toggleAbout = false" class="text-[20px] font-thin cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <p class="mt-4">About Us</p>
          <p class="mt-4">Privacy Policy</p>
          <p class="mt-4">Terms of Use</p>
          <p class="mt-4">Contact Us</p>
        </div>
      </div>
      <div class="fixed bg-white overflow-x-hidden inset-7 pt-[50px]" v-if="toggleRate">
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">Rate App</div>
          <div @click="toggleRate = false" class="text-[20px] font-thin cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <p class="mt-4">Rate App</p>
          <p class="mt-4">Share App</p>
        </div>
      </div>
      <div class="fixed bg-white overflow-x-hidden inset-7 pt-[50px]" v-if="toggleLegal">
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">Legal Infomation</div>
          <div @click="toggleLegal = false" class="text-[20px] font-thin cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <p class="mt-4">Legal Infomation</p>
          <p class="mt-4">Privacy Policy</p>
          <p class="mt-4">Terms of Use</p>
          <p class="mt-4">Contact Us</p>
        </div>
      </div>
      <div class="fixed bg-white overflow-x-hidden inset-7 pt-[50px]" v-if="toggleLogout">
        <div class="flex justify-between mb-4">
          <div class="font-semibold text-[20px]">Logout</div>
          <div @click="toggleLogout = false" class="text-[20px] font-thin cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="">
          <p class="mt-4">Logout</p>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  // setup
  name: "settings",
  data() {
    return {
      toggleLanguage: false,
      toggleMeasurement: false,
      toggleVideo: false,
      toggleNotification: false,
      toggleAbout: false,
      toggleRate: false,
      toggleLegal: false,
      toggleLogout: false,
    }
  },
}
</script>

<style></style>
