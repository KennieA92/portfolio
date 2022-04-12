<template>
  <div class="about">
    <nav class="sticky col-12">
      <router-link to="/">Home</router-link> |
      <a href="#about-section">About Me</a> |
      <a href="#project-section">Projects</a> |
      <router-link to="/portfolio">Portfolio</router-link>
    </nav>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style lang="scss" scoped>
nav a {
  color: $tertiary-color;
}

nav a:hover {
  background-color: #ddd;
  color: black;
}

nav a.active {
  background-color: #4caf50;
  color: white;
}

.sticky {
  background: $secondary-color;
  position: fixed;
  top: 0;
  z-index: 5;
}
</style>