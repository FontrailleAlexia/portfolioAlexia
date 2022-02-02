<template>
  <div class="up">
    <div class="navbar">
      <input type="checkbox" id="navi-toggle" class="checkbox" />
      <label for="navi-toggle" class="button">
        <span class="icon">&nbsp;</span>
      </label>
      <div class="background">&nbsp;</div>
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
/***********************************
**         TOUS TYPE D ECRAN      **
***********************************/

/* font-family */
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");


.checkbox {
  display: none;
}

.navbar {
  background-color: #CA7C5C;
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

/***************************************
**          MEDIA QUERIES            **
***************************************/

/***************************************
**          POUR GRAND ECRAN          **
***************************************/

@media screen and (min-width: 1037px) {

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

  .img_navbar {
    z-index: 0;
    width: 100%;
    height: 35rem;
    opacity: 0.6;
    padding: 100px 0 42px 0;

  }

}

/***************************************
**          POUR ECRAN MOYEN          **
***************************************/



/*******************************************
**            POUR PETIT ECRAN            **
*******************************************/

@media screen and (max-width: 1037px) {

/* hamburger */
.checkbox {
  display: none;
}

.button {
  position: relative;
  background-color: white;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  position: fixed;
  top: 5vh; 
  right: 5vw; 
  z-index: 2000;
  box-shadow: 0 1rem 3rem black;
  text-align: center; 
  cursor: pointer;
}

.background {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  position: fixed;
  top: 5.5vh; 
  right: 5.5vw; 
  background-image: radial-gradient(#CA7C5C, #C89F9C);
  z-index: 1000;

  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}

.nav {
  height: 100vh;
  position: fixed;
  top: 0;
  right: -60vw;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s;
}

.list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
}

.item {
  margin: 1rem;
  font-size: 36px;
}

.link:link,
.link:visited {
  display: inline-block;
  font-family: Raleway, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    white 50%
  );
  background-size: 220%;
  transition: all 0.4s;
}

.link:hover,
.link:active {
  color: black;
  cursor: pointer;
}

/* functionality */
.checkbox:checked ~ .background {
  transform: scale(80);
}
.checkbox:checked ~ .nav {
  opacity: 1;
  width: 100%;
  right: 0;
}

/*  */
/* styling hamb ICON */
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon,
.icon::before,
.icon::after {
  width: 3rem;
  height: 2px;
  background-color: gray;
  display: inline-block;
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 0.2s;
}

.icon::before {
  top: -0.8rem;
}
.icon::after {
  top: 0.8rem;
}

.button:hover icon:before {
  top: -1rem;
}
.button:hover icon::after {
  top: 1rem;
}

.checkbox:checked + .button .icon {
  background-color: transparent;
}

.checkbox:checked + .button .icon::before {
  top: 0;
  transform: rotate(135deg);
}
.checkbox:checked + .button .icon::after {
  top: 0;
  transform: rotate(-135deg);
}
}

</style>
