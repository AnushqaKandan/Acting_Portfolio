<template>
  <div class="container">
    <section class="row" id="home">
        <LandingSection />
    </section>
    
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
     LandingSection
  }
}
</script>
