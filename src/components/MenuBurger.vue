<template>
  <div class="menu_wrapper">
    <p>Logo</p>
    <div
      :class="revele === false ? 'nav_burger-icon' : 'nav_burger-icon--open'"
      v-on:click="toggleMenu"
    >
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </div>
    
    <div :class="revele === true ?  'actived' : 'header_nav-mobile' ">
      <ul>
        <li v-on:click="toggleMenu" class="item">
          <router-link class="link" to="/">Accueil</router-link>
        </li>
        <li v-on:click="toggleMenu" class="item">
          <router-link class="link" to="/presentation#presentation"
            >Présentation</router-link
          >
        </li>
        <li v-on:click="toggleMenu" class="item">
          <router-link class="link" to="/realisation#realisation"
            >Réalisation</router-link
          >
        </li>
        <li v-on:click="toggleMenu" class="item">
          <router-link class="link" to="/competences#competences"
            >Compétences</router-link
          >
        </li>
        <li v-on:click="toggleMenu" class="item">
          <router-link class="link" to="/contact#contact">Contact</router-link>
        </li>
        <li v-on:click="toggleMenu" class="item">
          <router-link class="link" :to="{name: 'CV' }">Contact</router-link>
        </li>
      </ul>
    </div>
   
  </div>
  
</template>

<script>
export default {
  name: "MenuBurger",
  props: ["revele", "toggleMenu"],
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/Nav/menuBurger.scss";
</style>
