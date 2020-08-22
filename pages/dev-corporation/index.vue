<template>
  <div>
    <header
      class="bg-primary shadow-image mb-4"
      style="width: 100%; min-height: 150px;"
    >
      <div class="container mt-2 pt-5">
        <div class="card card-plain">
          <div class="card-body px-0">
            <h1 class="mb-3">
              <strong>
                <span
                  class="marker marker-light border-badge-dark marker-title"
                >
                  Dev Corporation
                </span>
              </strong>
            </h1>
            <div class="d-lg-flex mb-3">
              <nuxt-link
                :to="{ name: 'dev-corporation-index' }"
                class="badge badge-tag badge-light border-badge-dark my-1"
              >
                <font-awesome-icon :icon="['fas', 'home']" />
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-light border-badge-dark my-1"
                :to="{ name: 'dev-corporation-index-front-end' }"
              >
                Front-end
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-light border-badge-dark my-1"
                :to="{
                  name: 'dev-corporation-index-category',
                  params: { category: 'back-end' },
                }"
                title="Acessar facebook"
              >
                Back-end
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-light border-badge-dark my-1"
                :to="{
                  name: 'dev-corporation-index-category',
                  params: { category: 'design' },
                }"
                title="Behance"
              >
                Design
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-light border-badge-dark my-1"
                :to="{
                  name: 'dev-corporation-index-category',
                  params: { category: 'jobs' },
                }"
                title="Linkedin"
              >
                Jobs
              </nuxt-link>
            </div>
            <form @submit.prevent="onSearch">
              <div class="input-group mb-2">
                <input
                  v-model="search"
                  type="text"
                  class="form-control form-dark text-dark bg-transparent"
                  placeholder="Pesquisar"
                  aria-label="Pesquisar"
                  aria-describedby="search"
                />
                <div class="input-group-append">
                  <button id="search" class="btn btn-dark" type="submit">
                    <font-awesome-icon :icon="['fas', 'search']" size="lg" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <p>{{ this.$route.name }}</p>
    </div>

    <h3 v-if="categories">
      Not Null
    </h3>

    <ul v-if="results.length">
      <li v-for="result of results" :key="result.slug">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: result.slug } }"
          class="text-dark"
          >{{ result.title }}</NuxtLink
        >
      </li>
    </ul>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      categories: "",
      results: [],
    };
  },

  watch: {
    async category(categories) {
      if (!categories) {
        this.results = [];
        return;
      }

      this.results = await this.$content("articles")
        .only(["title", "channel", "category", "slug"])
        .sortBy("createdAt", "asc")
        .where({ channel: "dev-corporation" })
        .search("category", categories)
        .fetch();
    },
  },

  methods: {
    onSearch() {
      this.$router.push({
        name: "dev-corporation-index-search",
        params: { search: this.search },
      });
    },

    getCategory(category) {
      this.categories = category;
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
