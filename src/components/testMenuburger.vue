<template>
  <div class="menu_wrapper">
    <div :class="revele === false ? 'nav_burger-icon' : 'nav_burger-icon--open'" v-on:click="toggleMenu">
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </div>

    <div :class="revele === true ?  'actived' : 'header_nav-mobile' ">
      <ul>
        <li v-on:click="toggleMenu">home</li>
        <li v-on:click="toggleMenu">page1</li>
        <li v-on:click="toggleMenu">page2</li>
        <li v-on:click="toggleMenu">page3</li>
        <li v-on:click="toggleMenu">page4</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: ["revele", "toggleMenu"],
};
</script>

<style lang="scss" scoped>
@import "./nav.scss";
</style>