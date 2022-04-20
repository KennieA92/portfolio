<template>
  <div class="d-flex flex-column h-100">
    <footer class="w-100 py-4 flex-shrink-0">
      <div class="container py-4">
        <div class="row gy-4 gx-5">
          <div class="col-lg-6 col-md-6">
            <h5 class="h1">Kennie Ankersø</h5>
            <p class="small text-muted">Front-End Developer</p>
            <p class="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.
              <span id="copyright-kennie">Kennie Ankersø</span>
            </p>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="mb-3">Navigation</h5>
            <ul class="list-unstyled text-muted">
              <li><a href="#">Home</a></li>
              <li><a href="#project-section">Projects</a></li>
              <li><a href="#about-section">About</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="mb-3">Contact</h5>
            <ul class="list-unstyled text-muted">
              <li>
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#project-section">
                  <i class="fa-brands fa-linkedin-in"></i
                ></a>
              </li>
              <li>
                <a href="#about-section">
                  <i class="fa-brands fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="fa-solid fa-at"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  border-top: solid 2px darken($primary-color, 10%);
  background: $primary-color;
  .row {
    margin: 0;
    img {
      width: 20px;
    }
    .text-small {
      font-size: 0.9rem;
      color: $text-color;
    }
    #copyright-kennie {
      color: $quaternary-color;
    }
    a {
      color: $quaternary-color;
      text-decoration: none;
      transition: all 0.3s;
    }

    a:hover,
    a:focus {
      text-decoration: none;
    }
  }
}
</style>