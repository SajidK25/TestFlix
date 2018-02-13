<template>
  <div>
      <div class="hero-body">
       <div class="container has-text-centered">
        <div class="columns">
         <div class="column is-half is-offset-one-quarter      vertical-align">
          <h1 class="home-intro">
           {{ selectedMovie.title }}
          </h1>
         </div>
        </div>
       </div>
      </div>
    </div>
</template>

<script>
import data from '../data.js'

export default {
 data () {
    return {
      selectedMovie: data[this.$route.params.id]
    }
  },
  watch: {
    $route () {
      this.selectMovie()
    }
  },
  mounted(){
      console.log(this.$route.params.id)
  },
  methods: {
    selectMovie () {
      this.selectedMovie = data[this.$route.params.id]
    }
  }
}
</script>

<style>

</style>
