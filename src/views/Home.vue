<template>
  <div class="home" id="home">
    <p>
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/> 
        A propos 
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/>
    </p>

    <div class="presentation_txt_img">
      <div class="text_presentation">
        <p>Passionnée par l'informatique depuis plusieurs années
        je me suis reconverti dans le web en effectuant une formation au sein
        de l'école OClock. Au début de la formation j'ai appris les bases du
        développement web pour ensuite effectuer une spécialité Symfony et une 
        spécialité Wordpress.</p>

        <p>Pour plus de renseignements n'hésitez pas à me contacter en cliquant
        <router-link to="/contact#contact">ici</router-link></p>
      </div>
      <div class="presentation_img">
        <img src="../assets/img/picture_me.jpg" alt="" class="img_presentation">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');

.home {
  background-color: #C89F9C;
  font-size: 50px;
  padding: 30px;

  p {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Dosis', sans-serif;
    .fabookmark {
      color: #B36A5E;
    }
  }
}

.presentation {
  background-color: #FFC7D8;
  padding-bottom: 2rem;
  padding-top: 1rem;
}

.presentation_txt_img {
  display: flex;
  margin: 0 10rem;
}

.text_presentation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  margin: 0 4rem 0 0;
  border: solid 2px black;
  border-radius: 2rem;
  height: 100%;
  padding: 2rem;
  margin-top: 12rem;

  &:hover {
    box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
  }

  p {
    font-size: 20px;
    padding-bottom: 10px;
  }
}

.img_presentation {
  border-radius: 50%;
  border: solid 2px #CA7C5C;
  
  &:hover {
    box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
  }
}

h1 {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 1rem;
}
</style>
