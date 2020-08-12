<template>
  <div class="container mb-4">
    <h2 class="mb-3">Category list</h2>
    <div class="row">
      <div
        v-for="(article, i) in articles"
        :key="i"
        class="col-lg-4 col-md-6 col-12"
      >
        <div class="card card-raised card-background view mb-3">
          <img :src="article.img" class="card-background-image" alt="" />
          <div class="card-body h-100 d-flex flex-column justify-content-end">
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
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "img", "slug", "updatedAt"])
      .sortBy("updatedAt", "desc")
      .where({ category: "LPJ" })
      .fetch();

    return {
      articles,
    };
  },

  methods: {
    formatDate(date) {
      const options = { month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-br", options);
    },
  },
};
</script>
