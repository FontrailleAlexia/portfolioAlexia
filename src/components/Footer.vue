<template>
  <div class="down">
    <div class="link_footer">
      <a href="https://github.com/FontrailleAlexia" class="github">
        <font-awesome-icon icon="fa-brands fa-github" class="icon_footer"/>    
      </a>  
      <a href="https://www.linkedin.com/in/fontraillealexia/" class="linkedin">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="icon_footer" />    
      </a>
    </div>

    <div class="txt_footer">
      <div class="txt_footer_gmail">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <p>afontraille@gmail.com</p>
      </div>
      <div class="txt_footer_phone">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <p>07.69.86.89.53</p>
      </div>
      <div class="txt_footer_copyright">
        <font-awesome-icon icon="fa-solid fa-copyright" />
        <p>alexiafontraille</p>
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

.down {
    background-color: #CA7C5C;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.link_footer {
  margin-bottom: 2rem;
}

.txt_footer {
  display: flex;
  font-size: 1.5rem;
  justify-content: space-around;
}

.txt_footer_gmail, .txt_footer_phone, .txt_footer_copyright {
  display: flex;

  p {
    margin-left: 0.5rem;
  }
}

.github {
  padding-right: 20px;
}

.icon_footer {
  font-size: 50px;
  color: black;
}

</style>
