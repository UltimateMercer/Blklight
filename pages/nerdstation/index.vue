<template>
  <div>
    <div class="card my-0">
      <div class="view">
        <img
          src="https://i.imgur.com/Ifkb1b5.png"
          class="card-image-header cyberpunk-effect"
          style="height: 300px !important;"
        />
        <div class="mask texture-mask-4"></div>
        <div class="card-img-overlay d-flex flex-column">
          <div class="container">
            <h1>
              <span class="marker marker-dark marker-title">
                <strong>
                  <em>Nerdstation</em>
                </strong>
              </span>
            </h1>
          </div>
        </div>
        <div
          class="card-img-overlay h-100 d-flex flex-column justify-content-end"
        >
          <div class="container">
            <!-- <div class="d-flex">
              <span class="badge badge-dark badge-tag">
                <font-awesome-icon :icon="['fas', 'home']" />
              </span>
              <span class="badge badge-dark badge-tag">
                <font-awesome-icon :icon="['fas', 'home']" />
              </span>
              <span class="badge badge-success badge-tag ml-auto">
                <font-awesome-icon :icon="['fas', 'home']" />
              </span>
              <span class="badge badge-success badge-tag">
                Sobre
              </span>
            </div> -->
            <div class="d-flex">
              <span class="btn btn-dark">
                <font-awesome-icon :icon="['fas', 'home']" />
              </span>
              <span class="btn btn-dark">
                <font-awesome-icon :icon="['fas', 'home']" />
              </span>
              <span class="btn btn-dark ml-auto">
                <font-awesome-icon :icon="['fas', 'home']" />
              </span>
              <span class="btn btn-dark">
                Sobre
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <b-navbar tag="nav" toggleable="md" type="light" variant="orange">
      <div class="container">
        <b-navbar-brand>
          <nuxt-link
            to="/dev-corporation"
            class="navbar-brand mx-2 py-2 exo-font"
          >
            <strong>
              <font-awesome-icon :icon="['fas', 'home']" />
            </strong>
          </nuxt-link>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <nuxt-link to="/search" class="btn btn-outline-dark">
              <font-awesome-icon :icon="['fas', 'search']" />
            </nuxt-link>
          </b-nav-form>
        </b-navbar-nav>
      </div>
    </b-navbar> -->
    <!-- <header
      class="bg-orange shadow-image mb-4"
      style="width: 100%; min-height: 150px;"
    >
      <div class="container mt-2">
        <div class="card card-plain">
          <div class="card-body px-0">
            <h1 class="mb-3">
              <strong>
                <span
                  class="marker marker-dark border-badge-light marker-title"
                >
                  Nerdstation
                </span>
              </strong>
            </h1>
            <div class="d-lg-flex mb-3">
              <a
                class="badge badge-tag badge-dark border-badge-light my-1"
                href="https://github.com/UltimateMercer"
                target="_blank"
                rel="noopener"
                title="Acessar github"
              >
                Front-end
              </a>
              <a
                class="badge badge-tag badge-dark border-badge-light my-1"
                href="https://www.facebook.com/UltimateMercer"
                target="_blank"
                rel="noopener"
                title="Acessar facebook"
              >
                Back-end
              </a>
              <a
                class="badge badge-tag badge-dark border-badge-light my-1"
                href="https://www.behance.net/ultimatemercer"
                target="_blank"
                rel="noopener"
                title="Behance"
              >
                Design
              </a>
              <a
                class="badge badge-tag badge-dark border-badge-light my-1"
                href="https://github.com/UltimateMercer"
                target="_blank"
                rel="noopener"
                title="Linkedin"
              >
                Jobs
              </a>

              <a
                class="badge badge-tag badge-dark border-badge-light my-1"
                href="https://medium.com/@ultimatemercer"
                target="_blank"
                rel="noopener"
                title="Medium"
              >
                Medium
              </a>
            </div>

            <div class="input-group pb-1">
              <input
                type="text"
                class="form-control form-dark text-dark bg-transparent"
                placeholder="Pesquisar"
                aria-label="Pesquisar"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button id="button-addon2" class="btn btn-dark" type="button">
                  <font-awesome-icon :icon="['fas', 'search']" size="lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> -->
    <div class="container mb-4">
      <h2 class="mt-3 mb-5"><strong> Artigos recentes </strong></h2>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <div class="card card-raised text-dark mb-5">
            <div class="card-picture narrow">
              <img
                class="card-img card-img-fit rounded"
                :src="imageSrc(article)"
                alt="Card image cap"
              />
            </div>
            <div class="card-body">
              <h4 class="">
                <span class="marker marker-dark marker-title">
                  {{ article.title }}
                </span>
              </h4>
              <span class="badge badge-dark">
                {{ formatDate(article.createdAt) }}
              </span>

              <nuxt-link
                :to="{
                  name: `${article.channel}-slug`,
                  params: { slug: `${article.slug}` },
                }"
                class="stretched-link"
              ></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("nerdstation", params.slug)
      .only(["title", "img", "imgAlt", "channel", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .where({ channel: "nerdstation" })
      .fetch();

    console.log(articles);
    return {
      articles,
    };
  },

  methods: {
    formatDate(date) {
      const options = { month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-br", options);
    },

    imageSrc(article) {
      const image = article.imgAlt ? article.imgAlt : article.img;

      return image;
    },
  },
};
</script>
<style lang="scss">
.border-badge-light {
  border: 2px solid #eaeaea;
}

.border-badge-dark {
  border: 2px solid #121212;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #eaeaea !important;
}
</style>
