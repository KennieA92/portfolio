<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  height: 10vh;
  padding: 30px;
  background-color: $primary-color;
  a {
    font-weight: bold;
    color: $secondary-color;

    &.router-link-exact-active {
      color: $tertiary-color;
    }
  }
}
</style>
