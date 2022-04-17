<template>
  <div class="home">
    <HeroComponent />
    <ProjectComponent />
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from "@/components/HeroComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    ProjectComponent,
    AboutComponent,
    FooterComponent,
  },
};
</script>

<style scoped lang="scss">
.home {
  background: $primary-color;
}
</style>