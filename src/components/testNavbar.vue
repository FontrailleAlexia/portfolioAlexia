<template>
  <div>
    <Nav :revele="revele" :toggleMenu="toggleMenu"/>
  </div>
</template>

<script>
import Nav from "./components/Nav/Nav.vue";
export default {
  name: "App",

  components: {
    Nav,
  },
  data() {
    return {
      revele: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.revele = !this.revele;
    },
  },
};
</script>

<style lang="scss">
@import "./app.scss";
</style>