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
@import url("https://fonts.googleapis.com/css2?family=Dosis&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");

.competences {
  background-color: #c89f9c;
  font-size: 50px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
    text-transform: uppercase;
    font-family: "Dosis", sans-serif;
    .fabookmark {
      color: #b36a5e;
    }
  }

  .skill {
    display: flex;
    flex-direction: column;
    font-family: "Architects Daughter", cursive;
    font-size: 3rem;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin-top: 2rem;

    .competences--tab {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .competences--img {
      width: 100px;
      padding: 1rem;
    }
  }
}
</style>
