<template>
  <div class="competences" id="competences">
    <p>
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark" />
      Mes compétences
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark" />
    </p>

    <div class="skill">
      <div class="skill--picture">
        <img src="../assets/img/html.webp" class="competences--img" />
        <img src="../assets/img/css.webp" class="competences--img" />
        <img src="../assets/img/php.png" class="competences--img" />
      </div>
      <div class="skill--picture">
        <img src="../assets/img/symfony.png" class="competences--img" />
        <img src="../assets/img/vuejs.png" class="competences--img" />
        <img src="../assets/img/wordpress.webp" class="competences--img" />
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "Competences",
};
</script>

<style scoped lang="scss">
@import "../assets/sass/Competences/competences.scss";
</style>
