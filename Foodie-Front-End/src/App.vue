<template>
  <div>
    <Router-View />
    <NavLinks />
  </div>
</template>

<script>

import NavLinksVue from "./components/common/NavLinks/NavLinks.vue"

export default {
  conmponents: {
    NavLinksVue,
  },
  setup() {


    // check if user is logged in before rendering the page
    
    
  },
}
</script>
