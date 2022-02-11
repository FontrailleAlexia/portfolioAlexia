<template>
  <div class="down">
    <div class="link_footer">
      <a href="https://github.com/FontrailleAlexia" class="github">
        <font-awesome-icon icon="fa-brands fa-github" class="icon_footer_github"/>    
      </a>  
      <a href="https://www.linkedin.com/in/fontraillealexia/" class="linkedin">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="icon_footer_linkedin" />    
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
@import "../assets/sass/Footer/footer.scss";
</style>
