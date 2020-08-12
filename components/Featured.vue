<template>
  <div class="row">
    <div
      v-for="(article, i) in featureds"
      :key="i"
      class="col-lg-4 col-md-8 col-12 offset-lg-0 offset-md-2"
    >
      <div
        class="card card-background card-raised card-featured-post neon-shadow-dark view mb-4"
      >
        <img
          :src="article.img"
          class="card-background-image featured-image"
          alt="Image Post"
        />
        <div class="mask texture-mask-2"></div>

        <div
          class="card-img-overlay h-100 d-flex flex-column justify-content-end"
        >
          <h4 class="card-featured-title">
            <span class="marker marker-dark">
              <strong>
                {{ article.title }}
              </strong>
            </span>
          </h4>
          <div class="card-subinfo">
            <span class="badge badge-dark">
              {{ formatDate(article.updatedAt) }}
            </span>
          </div>
          <nuxt-link
            tag="a"
            :to="article.slug"
            class="stretched-link"
          ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  name: "Featured",

  props: {
    featureds: {
      type: Array,
      default: null,
    },
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
