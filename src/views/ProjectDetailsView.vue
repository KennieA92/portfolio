<template>
  <div class="container-md">
    <div class="row">
      <div class="col-12">
        <h1>Project Details</h1>
      </div>
      <div class="col-12 col-sm-12 col-md-12">
        <div class="card" style="">
          <img src="" class="col-sm-12 col-md-8 card-img-top" alt="..." />
          <div class="card-body col-sm-12 col-md-4">
            <h5 id="cardOne" class="card-title"></h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import getProjects from "../modules/getProjects";
export default {
  name: "ProjectDetailsComponent",
  props: {
    imgURL: String,
    description: String,
  },
  setup() {
    // const { project } = getProjects(1);

    return {
      //project,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-md {
  min-height: 90vh;
  margin-top: 10vh;
  .card {
    height: 70vh;
    border-radius: 0px;
    color: $tertiary-color;
    background: $quaternary-color;
    &:hover {
      .card-body {
        background: $primary-color;
        color: $quaternary-color;
      }
    }
  }
}
</style>