<template>
  <div id="app">
    <SinglePage />
  </div>
</template>

<script>
import SinglePage from "./views/Single-page.vue";

export default {
  name: "App",
  components: {
    SinglePage,
  },
};
</script>

<style lang="scss">
@import "./app.scss";
</style>
