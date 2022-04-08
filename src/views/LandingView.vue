<template>
  <div class="container-fluid">
    <div class="landing-view row">
      <div class="section-option col-12 col-sm-12 col-md-6 card text-white">
        <img class="card-img" src="@/assets/logoSVG.svg" alt="Card image" />
        <div class="card-img-overlay d-flex flex-column fluid">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      <div class="section-option col-12 col-sm-12 col-md-6 card text-white">
        <img
          class="card-img"
          src="@/assets/logoColorSVG.svg"
          alt="Card image"
        />
        <div class="card-img-overlay d-flex flex-column fluid">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.landing-view {
  .card {
    height: 90vh;
    justify-content: center;
    background: linear-gradient(
        to bottom,
        lighten($primary-color, 5),
        transparent
      ),
      url("@/assets/noise.svg");
    img {
      height: 90%;
      width: 100%;
    }
    .card-img-overlay {
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      .card-text {
        display: none;
      }
      .card-title {
        display: none;
      }
      background: #00000000;
      transition: all 1s ease-in;
      &:hover {
        background-color: #00000080;
        .card-text {
          display: block;
        }
        .card-title {
          display: block;
        }
      }
      .card-text {
        width: 60%;
      }
    }
  }
}
</style>