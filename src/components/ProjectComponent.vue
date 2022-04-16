<template>
  <section id="project-section">
    <div class="container-md">
      <div class="row">
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
              <router-link
                :to="{
                  name: 'ProjectDetails',
                  params: { id: project.projectID },
                }"
                class="btn btn-primary"
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
import getProjects from "../modules/getProjects";
export default {
  setup() {
    const { projects } = getProjects();
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
    height: 75vh;
    border-radius: 0px;
    color: $tertiary-color;
    background: $quaternary-color;
    &:hover {
      transform: scale(1.05);
    }
    .card-img-top {
      height: 40vh;
      padding: 2vh 0;
      background-color: $tertiary-color;
      border-radius: 0;
      background-image: url("../assets/noise.svg");
    }
    .card-body {
      height: 20vh;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between !important;
      .btn {
        border-radius: 0px;
        background-color: $secondary-color;
        color: $tertiary-color;
        border-color: $quaternary-color;
      }
    }
  }
}
</style>