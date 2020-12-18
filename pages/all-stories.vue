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
    </div>
    <div v-for="(story, i) in stories" :key="i" class="mb-4">
      <Stories :story="story" />
    </div>
    <DuotoneFilters />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import DuotoneFilters from "@/components/DuotoneFilters";
import Stories from "@/components/StoriesCard";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  components: { DuotoneFilters, Stories },
  async asyncData({ $content, params }) {
    const stories = await $content({ deep: true }, params.slug)
      .only([
        "title",
        "description",
        "img",
        "imgAlt",
        "channel",
        "slug",
        "dir",
        "createdAt",
        "updatedAt",
        "isStories",
        "isFeatured",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isStories: true })
      .fetch();

    return {
      stories,
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
