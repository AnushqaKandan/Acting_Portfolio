<template>
  <div class="container">
    <section class="row" id="home">
        <LandingSection />
    </section>
      <!-- <section class="row" id="casual">
        <CasualSection />
    </section> -->
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
// import CasualSection from '@/components/CasualSection.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
     LandingSection,
    //  CasualSection
  }
}
</script>
