<template>
<div>

  <recipe-detail/>
  <router-link to="/recipe">

  <recipe-steps/>
  </router-link>
</div>

</template>

<script>
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail.vue";
import RecipeSteps from "../../components/common/NavLinks/RecipeSteps.vue";
export default {
    components: { RecipeDetail, RecipeSteps },
    
}
</script>

<style>

</style>