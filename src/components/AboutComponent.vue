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
  video {
    height: 80vh;
    width: 100%;
  }

  .text {
    position: absolute;
    top: 0;
    h1 {
      font-size: 13vw;
      font-weight: 900;
      line-height: 12vw;
    }

    background: $primary-color;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>