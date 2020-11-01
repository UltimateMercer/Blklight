<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <div class="container-fluid pt-4">
      <div
        class="col-xl-10 col-lg-12 col-md-12 col-12 offset-xl-1 offset-lg-0 offset-md-0 offset-0 p-md-0 px-1"
        v-for="(featured, i) in featureds"
        :key="i"
      >
        <NewCards :article="featured" :isFeatured="true" :isFlat="true" />
      </div>
    </div>

    <div
      v-if="results.length === 0 && !query"
      class="container px-md-0 px-4 mt-4 mb-4"
    >
      <h2>
        <span
          class="marker marker-title"
          :class="isDarkMode ? 'marker-light' : 'marker-dark'"
        >
          <strong> <em> Últimas notícias</em></strong>
        </span>
      </h2>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <NewCards
            :article="article"
            :isFeatured="true"
            :isRaised="true"
            :isFlat="false"
          />
        </div>
        <div class="col-6 offset-3">
          <nuxt-link to="all-posts" class="btn btn-uv mx-auto d-block"
            >Ver mais artigos</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="container my-3">
      <nuxt-link to="/dev-corporation" class="btn btn-primary btn-raised">
        Dev Corporation
      </nuxt-link>
      <nuxt-link to="/nerdstation" class="btn btn-orange btn-raised">
        Nerdstation
      </nuxt-link>
      <nuxt-link to="/search" class="btn btn-outline-v2-dark btn-raised">
        <font-awesome-icon :icon="['fas', 'search']" />
        Pesquisar
      </nuxt-link>
    </div>
    <div>
      <Stories />
    </div>

    <DuotoneFilters />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import DuotoneFilters from "@/components/DuotoneFilters";
import NewCards from "@/components/Cards";
import Stories from "@/components/StoriesCard";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  components: { DuotoneFilters, NewCards, Stories },
  async asyncData({ $content, params }) {
    const featureds = await $content({ deep: true }, params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "slug",
        "dir",
        "channel",
        "updatedAt",
        "isFeatured",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: true })
      .limit(1)
      .fetch();

    const articles = await $content({ deep: true }, params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "channel",
        "slug",
        "dir",
        "isFeatured",
        "updatedAt",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: "" })
      .limit(9)
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

      this.results = await this.$content({ deep: true })
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
<style lang="scss">
// .exo-font {
//   font-family: "Exo 2", "IBM Plex Sans Condensed", "Fira Code", monospace !important;
// }
</style>
