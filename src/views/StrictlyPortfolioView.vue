<template>
  <div class="portfolio">
    <!--<div id="clip">
      KENNIE <br />
      ANKERSØ
    </div>
  -->
    <div class="video-bg">
      <!-- the below iframe is only used for this demonstration on codepen. Make sure to download the video from pexel.com. 
Here's the link: https://www.pexels.com/video/school-of-fish-1151329/ -->
      <!-- Thanks to Tom Fisk for making the video available for free. -->
      <iframe
        src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
        frameborder="0"
        allowfullscreen
        tabindex="-1"
      ></iframe>
      <div class="text">
        <p>
          Kennie <br />
          Ankersø
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.portfolio {
  background: black;
  .video-bg {
    iframe {
      height: 90vh;
      width: 100%;
    }

    .text {
      position: absolute;
      top: 0;
      font-size: 14vw;
      color: #fff;
      background: #000;
      width: 100vw;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: helvetica;
      text-transform: uppercase;
      font-weight: 900;
      line-height: 13vw;

      mix-blend-mode: multiply;
    }
  }
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
    background-size: cover;
    background-position: center;

    background-attachment: fixed;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    line-height: 15vw;
    padding-top: 2vh;
    font-size: 18vw;
    font-weight: bold;
    text-align: center;
  }
}
</style>