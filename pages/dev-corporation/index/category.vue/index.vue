<template>
  <div class="container pb-4">
    <h2 class="pt-3 mb-3" :class="isDarkMode ? 'text-light' : ''">
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
</template>
<script>
import Cards from "@/components/CardsOld";

export default {
  components: {
    Cards,
  },

  async asyncData({ $content, params }) {
    if (!params.query.category) {
      const articles = await $content("articles")
        .only([
          "title",
          "img",
          "imgAlt",
          "channel",
          "category",
          "slug",
          "updatedAt",
        ])
        .sortBy("updatedAt", "desc")
        .where({ channel: "dev-corporation" })
        .fetch();

      return {
        articles,
      };
    }

    const articles = await $content("articles", params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "channel",
        "category",
        "slug",
        "updatedAt",
      ])
      .sortBy("updatedAt", "desc")
      .where({ channel: "dev-corporation", category: params.category })
      .fetch();

    return {
      articles,
    };
  },
};
</script>
