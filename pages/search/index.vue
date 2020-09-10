<template>
  <div class="container my-4 pt-5">
    <div class="card card-flat bg-dark mb-4">
      <div class="card-body">
        <input
          v-model="query"
          type="search"
          class="form-control form-control-lg form-light text-light bg-transparent"
          placeholder="Pesquisar"
          aria-label="Pesquisar"
          aria-describedby="search"
        />
      </div>
    </div>
    <h1 v-if="results.length === 0 && !query" class="text-center mt-5">
      <strong>
        <font-awesome-icon :icon="['fas', 'search']" />
        Pesquise um assunto de seu interesse...
      </strong>
    </h1>
    <div v-for="(result, i) in results" :key="i">
      <CardsHorizontal :article="result" />
    </div>
    <!-- <MasonryCards :articles="results" /> -->

    <div v-if="results.length === 0 && query" class="container">
      <h1 class="text-center mt-5">:( Nada encontrado!</h1>
    </div>
  </div>
</template>
<script>
// import MasonryCards from "@/components/MasonryCards";
import CardsHorizontal from "@/components/CardsHorizontal";

export default {
  components: { CardsHorizontal },

  data() {
    return {
      query: "",
      results: [],
    };
  },

  watch: {
    async query(query) {
      if (!query) {
        this.results = [];
        return;
      }

      this.results = await this.$content("articles")
        .only([
          "title",
          "img",
          "imgAlt",
          "description",
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
};
</script>
