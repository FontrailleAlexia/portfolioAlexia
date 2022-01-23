<template>
  <div class="up">
    <div class="navbar">
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/presentation#presentation" >Présentation</router-link></li>
        <li><router-link to="/realisation#realisation">Réalisation</router-link></li>
        <li><router-link to="/competences#competences">Compétences</router-link></li>
        <li><router-link to="/contact#contact">Contact</router-link></li>
      </ul>
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
export default {
  name: "Home", 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background-color: #FA739D;
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

@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;

  li {
    padding: 2rem 1rem;

    a {
      --fill-color: #FFB8CE;
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

.img_navbar {
  z-index: 0;
  width: 100%;
  height: 35rem;
  opacity: 0.6;
  padding: 100px 0 42px 0;

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
