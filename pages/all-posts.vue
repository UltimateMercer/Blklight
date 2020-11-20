<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <div class="container px-md-0 px-4 pt-3 mb-4">
      <h2>
        <span
          class="marker marker-title"
          :class="isDarkMode ? 'marker-light' : 'marker-dark'"
        >
          <strong> <em> Todos os artigos</em></strong>
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
            :isFeatured="false"
            :isRaised="true"
            :isFlat="true"
          />
        </div>
      </div>
    </div>

    <DuotoneFilters />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import DuotoneFilters from "@/components/DuotoneFilters";
import NewCards from "@/components/Cards";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  components: { DuotoneFilters, NewCards },
  async asyncData({ $content, params }) {
    const articles = await $content({ deep: true }, params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "channel",
        "slug",
        "dir",
        "createdAt",
        "isFeatured",
      ])
      .sortBy("createdAt", "desc")
      .where({ isFeatured: true && false })
      .fetch();

    return {
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
          "createdAt",
        ])
        .sortBy("createdAt", "desc")
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
