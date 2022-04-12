<template>
  <section id="project-section">
    <div class="container-md">
      <!-- switch to margin x over MD size(fluid and !fluid) -->
      <div class="row">
        <!--<div :class="{ active: isActive }">Text</div>

      <button @click="showMeDaData()">Show me da dasta</button> -->
        <div>
          <h1>Projects</h1>
        </div>

        <div
          v-for="project in projects"
          :key="project"
          class="col-12 col-sm-6 col-md-4 mb-4"
        >
          <div class="card" style="">
            <img :src="project.projectURL" class="card-img-top" alt="..." />
            <div class="card-body justify-content-start">
              <h5 id="cardOne" class="card-title">
                {{ project.projectTitle }}
              </h5>
              <p class="card-text">{{ project.projectDescription }}</p>
              <router-link to="/passion" class="btn btn-primary"
                >See More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let projects = ref([
      {
        projectID: 1,
        projectTitle: "MVO Adventure",
        projectDescription:
          "A 2D Adventure game created in Unity, using simple 2D physics and combat.",
        projectURL: require("../assets/img/logo/unity.svg"),
        githubURL: "https://github.com/DennP7791/MVOAdventure",
        projectCategory: "Unity",
      },
      {
        projectID: 2,
        projectTitle: "MVO Island Survival",
        projectDescription:
          "A 3D Multiplayer Island Survival game created in Unity, using simple animations.",
        projectURL: require("../assets/img/logo/unity.svg"),
        githubURL: "https://github.com/KennieA92/MVOIslandSurvival",
        projectCategory: "Unity",
      },
      {
        projectID: 3,
        projectTitle: "Trapperholt",
        projectDescription:
          "A proposed modern design to replace the current website of the danish museum Trapholt",
        projectURL: require("../assets/img/logo/html.svg"),
        githubURL: "https://github.com/KennieA92/TrapholtProject",
        projectCategory: "Webpage",
      },
      {
        projectID: 4,
        projectTitle: "Esbjerg Bryghus",
        projectDescription:
          "A commercial video made in premiere pro to the specifications of a local brewery.",
        projectURL: require("../assets/img/logo/premiere-pro.svg"),
        projectCategory: "Video",
      },
      {
        projectID: 5,
        projectTitle: "Card Two",
        projectDescription: "Lorem ipsum, text is very nice. Much wow2",
        projectURL: require("../assets/img/logo/html.svg"),
      },
    ]);
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  color: $tertiary-color;
  h1 {
    text-transform: uppercase;
    margin-bottom: 1em;
  }
  .card {
    justify-content: space-between;
    min-height: 65vh;
    max-height: 100vh;
    border-radius: 0px;
    color: $tertiary-color;
    background: $quaternary-color;
    .card-img-top {
      max-height: 40vh;
      padding: 2vh 0;
      background-color: $tertiary-color;
      background-image: url("../assets/noise.svg");
    }
    .card-body {
      max-height: 20vh;
      .btn {
        background-color: $secondary-color;
        color: $tertiary-color;
        border-color: $quaternary-color;
      }
    }
  }
}
</style>