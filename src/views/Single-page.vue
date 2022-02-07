<template>
  
    <div id="nav">
     
      <Navbar />
      <Home />
      <Realisation />
      <Competences />
      <Contact />
      <Footer />
      
    </div>
   

</template>

<script>
import Navbar from "../components/Navbar.vue";
import Home from "./Home.vue";
import Realisation from "./Realisation.vue";
import Competences from "./Competences.vue";
import Contact from "./Contact.vue";
import Footer from "../components/Footer.vue";



export default {
  name: "SinglePage",
  components: {
    Navbar,
    Home,
    Realisation,
    Competences,
    Contact,
    Footer,
  
  },
};
</script>

<style lang="scss"></style>
