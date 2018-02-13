<template>
  
  <div class="hero-foot">
   <div class="columns is-mobile">
     <div v-for="(carChoice,index) in carChoices" :key="index"   class="column">
    <router-link :to="`/${carChoice.id}`" class="movie-choice">
       <li class="movie-choice">
       
         <img :src="carChoice.smallImgSrc" class="desktop"/>
         <p class="mobile">{{ carChoice.subtitle }}</p>
       </li>
       </router-link>
     </div>
    </div>
  </div>
 
</template>

<script>
export default {
props:['carChoices']
}
</script>

<style>

</style>
