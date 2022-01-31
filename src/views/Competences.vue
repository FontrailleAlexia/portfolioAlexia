<template>
  <div class="competences" id="competences">
    <p>
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/> 
        Mes compétences 
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/>
    </p>

    <ul v-for="tab in gridData" :key="tab.id">
      
      <li class="name_competences"> {{ tab.name }}  </li>
      <li><img :src="tab.img" class="img_competences" /></li>

    </ul>
    
  </div>
</template>

<script>



export default {
  name: 'Competences',
  
  data: function () {
     return {
       gridData: [
         { name: "HTML", img: "/img/html.f1d375eb.webp" },
         { name: "CSS", img: "/img/css.ccf30a6c.webp" },
         { name: "PHP", img: "/img/php.1befcc4c.png" },
         { name: "Symfony", img: "/img/symfony.fc5796d4.png" },
         { name: "VueJS", img: "/img/vuejs.c2a605fb.png" },
         { name: "Wordpress", img: "/img/wordpress.b6d7292b.webp" }
      ],
    }
  }
}

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

.competences {
  background-color: #FFC7D8;
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
ul {
  display: flex;
  flex-direction: column;
  font-family: 'Architects Daughter', cursive;
  font-size: 3rem;
  margin: 0 12rem;

  .img_competences {
    width: 100px;
  } 
}

</style>
