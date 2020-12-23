<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <div class="container-fluid mb-4">
      <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1">
        <img
          v-if="isDarkMode"
          src="~/static/blklight-base-w.svg"
          width="175"
          class="mx-auto d-block mt-3"
          alt=""
        />
        <img
          v-else
          src="~/static/blklight-base.svg"
          width="175"
          class="mx-auto d-block mt-3"
          alt=""
        />
      </div>
      <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1">
        <div class="row py-3">
          <div class="col-lg-7 col-md-6 col-12 px-md-4 px-3 mb-3">
            <div class="sticky-top">
              <h2
                class="mt-3 mb-3"
                :class="isDarkMode ? 'text-light' : 'text-dark'"
              >
                <strong><em>Destaque</em></strong>
              </h2>
              <template v-for="(featured, i) in featureds">
                <Featured :article="featured" :key="i" />
              </template>
              <!-- <img
              src="https://i.imgur.com/38XSkDw.jpg"
              class="img-fluid mx-auto d-block mb-3"
              alt=""
            /> -->
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-12 px-md-4 px-3">
            <h2
              class="mt-3 mb-3"
              :class="isDarkMode ? 'text-light' : 'text-dark'"
            >
              <strong> <em> Últimas notícias</em></strong>
            </h2>
            <template v-for="(article, i) in articles">
              <Cards
                :article="article"
                :isFeatured="true"
                :isRaised="false"
                :isFlat="false"
                :key="i"
              />
            </template>

            <!-- <img
              src="https://i.imgur.com/ZTcUbBn.jpg"
              class="mx-auto d-block mb-3"
              style="width: 100%; height: 525px; object-fit: cover;"
              alt=""
            />
            <img
              src="https://i.imgur.com/ZTcUbBn.jpg"
              class="mx-auto d-block mb-3"
              style="width: 100%; height: 525px; object-fit: cover;"
              alt=""
            />
            <img
              src="https://i.imgur.com/ZTcUbBn.jpg"
              class="mx-auto d-block mb-3"
              style="width: 100%; height: 525px; object-fit: cover;"
              alt=""
            /> -->
          </div>
        </div>
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-8 offset-2">
          <nuxt-link to="all-posts" class="btn btn-uv btn-flat mx-auto d-block">
            Ver mais artigos
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container-fluid mb-4">
      <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1">
        <h2 class="mb-3" :class="isDarkMode ? 'text-light' : 'text-dark'">
          <strong><em>Especiais</em></strong>
        </h2>

        <div v-for="(story, i) in stories" :key="i" class="mb-4">
          <Stories :story="story" />
        </div>
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-8 offset-2">
          <nuxt-link
            to="/all-stories"
            class="btn btn-uv btn-flat mx-auto d-block"
          >
            Ver mais stories
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="container-fluid mb-4">
      <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1">
        <h2 class="mt-3 mb-3" :class="isDarkMode ? 'text-light' : 'text-dark'">
          <strong><em>Podcast</em></strong>
        </h2>
        <Podcast />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Featured from "~/components/Featured";
import Cards from "~/components/Cards";
import Stories from "~/components/StoriesCard";
import Podcast from "~/components/Podcast";

export default {
  components: { Featured, Cards, Stories, Podcast },
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
