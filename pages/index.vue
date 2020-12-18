<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <div class="container"></div>
    <div class="container-fluid py-1">
      <div
        class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1"
        v-for="(featured, i) in featureds"
        :key="i"
      >
        <h2 class="my-3">
          <span
            class="marker marker-title"
            :class="isDarkMode ? 'marker-light' : 'marker-dark'"
          >
            <strong><em>Destaque</em></strong>
          </span>
        </h2>
        <Cards
          :article="featured"
          :isFeatured="true"
          :isFlat="true"
          :isRaised="false"
        />
      </div>
    </div>

    <div class="container px-md-0 px-4 mt-4 mb-4">
      <h2 class="mb-3">
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
          <Cards
            :article="article"
            :isFeatured="true"
            :isRaised="false"
            :isFlat="true"
          />
        </div>
        <div class="col-md-6 offset-md-3 col-8 offset-2">
          <nuxt-link to="all-posts" class="btn btn-uv btn-flat mx-auto d-block">
            Ver mais artigos
          </nuxt-link>
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
    <div class="container px-md-0 my-3">
      <h2 class="mb-4">
        <span
          class="marker marker-title"
          :class="isDarkMode ? 'marker-light' : 'marker-dark'"
        >
          <strong> <em> Podcast</em></strong>
        </span>
      </h2>
      <Podcast />
    </div>
    <div class="my-4">
      <div class="container px-md-0">
        <div class="d-flex">
          <h2 class="mb-3">
            <span
              class="marker marker-title"
              :class="isDarkMode ? 'marker-light' : 'marker-dark'"
            >
              <strong> <em> Especiais</em></strong>
            </span>
          </h2>
          <div class="ml-auto">
            <nuxt-link to="/all-stories" class="btn btn-uv btn-flat">
              Ver stories
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-for="(story, i) in stories" :key="i" class="mb-4">
        <Stories :story="story" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Cards from "~/components/Cards";
import Stories from "~/components/StoriesCard";
import Podcast from "~/components/Podcast";

export default {
  components: { Cards, Stories, Podcast },
  async asyncData({ $content, params }) {
    const featureds = await $content({ deep: true }, params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "slug",
        "dir",
        "channel",
        "createdAt",
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
        "slug",
        "dir",
        "channel",
        "createdAt",
        "updatedAt",
        "isFeatured",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: false })
      .limit(6)
      .fetch();

    const stories = await $content({ deep: true }, params.slug)
      .only([
        "title",
        "description",
        "img",
        "imgAlt",
        "slug",
        "dir",
        "channel",
        "createdAt",
        "updatedAt",
        "isStories",
        "isFeatured",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isStories: true })
      .limit(3)
      .fetch();

    return {
      featureds,
      articles,
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
