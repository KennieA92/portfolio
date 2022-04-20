<template>
  <section id="about-section">
    <div class="container-md">
      <h1>About Me</h1>
      <video
        :src="require('@/assets/video/kennieCV.mp4')"
        allowfullscreen
        controls
      ></video>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#about-section {
  padding-top: 10vh;
  margin-bottom: 1em;
  h1 {
    color: $tertiary-color;
    text-transform: uppercase;
    margin-bottom: 1em;
  }
  video {
    max-height: 80vh;
    width: 100%;
  }
}
</style>