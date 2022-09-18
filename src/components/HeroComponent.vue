<template>
  <section id="hero-section">
    <div class="container d-flex min-vh-100 align-items-center">
      <div class="introduction-text">
        <h1>
          Hi, I am <span>Kennie</span> and I am a
          <span>Multimedia Designer</span>, <span>Web-Developer</span> &#38;
          <span>Software Developer</span>. <br />I have a passion for
          <span>creating</span> and <span>designing</span>.
        </h1>

        <div class="title-container">
          <span id="title-span">
            <a href="#about-section">Multimedia Designer </a>|
            <a href="#project-section">Full-Stack Developer </a>|
            <a href="https://pizza-valentino.dk/" target="_blank">Pizza Enthusiast</a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#hero-section {
  .introduction-text {
    text-align: left;

    h1 {
      color: $secondary-color;

      span {
        color: $tertiary-color;
      }
    }

    .title-container {
      #title-span {
        color: $secondary-color;

        a {
          padding-right: 1rem;
          color: $text-color;
          text-decoration: none;

          &:hover {
            color: $tertiary-color;
          }
        }

        :not(:first-child) {
          padding-left: 1rem;
        }
      }
    }
  }
}
</style>