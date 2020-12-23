<template>
  <footer class="mt-auto">
    <div class="container-fluid mt-4 bg-dark text-light">
      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <img src="~/static/blklight-base-w.svg" width="60" alt="" />

            <small class="d-block mb-3 text-muted">&copy;2020</small>
          </div>
          <div class="col-6 col-md">
            <h5>
              <span class="marker marker-light marker-title">
                Redes sociais
              </span>
            </h5>
            <ul class="list-unstyled">
              <li class="">
                <a
                  href="mailto:juliancunha2010@hotmail.com"
                  class="text-light"
                  target="_blank"
                  rel="noopener"
                  title="E-mail"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                  E-mail
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>
              <span class="marker marker-light marker-title">Sobre</span>
            </h5>
            <ul class="list-unstyled text-small">
              <li>
                <nuxt-link class="text-light" to="/about-team">
                  Projeto Blklight
                </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-light" to="/about-team">
                  Site
                </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-light" to="/old-home">
                  Home (Layout antigo)
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
