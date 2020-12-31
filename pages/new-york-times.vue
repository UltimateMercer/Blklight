<template>
  <section class="container-fluid">
    <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-lg-0 px-3">
      <h1 class="mt-3" :class="isDarkMode ? 'text-light' : 'text-dark'">
        <strong><em>New York Times - Top Stories</em></strong>
      </h1>
      <hr class="mt-1 mb-4" :class="isDarkMode ? 'bg-light' : 'bg-dark'" />
      <template v-for="(article, i) in articles">
        <CardsHorizontal :key="i" :article="article" />
      </template>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

import CardsHorizontal from "~/components/CardsHorizontal";
export default {
  components: { CardsHorizontal },
  // data() {
  //   return {
  //     articles: "",
  //   };
  // },
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=oPWIpYcGwSdzOH2cqYKkyvcotJCkGRNn"
    );
    const articles = data.results;
    // console.log(articles);
    return {
      articles,
    };
  },

  computed: {
    ...mapGetters(["isDarkMode"]),
  },
};
</script>
