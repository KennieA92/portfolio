<template>
  <transition name="fade">
    <nav class="sticky col-12" v-if="showNavbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/passion">Passion</router-link> |
      <router-link to="/portfolio">Portfolio</router-link>
    </nav>
  </transition>
</template>

<script>
import { onUnmounted, onMounted } from "vue";
import { ref } from "vue";
export default {
  setup() {
    let showNavbar = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      window.pageYOffset > 0
        ? (showNavbar.value = true)
        : (showNavbar.value = false);
    };
    return { showNavbar };
  },
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