<template>
  <section id="project-section">
    <div class="container-md">
      <div class="row">
        <div>
          <h1 id="section-title">
            I have done several <span>projects</span> in my career.
          </h1>
        </div>
        <div
          v-for="project in projects"
          :key="project"
          class="col-12 col-sm-6 col-md-4 mb-4"
        >
          <a :href="`${project.projectURL}`">
            <div class="project-container">
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
          </a>
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
      text-align: left;
      color: $secondary-color;
      text-transform: uppercase;
      margin-bottom: 1em;
      span {
        color: $tertiary-color;
      }
    }
    .project-container {
      min-height: 45vh;
      padding: 5em;
      border: 1px dotted $text-color;
      .title-container {
        #title-id {
          font-size: 35px;
        }
        p {
          font-size: 14px;
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