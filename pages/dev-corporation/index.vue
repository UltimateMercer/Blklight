<template>
  <div>
    <header
      class="bg-primary shadow-image mb-4"
      style="width: 100%; min-height: 150px;"
    >
      <div class="container mt-2 pt-5">
        <div class="card card-plain">
          <div class="card-body px-0">
            <h1 class="mb-3">
              <strong>
                <span
                  class="marker marker-light border-badge-dark marker-title"
                >
                  Dev Corporation
                </span>
              </strong>
            </h1>
            <div class="d-lg-flex mb-3">
              <nuxt-link
                :to="{ name: 'dev-corporation-index' }"
                class="badge badge-tag badge-light border-badge-dark my-1"
              >
                <font-awesome-icon :icon="['fas', 'home']" />
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-light border-badge-dark my-1"
                :to="{
                  name: 'dev-corporation-index-category',
                  params: { category: 'front-end' },
                }"
                title="Acessar github"
              >
                Front-end
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-light border-badge-dark my-1"
                :to="{
                  name: 'dev-corporation-index-category',
                  params: { category: 'back-end' },
                }"
                title="Acessar facebook"
              >
                Back-end
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-light border-badge-dark my-1"
                :to="{
                  name: 'dev-corporation-index-category',
                  params: { category: 'design' },
                }"
                title="Behance"
              >
                Design
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-light border-badge-dark my-1"
                :to="{
                  name: 'dev-corporation-index-category',
                  params: { category: 'jobs' },
                }"
                title="Linkedin"
              >
                Jobs
              </nuxt-link>
            </div>
            <form @submit.prevent="onSearch">
              <div class="input-group mb-2">
                <input
                  v-model="search"
                  type="text"
                  class="form-control form-dark text-dark bg-transparent"
                  placeholder="Pesquisar"
                  aria-label="Pesquisar"
                  aria-describedby="search"
                />
                <div class="input-group-append">
                  <button id="search" class="btn btn-dark" type="submit">
                    <font-awesome-icon :icon="['fas', 'search']" size="lg" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <p>{{ this.$route.name }}</p>
    </div>
    <nuxt-child />
    <!-- <div class="container mb-4">
      <h2 class="mt-3 mb-3"><strong> Artigos recentes </strong></h2>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <div class="card card-raised card-background view mb-3">
            <img
              :src="imageSrc(article)"
              class="card-background-image"
              alt=""
            />
            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-end"
            >
              <h5 class="">
                <span class="marker marker-dark marker-title">
                  {{ article.title }}
                </span>
              </h5>
              <div class="card-subinfo">
                <span class="badge badge-dark">
                  {{ formatDate(article.updatedAt) }}
                </span>
              </div>
              <nuxt-link :to="article.slug" class="stretched-link"></nuxt-link>
            </div>

            <div class="mask texture-mask-2"></div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "img", "imgAlt", "slug", "updatedAt"])
      .sortBy("updatedAt", "desc")
      .where({ category: "LPJ" })
      .fetch();

    return {
      articles,
    };
  },

  data() {
    return {
      search: "",
    };
  },

  methods: {
    formatDate(date) {
      const time = new Date(date);
      const formattedDate = format(new Date(time), "dd MMM yyyy", {
        locale: ptBR,
      });

      return formattedDate;
    },

    imageSrc(article) {
      const image = article.imgAlt ? article.imgAlt : article.img;

      return image;
    },

    onSearch() {
      this.$router.push({
        name: "dev-corporation-index-search",
        params: { search: this.search },
      });
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
