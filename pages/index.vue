<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <div class="container-fluid mt-5 pt-4">
      <div
        class="col-xl-10 col-lg-12 col-md-12 col-12 offset-xl-1 offset-lg-0 offset-md-0 offset-0 p-md-0"
      >
        <Featured :featureds="featureds" />
      </div>
    </div>
    <div class="container my-3">
      <nuxt-link to="/dev-corporation" class="btn btn-primary btn-raised">
        Dev Corporation
      </nuxt-link>
      <nuxt-link to="/nerdstation" class="btn btn-orange btn-raised">
        Nerdstation
      </nuxt-link>
    </div>

    <div class="container-fluid bg-dark shadow-image">
      <div class="container py-3">
        <input
          v-model="query"
          type="search"
          class="form-control form-control-lg form-light text-light bg-transparent"
          placeholder="Pesquisar"
          aria-label="Pesquisar"
          aria-describedby="search"
        />
      </div>
    </div>

    <div v-if="results.length === 0" class="container mt-4 mb-4">
      <h3
        class="marker marker-title"
        :class="isDarkMode ? 'marker-light' : 'marker-dark'"
      >
        <span>
          <strong>Últimas notícias</strong>
        </span>
      </h3>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <div
            class="card card-raised card-background view mb-3"
            :class="isDarkMode ? 'neon-shadow-light' : 'neon-shadow-dark'"
          >
            <img
              :src="imageSrc(article)"
              class="card-background-image"
              alt=""
            />
            <div class="mask texture-mask-2"></div>

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
              <div class="card-subinfo">
                <span class="badge badge-dark">
                  {{ article.channel }}
                </span>
              </div>

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

    <div v-if="results.length > 0" class="container my-4">
      <h2 class="mt-3 mb-3"><strong> Artigos recentes </strong></h2>
      <div class="row">
        <div
          v-for="(article, i) in results"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <Cards :article="article" />
        </div>
      </div>
    </div>
    <DuotoneFilters />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Featured from "@/components/Featured";
import DuotoneFilters from "@/components/DuotoneFilters";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  components: { Featured, DuotoneFilters },
  async asyncData({ $content, params }) {
    const featureds = await $content("articles", params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "slug",
        "channel",
        "updatedAt",
        "isFeatured",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: true })
      .limit(3)
      .fetch();

    const articles = await $content("articles", params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "channel",
        "slug",
        "isFeatured",
        "updatedAt",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: "" })
      .fetch();

    return {
      featureds,
      articles,
    };
  },

  data() {
    return {
      query: "",
      results: [],
    };
  },

  computed: {
    ...mapGetters(["isDarkMode"]),
  },

  watch: {
    async query(query) {
      if (!query) {
        this.results = [];
        return;
      }

      this.results = await this.$content("articles")
        .only([
          "title",
          "img",
          "imgAlt",
          "channel",
          "slug",
          "isFeatured",
          "updatedAt",
        ])
        .sortBy("updatedAt", "desc")
        .search(query)
        .fetch();
    },
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
  },
};
</script>
