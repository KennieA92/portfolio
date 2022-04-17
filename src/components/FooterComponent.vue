<template>
  <div class="d-flex flex-column h-100">
    <footer class="w-100 py-4 flex-shrink-0">
      <div class="container py-4">
        <div class="row gy-4 gx-5">
          <div class="col-lg-4 col-md-6">
            <h5 class="h1 text-white">Kennie Ankersø</h5>
            <p class="small text-muted">Front-End Developer</p>
            <p class="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.
              <a class="text-primary" href="#">Kennie Ankersø</a>
            </p>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-white mb-3">Navigation</h5>
            <ul class="list-unstyled text-muted">
              <li><a href="#">Home</a></li>
              <li><a href="#project-section">Projects</a></li>
              <li><a href="#about-section">About</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-white mb-3">Contact</h5>
            <ul class="list-unstyled text-muted">
              <li><a href="#">FB</a></li>
              <li><a href="#project-section">LI</a></li>
              <li><a href="#about-section">INS</a></li>
              <li><a href="#">MAIL</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6">
            <h5 class="text-white mb-3">Newsletter</h5>
            <p class="small text-muted">
              Sign up for our newsletter to get the latest news and updates. No
              spam, we promise!
            </p>
            <form action="#">
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Email address"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary"
                  id="button-addon2"
                  type="button"
                >
                  <img src="../assets/img/send.png" />
                </button>
              </div>
            </form>
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
  background: $secondary-color;

  img {
    width: 20px;
  }
  .text-small {
    font-size: 0.9rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  .form-control {
    background: #212529;
    border-color: #545454;
  }

  .form-control:focus {
    background: #212529;
  }
}
</style>