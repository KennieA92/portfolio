<template>
  <section id="hero-section">
    <div class="portfolio">
      <div class="video-bg">
        <video
          :src="require('@/assets/fishvideo.mp4')"
          autoplay
          loop
          muted
          playsinline
          frameborder="0"
          allowfullscreen
          tabindex="-1"
        ></video>
        <div class="text">
          <h1>
            Kennie
            <br />
            Ankersø
          </h1>

          <div class="title-container">
            <span id="title-span"
              >Full-Stack Developer | Graphical Designer</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.portfolio {
  background: black;
  .video-bg {
    video {
      height: 100vh;
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
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      mix-blend-mode: multiply;

      .title-container {
        #title-span {
          font-size: 2vw;
          line-height: 5vw;
        }
      }
    }
  }
}

/*
  -- First Attempt at making the Knockout Text
#clip {
    
  Ensure background is added first
  
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
  }*/
</style>