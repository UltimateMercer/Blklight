<template>
  <div
    class="card card-horizontal-post mb-4"
    :class="isDarkMode ? 'bg-darkest' : ''"
  >
    <div class="row">
      <div class="col-lg-5 col-md-4 col-12">
        <div
          v-lazy:background-image="imageSrc(article)"
          class="card-horizontal-post-avatar"
        ></div>
      </div>
      <div class="col-lg-7 col-md-8 col-12">
        <div class="card-body pl-lg-0" :class="isDarkMode ? 'text-light' : ''">
          <h4 class="card-featured-title mb-2">
            <span
              class="marker"
              :class="isDarkMode ? 'marker-light' : 'marker-dark'"
            >
              <strong>
                {{ article.title }}
              </strong>
            </span>
          </h4>
          <div class="card-subinfo mb-2">
            <span class="badge badge-dark">
              {{ formatDate(article.updatedAt) }}
            </span>
            <span class="badge badge-dark">
              {{ article.channel }}
            </span>
          </div>

          <div class="mt-4">
            <nuxt-link
              :to="{
                name: `${article.channel}-slug`,
                params: { slug: `${article.slug}` },
              }"
              class="btn btn-dark btn-sm"
              >Acessar</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
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
