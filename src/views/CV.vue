<template>
  <div id="CV">
    <pdf src="/CVAlexia.pdf"></pdf>
    <router-view name="CV"></router-view>
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  name: "CV",
  components: {
    pdf,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/Cv/cv.scss";
</style>
