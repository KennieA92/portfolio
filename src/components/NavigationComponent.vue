<template>
  <transition name="fade">
    <nav class="sticky col-12" v-if="showNavbar">
      <router-link to="/">Home</router-link> |
      <a href="#about-section">About Me</a> |
      <a href="#project-section">Projects</a> |
      <router-link to="/portfolio">Portfolio</router-link>
    </nav>
  </transition>
</template>

<script>
import { ref, onUnmounted, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    let showNavbar = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      window.pageYOffset > 0 || route.path !== "/"
        ? (showNavbar.value = true)
        : (showNavbar.value = false);
    };
    return { showNavbar };
  },
};
</script>

<style lang="scss" scoped>
nav {
  min-height: 5vh;
  padding: 15px;
  background-color: $primary-color;
  a {
    font-weight: bold;
    color: $tertiary-color;
    &:hover {
      background-color: #ddd;
      color: black;
    }
    &:active {
      background-color: #4caf50;
      color: white;
    }
  }

  &.sticky {
    background: $secondary-color;
    position: fixed;
    top: 0;
    z-index: 5;
  }
}
.fade-enter-active {
  transition: all 1s;
}
.fade-leave-active {
  transition: all 2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>