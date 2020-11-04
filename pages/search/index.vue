<template>
  <div>
    <div class="container py-4">
      <div
        class="card card-flat p-1 mb-4"
        :class="isDarkMode ? 'bg-darkest ' : 'bg-dark '"
      >
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
      <h1
        v-if="results.length === 0 && !query"
        class="text-center py-5"
        :class="isDarkMode ? 'text-light' : 'text-dark'"
      >
        <strong>
          <font-awesome-icon :icon="['fas', 'search']" />
          Pesquise um assunto de seu interesse...
        </strong>
      </h1>
      <div class="row">
        <div
          v-for="(result, i) in results"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <Cards :article="result" :isFlat="true" :isRaised="true" />
        </div>
      </div>

      <!-- <div v-for="(result, i) in results" :key="i">
        <CardsHorizontal :article="result" />
      </div> -->

      <div v-if="results.length === 0 && query" class="container">
        <h1
          class="text-center py-5"
          :class="isDarkMode ? 'text-light' : 'text-dark'"
        >
          <strong> :( Nada encontrado!</strong>
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import MasonryCards from "@/components/MasonryCards";
// import CardsHorizontal from "@/components/CardsHorizontal";
import Cards from "@/components/Cards";

export default {
  components: { Cards },

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
          "description",
          "channel",
          "dir",
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
<style lang="scss">
.placeholder-dark {
  ::placeholder {
    color: #121212 !important;
  }
}
</style>
