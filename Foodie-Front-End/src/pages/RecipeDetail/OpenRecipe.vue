<template>
<div>

  <recipe-detail/>
  <recipe-steps/>
</div>

</template>

<script>
import RecipeDetail from "../../components/ProductDetail/RecipeDetail.vue";
import RecipeSteps from "../../components/common/NavLinks/RecipeSteps.vue";
export default {
    components: { RecipeDetail, RecipeSteps }
}
</script>

<style>

</style>