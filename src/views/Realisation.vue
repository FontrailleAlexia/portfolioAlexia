<template>
  <div class="realisation" id="realisation">
    <p>Portfolio - Mes réalisations</p>

    <a href="" class="link_portfolio">
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
.realisation {
  background-color: #FFEAF1;
  font-size: 50px;
}

.img_portfolio {
  &:hover {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  }
}
</style>
