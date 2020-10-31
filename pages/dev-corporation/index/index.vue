<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <div class="container pb-4">
      <h2 class="pt-3 mb-2" :class="isDarkMode ? 'text-light' : ''">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Cards from "~/components/CardsOld";

export default {
  components: { Cards },

  async asyncData({ $content, params }) {
    const articles = await $content("dev-corporation", params.slug)
      .only(["title", "img", "imgAlt", "channel", "slug", "updatedAt"])
      .sortBy("updatedAt", "desc")
      .where({ channel: "dev-corporation" })
      .fetch();

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
