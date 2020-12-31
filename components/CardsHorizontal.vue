<template>
  <div
    class="card mb-4"
    :class="
      isDarkMode ? 'card-plain hover-card-yellow' : 'hover-card-uv card-raised'
    "
  >
    <div class="row">
      <div class="col-md-5 col-12">
        <img
          v-lazy="article.multimedia[0]['url']"
          class="card-img-fit cyberpunk-effect"
          style="height: 350px !important; width: 100% !important"
        />
      </div>
      <div class="col-md-7 col-12">
        <div class="px-md-4 px-3 py-3" :class="isDarkMode ? 'text-light' : ''">
          <span
            class="badge badge-primary badge-tag mb-2"
            style="text-transform: capitalize"
          >
            {{ article.section }}
          </span>
          <span class="badge badge-primary badge-tag">
            {{ formatDate(article.updated_date) }}
          </span>

          <h3 class="exo-font mt-1 mb-3" style="font-style: italic">
            <span class="">
              <strong>
                {{ article.title }}
              </strong>
            </span>
          </h3>
          <div class="card-subinfo mb-2">
            <!-- <span class="badge badge-dark">
              {{ dateFormat }}
            </span> -->
          </div>
          <p class="mb-3">
            {{ article.abstract }}
          </p>

          <div class="text-right mb-2">
            <a
              :href="article.short_url"
              target="_blank"
              class="btn"
              :class="isDarkMode ? 'btn-outline-neon-yellow' : 'btn-outline-uv'"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <ImageFilter /> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  name: "CardsHorizontal",

  props: {
    article: {
      type: Object,
      default: null,
    },
  },

  computed: {
    ...mapGetters(["isDarkMode"]),
    // dateFormat() {
    //   const formattedDate = format(
    //     new Date(this.article.updated_date),
    //     "dd MMM yyyy"
    //   );
    //   return formattedDate;
    // },
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
