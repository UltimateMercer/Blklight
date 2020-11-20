<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <div class="container-fluid pt-4 pb-2">
      <div
        class="col-xl-10 col-lg-12 col-md-12 col-12 offset-xl-1 offset-lg-0 offset-md-0 offset-0 p-md-0 px-1"
      >
        <div class="row">
          <div
            class="col-lg-6 col-12"
            v-for="(featured, i) in featureds"
            :key="i"
          >
            <Cards :article="featured" :isFeatured="true" :isFlat="true" />
          </div>
        </div>
      </div>
    </div>
    <div class="container pb-4">
      <h2 class="pt-3 mb-2" :class="isDarkMode ? 'text-light' : ''">
        <strong> Artigos recentes </strong>
      </h2>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <Cards :article="article" />
        </div>
      </div>
    </div>
    <div class="my-4">
      <div class="container px-md-0">
        <h2 class="mb-4">
          <span
            class="marker marker-title"
            :class="isDarkMode ? 'marker-light' : 'marker-dark'"
          >
            <strong> <em> Especiais</em></strong>
          </span>
        </h2>
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

export default {
  components: { Cards, Stories },

  async asyncData({ $content, params }) {
    const featureds = await $content("dev-corporation", params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "slug",
        "dir",
        "channel",
        "createdAt",

        "isFeatured",
      ])
      .sortBy("createdAt", "desc")
      .where({ isFeatured: true })
      .limit(2)
      .fetch();

    const articles = await $content("dev-corporation", params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "slug",
        "dir",
        "channel",
        "createdAt",

        "isFeatured",
      ])
      .sortBy("createdAt", "desc")
      .where({ isFeatured: false })
      .limit(9)
      .fetch();

    const stories = await $content("dev-corporation", params.slug)
      .only([
        "title",
        "description",
        "img",
        "imgAlt",
        "slug",
        "dir",
        "channel",
        "createdAt",
        "isStories",
      ])
      .sortBy("createdAt", "desc")
      .where({ isStories: true })
      .limit(3)
      .fetch();

    return {
      featureds,
      articles,
      stories,
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
