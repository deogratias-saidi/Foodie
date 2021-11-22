<template>
   <footer class="grid grid-cols-5  h-[62px] w-screen fixed bottom-0 z-50 bg-white "  >
       <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route.path" 
        class="p-4 text-center text-xl text-[#1428BF]" >
           <i :class="route.iconClass"></i>
       </router-link>
   </footer>
</template>

<script>
import { ref, onBeforeMount } from "vue"
import { useRouter } from "vue-router"

export default {
    components: {
        
    },
    setup() {
    const routes = ref([])
    const router = useRouter()

    onBeforeMount(() => {
      routes.value = router.options.routes.filter(r => r.mainMenu)
    })

    return {
      routes
    }
  }

}
</script>

<style>

</style>