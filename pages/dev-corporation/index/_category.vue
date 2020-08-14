<template>
  <div>
    <div class="container mb-4">
      <h2 class="mt-3 mb-3"><strong> Artigos recentes </strong></h2>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <div class="card card-raised card-background view mb-3">
            <img
              :src="imageSrc(article)"
              class="card-background-image"
              alt=""
            />
            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-end"
            >
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
  </div>
</template>

<script>
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  async asyncData({ $content, params }) {
    // eslint-disable-next-line nuxt/no-this-in-fetch-data

    const articles = await $content("articles", params.slug)
      .only(["title", "img", "imgAlt", "slug", "updatedAt"])
      .sortBy("updatedAt", "desc")
      .where({ category: params.category })
      .fetch();

    return {
      articles,
    };
  },

  methods: {
    formatDate(date) {
      const time = new Date(date);
      const formattedDate = format(new Date(time), "dd MMM yyyy", {
        locale: ptBR,
      });

      return formattedDate;
    },

    imageSrc(article) {
      const image = article.imgAlt ? article.imgAlt : article.img;

      return image;
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
