<template>
  <section id="project-section">
    <div class="container-md">
      <!-- switch to margin x over MD size(fluid and !fluid) -->
      <div class="row">
        <!--<div :class="{ active: isActive }">Text</div>

      <button @click="showMeDaData()">Show me da dasta</button> -->

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
              <a href="#" class="btn btn-primary"
                >Go somewhere {{ project.projectID }}</a
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
        projectTitle: "Card One",
        projectDescription: "Lorem ipsum, text is very nice. Much wow",
        projectURL: require("../assets/img/trapperholt.png"),
        projectCategory: "Video",
      },
      {
        projectID: 2,
        projectTitle: "Card Two",
        projectDescription: "Lorem ipsum, text is very nice. Much wow2",
        projectURL: require("../assets/img/color.gif"),
      },
      {
        projectID: 3,
        projectTitle: "Card Two",
        projectDescription: "Lorem ipsum, text is very nice. Much wow2",
        projectURL: require("../assets/img/color.gif"),
      },
      {
        projectID: 4,
        projectTitle: "Card Two",
        projectDescription: "Lorem ipsum, text is very nice. Much wow2",
        projectURL: require("../assets/img/color.gif"),
      },
    ]);
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  justify-content: space-between;
  min-height: 50vh;
  border-radius: 0px;
  color: $tertiary-color;
  background: $quaternary-color;
  background-image: url("@/assets/noise.svg");
  .card-img-top {
    max-height: 30vh;
  }
  .card-body {
    max-height: 20vh;
  }
}
</style>