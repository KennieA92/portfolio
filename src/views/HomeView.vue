<template>
  <div class="home">
    <HeroComponent />
    <ProjectComponent />
    <div class="container-fluid">
      <div class="landing-view row">
        <div class="section-option col-12 col-sm-12 col-md-6 card">
          <img
            class="card-img"
            src="@/assets/logoSVG.svg"
            alt="Grayscale Logo"
          />

          <router-link to="/portfolio">
            <div class="card-img-overlay d-flex flex-column fluid text-white">
              <h5 class="card-title">Strictly Business</h5>
              <p class="card-text">
                A select few of my coding-projects are available on this part of
                my Portfolio page.
              </p>
              <p class="card-text">Click here to continue</p>
            </div>
          </router-link>
        </div>
        <div class="section-option col-12 col-sm-12 col-md-6 card">
          <img
            class="card-img"
            src="@/assets/logoColorSVG.svg"
            alt="Color Logo"
          />
          <router-link to="/passion">
            <div class="card-img-overlay d-flex flex-column fluid text-white">
              <h5 class="card-title">Passion &#38; Hobbies</h5>
              <p class="card-text">
                A multitude of my passion projects are available on this part of
                my Portfolio page.
              </p>
              <p class="card-text">Click here to continue</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="landing-view row">
        <div class="section-option col-12 col-sm-12 col-md-6 card">
          <img
            class="card-img"
            src="@/assets/logoSVG.svg"
            alt="Grayscale Logo"
          />

          <router-link to="/portfolio">
            <div class="card-img-overlay d-flex flex-column fluid text-white">
              <h5 class="card-title">Strictly Business</h5>
              <p class="card-text">
                A select few of my coding-projects are available on this part of
                my Portfolio page.
              </p>
              <p class="card-text">Click here to continue</p>
            </div>
          </router-link>
        </div>
        <div class="section-option col-12 col-sm-12 col-md-6 card">
          <img
            class="card-img"
            src="@/assets/logoColorSVG.svg"
            alt="Color Logo"
          />
          <router-link to="/passion">
            <div class="card-img-overlay d-flex flex-column fluid text-white">
              <h5 class="card-title">Passion &#38; Hobbies</h5>
              <p class="card-text">
                A multitude of my passion projects are available on this part of
                my Portfolio page.
              </p>
              <p class="card-text">Click here to continue</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from "@/components/HeroComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    ProjectComponent,
  },
};
</script>

<style scoped lang="scss">
.home {
  background: $primary-color;
}
</style>