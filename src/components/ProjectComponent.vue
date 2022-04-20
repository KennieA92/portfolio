<template>
  <section id="project-section">
    <div class="container-md">
      <div class="row">
        <div>
          <h1 id="section-title">Projects</h1>
        </div>
        <div
          v-for="project in projects"
          :key="project"
          class="col-12 col-sm-6 col-md-4 mb-4"
        >
          <router-link
            :to="{
              name: 'ProjectDetails',
              params: { id: project.projectID },
            }"
            ><div class="project-container">
              <div class="title-container">
                <p id="title-id">
                  {{ project.projectID }}
                </p>
                <p>
                  {{ project.projectTitle }}
                </p>
              </div>
              <div class="project-description-container">
                <p>
                  {{ project.projectDescription }}
                </p>
              </div>
            </div>
          </router-link>
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
#project-section {
  a {
    text-decoration: none;
    color: $tertiary-color;
  }
  .row {
    color: $tertiary-color;
    h1 {
      text-transform: uppercase;
      margin-bottom: 1em;
    }
    .project-container {
      height: 40vh;
      padding: 5em;
      border: 2px solid $text-color;
      .title-container {
        #title-id {
          font-size: 2em;
        }
        p {
          font-size: 0.8em;
          font-weight: bold;
          color: $text-color;
        }
      }
      .project-description-container {
        p {
          font-family: "League Spartan", Avenir, Helvetica, Arial, sans-serif;
          font-size: 1.3em;
          color: $quaternary-color;
        }
      }
    }
  }
}
</style>