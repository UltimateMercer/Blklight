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
import Cards from "@/components/Cards";

export default {
  components: {
    Cards,
  },

  async asyncData({ $content, params }) {
    if (!params.query.category) {
      const articles = await $content("dev-corporation")
        .only([
          "title",
          "img",
          "imgAlt",
          "channel",
          "category",
          "slug",
          "createdAt",
        ])
        .sortBy("createdAt", "desc")
        .where({ channel: "dev-corporation" })
        .fetch();

      return {
        articles,
      };
    }

    const articles = await $content("dev-corporation", params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "channel",
        "category",
        "slug",
        "createdAt",
      ])
      .sortBy("createdAt", "desc")
      .where({ channel: "dev-corporation", category: params.category })
      .fetch();

    return {
      articles,
    };
  },
};
</script>
