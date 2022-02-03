<template>
  <div class="up">
    <div class="navbar">
      <nav class="nav">
        <ul class="list">
          <li class="item"><router-link class="link" to="/">Accueil</router-link></li>
          <li class="item"><router-link class="link" to="/presentation#presentation" >Présentation</router-link></li>
          <li class="item"><router-link class="link" to="/realisation#realisation">Réalisation</router-link></li>
          <li class="item"><router-link class="link" to="/competences#competences">Compétences</router-link></li>
          <li class="item"><router-link class="link" to="/contact#contact">Contact</router-link></li>
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

/* font-family */
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

/*********************************** 
**        POUR GRAND ECRAN        ** 
************************************/ 

@media screen and (min-width: 1037px) {
  .menuBurger {
    display: none;
  }

  .checkbox {
    display: none;
  }

  .navbar {
    background-color: #CA7C5C;
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    li {
      padding: 2rem 1rem;

      .link {
        --fill-color: #EED7C5;
        position: relative;
        display: block;
        padding: 4px 0;
        font: 700 1.5rem Raleway, sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        -webkit-text-stroke: 2px var(--fill-color);
        background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
        color: transparent;
        background-clip: text;
        transition: 0.5s linear;

        &:hover {
          background-size: 100%;
        }
      }
    }
  }
}

/**********************************/

@media screen and (max-width: 1037px) {
  .nav {
    display: none;
  }
}

.navbar_title {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/img/background2.jpg');
  background-position: center;
  background-size: cover;
  z-index: 0;
  width: 100%;
  height: 35rem;
  padding: 100px 0 42px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    
  .border {
    border: white 1px solid;
    text-align: center;
    padding: 30px;
  }

  p {
    color: white;
    font-weight: bold;
    font-size: 70px;
  }

  .navbar_name {
    text-transform: uppercase;
  }
}

</style>
