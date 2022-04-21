<template>
  <section id="about-section">
    <div class="container-md">
      <div class="row">
        <div>
          <h1 id="section-title">
            My <span>process</span> from meeting to finished product.
          </h1>
        </div>
        <div
          v-for="about in abouts"
          :key="about"
          class="col-12 col-sm-6 col-md-4 mb-4"
        >
          <div class="about-container">
            <div class="title-container">
              <p id="title-id">
                {{ about.aboutID }}
              </p>
              <p>
                {{ about.aboutTitle }}
              </p>
            </div>
            <div class="about-description-container">
              <p>
                {{ about.aboutDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2>
        Below you see a <span>video</span>, which summarizes who I am as a
        person.
      </h2>
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/ErT_Zlo6iio"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
import getAbouts from "../modules/getAbouts";
export default {
  setup() {
    const { abouts } = getAbouts();
    return {
      abouts,
    };
  },
};
</script>

<style lang="scss" scoped>
#about-section {
  padding-top: 10vh;
  margin-bottom: 1em;
  iframe {
    max-height: 80vh;
    width: 100%;
  }
  h2 {
    margin-top: 20vh;
    text-align: left;
    color: $secondary-color;
    text-transform: uppercase;
    margin-bottom: 1em;
    span {
      color: $tertiary-color;
    }
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

    .about-container {
      min-height: 45vh;
      padding: 5em;
      border: 1px dotted $tertiary-color;
      .title-container {
        #title-id {
          font-size: 35px;
        }
        p {
          font-size: 14px;
          font-weight: bold;
        }
      }
      .about-description-container {
        p {
          font-family: "League Spartan", Avenir, Helvetica, Arial, sans-serif;
          font-size: 20px;
          color: $quaternary-color;
        }
      }
    }
  }
}
</style>