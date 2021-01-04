<template>
  <section class="container-fluid">
    <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-lg-0 px-3">
      <h1 class="mt-3" :class="isDarkMode ? 'text-light' : 'text-dark'">
        <strong><em>New York Times - Top Stories</em></strong>
      </h1>
      <hr class="mt-1 mb-4" :class="isDarkMode ? 'bg-light' : 'bg-dark'" />
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <div
            class="card mb-4"
            :class="
              isDarkMode
                ? 'card-plain hover-card-yellow'
                : 'hover-card-uv card-raised'
            "
          >
            <img
              v-lazy="article.multimedia[0]['url']"
              class="card-img-top card-img-fit cyberpunk-effect"
              alt="..."
              style="height: 350px !important"
            />
            <div class="card-body px-4" :class="isDarkMode ? 'text-light' : ''">
              <h4>
                <strong
                  ><em>{{ article.title }}</em></strong
                >
              </h4>
              <p class="card-text">
                {{ article.abstract }}
              </p>
              <span
                class="badge badge-uv badge-tag mb-2"
                style="text-transform: capitalize"
              >
                {{ article.section }}
              </span>
              <span class="badge badge-uv badge-tag">
                {{ formatDate(article.updated_date) }}
              </span>
              <div class="text-right mt-2">
                <a
                  :href="article.short_url"
                  target="_blank"
                  class="btn btn-sm"
                  :class="
                    isDarkMode ? 'btn-outline-neon-yellow' : 'btn-outline-uv'
                  "
                >
                  Read more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
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

  methods: {
    formatDate(date) {
      const time = new Date(date);
      const formattedDate = format(new Date(time), "dd MMM yyyy", {
        locale: ptBR,
      });

      return formattedDate;
    },
  },
};
</script>
