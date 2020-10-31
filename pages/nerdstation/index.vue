<template>
  <div>
    <header
      class="bg-orange shadow-image mb-4"
      style="width: 100%; min-height: 150px;"
    >
      <div class="container mt-2 pt-5">
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
    </header>
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
                {{ formatDate(article.updatedAt) }}
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
      .only(["title", "img", "imgAlt", "channel", "slug", "updatedAt"])
      .sortBy("updatedAt", "desc")
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
