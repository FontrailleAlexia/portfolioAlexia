<template>
  <div class="realisation" id="realisation">
    <p>
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/> 
        Mes réalisations 
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/>
    </p>

    <a href="https://alexiafontraille.com" class="link_portfolio">
      <img src="../assets/img/portfolio.jpg" alt="" class="img_portfolio">
    </a>
    
  </div>
</template>

<script>

export default {
  name: 'Realisation',
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
.realisation {
  background-color: #FFEAF1;
  font-size: 50px;
  padding: 30px; 

  p {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Dosis', sans-serif;
    padding-bottom: 2rem;

    .fabookmark {
      color: rgb(252, 55, 170);
    }
  }
}

.img_portfolio {
  &:hover {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  }
}
</style>
