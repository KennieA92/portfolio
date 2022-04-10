<template>
  <div class="project-details col-12 col-sm-12 col-md-6 card text-white">
    <img class="card-img" :src="'@/assets/' + imgURL" alt="Card image" />
    <div class="card-img-overlay d-flex flex-column fluid">
      <h5 class="card-title">Strictly Business</h5>
      <p class="card-text">
        A select few of my coding-projects are available on this part of my
        Portfolio page.
      </p>
      <p class="card-text">Click here to continue</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ProjectDetailsComponent",
  props: {
    imgURL: String,
    description: String,
  },
  setup(props) {
    let getImgURL = ref(props.imgURL);

    return {
      getImgURL,
    };
  },
};
</script>

<style lang="scss" scoped>
.project-details {
  min-height: 89vh;
  img {
    width: 100%;
    height: 60vh;
  }
}
</style>