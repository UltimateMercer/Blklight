<template>
  <div>
    <div class="container-fluid py-4">
      <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1">
        <div
          class="card card-flat card-body bg-dark border border-neon-yellow mb-5"
        >
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text px-3"
                ><font-awesome-icon :icon="['fas', 'search']" size="lg"
              /></span>
            </div>
            <input
              v-model="query"
              type="search"
              class="form-control form-control-lg form-light bg-transparent text-light"
              placeholder="Pesquisar aqui"
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
        <h2 v-if="query" class="mb-3">
          <span
            class="marker marker-title"
            :class="isDarkMode ? 'marker-light' : 'marker-dark'"
          >
            <strong>
              <em> Resultados encontrados para "{{ query }}"</em></strong
            >
          </span>
        </h2>
        <div class="row">
          <div
            v-for="(result, i) in results"
            :key="i"
            class="col-lg-4 col-md-6 col-12"
          >
            <Cards :article="result" />
          </div>
        </div>

        <div v-if="results.length === 0 && query" class="container">
          <h1
            class="text-center py-5"
            :class="isDarkMode ? 'text-light' : 'text-dark'"
          >
            <strong> :( Nada encontrado para "{{ query }}"!</strong>
          </h1>
        </div>
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
          "createdAt",
        ])
        .sortBy("createdAt", "desc")
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
