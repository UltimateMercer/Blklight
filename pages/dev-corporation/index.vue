<template>
  <div>
    <div class="card my-0">
      <div class="view">
        <img
          src="https://i.imgur.com/Te8hqVv.jpg"
          class="card-image-header cyberpunk-effect"
        />
        <div class="mask texture-mask-4"></div>
        <div class="card-img-overlay d-flex flex-column">
          <div class="container">
            <div class="d-flex mb-2">
              <!-- <span class="badge badge-dark badge-tag mr-2">
                Teste
              </span> -->
              <!-- <ChannelBadge :channel="story.channel" :isTag="true" /> -->
            </div>

            <h1>
              <span class="marker marker-dark marker-title">
                <strong>
                  <em>Dev Corporation</em>
                </strong>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <b-navbar tag="nav" toggleable="md" type="dark" variant="primary">
      <div class="container">
        <b-navbar-brand>
          <nuxt-link to="/dev-corporation" class="navbar-brand">
            <strong>
              /Dev Corporation
            </strong>
          </nuxt-link>
        </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item to="/dev-corporation">
            Sobre
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <nuxt-link to="/search" class="btn btn-outline-light">
              <font-awesome-icon :icon="['fas', 'search']" />
            </nuxt-link>
          </b-nav-form>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <!-- <header class="bg-primary mt-3" style="width: 100%; min-height: 150px;">
      <div class="container">
        <div class="card card-plain my-0">
          <div class="card-body px-0">
            <h1 class="mb-3">
              <nuxt-link to="">
                <strong>
                  <span
                    class="marker marker-dark border-badge-dark marker-link"
                  >
                    Dev Corporation
                  </span>
                </strong>
              </nuxt-link>
            </h1>
            <div class="d-lg-flex mb-3">
              <nuxt-link
                :to="{ name: 'dev-corporation-index' }"
                class="badge badge-tag badge-dark border-badge-dark my-1"
              >
                <font-awesome-icon :icon="['fas', 'home']" />
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-dark border-badge-dark my-1"
                :to="{
                  name: 'dev-corporation-index-front-end',
                }"
              >
                Front-end
              </nuxt-link>
              <nuxt-link
                class="badge badge-tag badge-dark border-badge-dark my-1"
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
                <div class="input-group-prepend">
                  <span id="search" class="input-group-text">
                    <font-awesome-icon :icon="['fas', 'search']" size="lg" />
                  </span>
                </div>
                <input
                  type="search"
                  class="form-control bg-transparent text-light form-dark"
                  placeholder="Pesquisar"
                  aria-label="Username"
                  aria-describedby="search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header> -->

    <!-- <div class="container">
      <p>{{ this.$route.name }}</p>
    </div> -->

    <!-- <h3 v-if="categories">
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
    </ul> -->
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

      this.results = await this.$content("dev-corporation")
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

.card-image-header {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
