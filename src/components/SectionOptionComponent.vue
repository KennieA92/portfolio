<template>
  <div class="SectionOptions col-12 col-sm-12 col-md-6">
    <img :src="getImgURL" alt="" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SectionOptionComponent",
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
.SectionOptions {
  min-height: 89vh;
  img {
    width: 100%;
    height: 60vh;
  }
}
</style>