<template>
  <div class="home" id="presentation">
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

@import "../assets/sass/Home/home.scss";
</style>
