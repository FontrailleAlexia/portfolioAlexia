<template>
  <div class="up">
    <div class="navbar">
      <nav class="nav">
        <ul class="list">
          <li class="item"><router-link class="link" exact to="/">Accueil</router-link></li>
          <li class="item"><router-link class="link" to="/presentation#presentation" >Présentation</router-link></li>
          <li class="item"><router-link class="link" to="/realisation#realisation">Réalisation</router-link></li>
          <li class="item"><router-link class="link" to="/competences#competences">Compétences</router-link></li>
          <li class="item"><router-link class="link" to="/contact#contact">Contact</router-link></li>
          <li><router-link class="link" :to="{name: 'CV' }">CV</router-link></li>
        </ul>
      </nav>
    </div>

    <div class="menuBurger">
      <MenuBurger :revele="revele" :toggleMenu="toggleMenu"></MenuBurger>
    </div>
  
    <div class="navbar_title">
      <div class="border">
        <p class="navbar_name">Alexia Fontraille</p>
        <p>Développeuse web & web mobile</p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBurger from "./MenuBurger.vue";

export default {
  name: "Home", 
  components: {
    MenuBurger,
  },
  data() {
    return {
      revele: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.revele = !this.revele;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/Nav/navBar.scss";
</style>
