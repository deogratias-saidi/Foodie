<template>
<div>

  <my-profile-item/>
  <nav-links/>
</div>
</template>

<script>
import MyProfileItem from '../../components/Profile/MyProfileItem.vue'
import NavLinks from '../../components/common/NavLinks/NavLinks.vue'
export default {
  components: { MyProfileItem, NavLinks },

}
</script>

<style>

</style>