<template>
  <div class="portfolio">
    <div id="clip">KENNIE</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.portfolio {
  background: linear-gradient(
      to bottom,
      lighten($primary-color, 5),
      transparent
    ),
    url("@/assets/noise.svg");
  #clip {
    /*
  Ensure background is added first
  */
    background: linear-gradient(
        to bottom,
        $primary-color,
        rgba(222, 112, 6, 0.2),
        $secondary-color
      ),
      url("@/assets/color.gif");
    background-size: contain;

    background-attachment: fixed;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    font-size: 10vw;
    font-weight: bold;
    text-align: center;
  }
}
</style>