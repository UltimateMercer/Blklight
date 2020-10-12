<template>
  <div class="row">
    <div v-for="(article, i) in featureds" :key="i" class="col-12">
      <div
        class="card card-raised card-flat card-background hover-card card-featured-post view mb-4"
      >
        <img
          v-lazy="article.img"
          class="card-background-image featured-image"
          alt="Image Post"
        />
        <div class="mask texture-mask-2"></div>

        <div
          class="card-img-overlay h-100 d-flex flex-column justify-content-end"
        >
          <h4 class="exo-font" style="font-style: italic;">
            <span class="marker marker-dark px-1">
              <strong>
                {{ article.title }}
              </strong>
            </span>
          </h4>
          <div class="card-subinfo d-flex">
            <span class="badge badge-dark">
              {{ formatDate(article.updatedAt) }}
            </span>
            <ChannelBadge :channel="article.channel" />
          </div>
          <nuxt-link
            tag="a"
            :to="{
              name: `${article.channel}-slug`,
              params: { slug: `${article.slug}` },
            }"
            class="stretched-link"
          >
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ChannelBadge from "@/components/ChannelBadge";

export default {
  name: "Featured",

  components: { ChannelBadge },

  props: {
    featureds: {
      type: Array,
      default: null,
    },
  },

  computed: { ...mapGetters(["isDarkMode"]) },

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
<style lang="scss">
.hover-card {
  &:hover {
    transition: ease-out 0.1s;
    // -webkit-box-shadow: 8px 8px 0px 0px rgba(18, 18, 18, 1);
    // -moz-box-shadow: 8px 8px 0px 0px rgba(18, 18, 18, 1);
    // box-shadow: 8px 8px 0px 0px rgba(18, 18, 18, 1);
    box-shadow: 8px 8px 0px 0px rgba(0, 123, 255, 1);
  }
}
</style>
