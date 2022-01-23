<template>
  <div id="app">
    <div id="nav">
      <Navbar />

      <Home />
      <Realisation />
      <Competences />
      <Contact />

      <Reset />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import Realisation from "./views/Realisation.vue";
import Competences from "./views/Competences.vue";
import Contact from "./views/Contact.vue";


import Reset from "./assets/css/reset.css";


export default {
    name: "App",
    components: {
      Navbar,
      Home,
      Realisation,
      Competences,
      Contact,
      Reset
    }
}

</script>

<style lang="scss">



</style>
