<template>
  <div
    class="card card-flat card-background view mb-3"
    :class="isDarkMode ? 'neon-shadow-darkblue' : 'neon-shadow-uv'"
  >
    <img
      v-lazy="imageSrc(article)"
      class="card-background-image duotone-cyberpunk-y"
      alt=""
    />
    <div class="mask texture-mask-2"></div>

    <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
      <h5 class="">
        <strong>
          <span class="marker marker-dark">
            {{ article.title }}
          </span>
        </strong>
      </h5>
      <div class="card-subinfo d-flex">
        <span class="badge badge-dark">
          {{ formatDate(article.updatedAt) }}
        </span>
        <ChannelBadge :channel="article.channel" />
      </div>

      <nuxt-link
        :to="{
          name: `${article.channel}-slug`,
          params: { slug: `${article.slug}` },
        }"
        class="stretched-link"
      ></nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import ChannelBadge from "@/components/ChannelBadge";
export default {
  name: "Cards",

  components: { ChannelBadge },

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
