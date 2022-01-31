<template>
  <div class="contact" id="contact">
    <p>
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/> 
        Contact 
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Contact',
}
</script>

<style scoped lang="scss">
.contact {
  background-color: #FFEAF1;
  font-size: 50px;
  padding: 30px; 

  p {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Dosis', sans-serif;
    .fabookmark {
      color: rgb(252, 55, 170);
    }
  }
}
</style>
