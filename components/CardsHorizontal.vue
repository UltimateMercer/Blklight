<template>
  <div
    class="card card-flat hover-card mb-4"
    :class="isDarkMode ? 'bg-darkest' : ''"
  >
    <div class="row">
      <div class="col-md-5 col-12">
        <div class="view">
          <img
            v-lazy="imageSrc(article)"
            class="card-img-fit"
            style="height: 275px !important; width: 100% !important;"
          />
          <div class="mask texture-mask-2"></div>
        </div>
      </div>
      <div class="col-md-7 col-12">
        <div class="p-3" :class="isDarkMode ? 'text-light' : ''">
          <h4 class="exo-font mt-1 mb-2" style="font-style: italic;">
            <span
              class="marker px-1"
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
          <p class="mb-3">
            {{ article.description }}
          </p>

          <div class="text-right mb-2">
            <nuxt-link
              :to="{
                name: `${article.channel}-slug`,
                params: { slug: `${article.slug}` },
              }"
              class="btn btn-sm"
              :class="isDarkMode ? 'btn-outline-uv' : 'btn-outline-uv'"
            >
              <font-awesome-icon :icon="['fab', 'readme']" size="lg" />

              Leia mais
            </nuxt-link>
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
