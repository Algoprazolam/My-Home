<script setup>
import mainNav from './components/mainNav.vue';
import contentSystem from './components/contentSystem.vue';
</script>

<template>
  <main class="main">
    <section class="landingSection">
      <mainNav/>
      <contentSystem/>
    </section>
    <section class="sectionTwo">

</section>
  </main>
</template>

<style scoped>
.landingSection {
  width: 100vw;
  height: 100vh;
  background-image: url(assets/images/hatched.jpg);
}

.sectionTwo {
  width: 100vw;
  height: 100vh;
  background-color: black;
}
</style>