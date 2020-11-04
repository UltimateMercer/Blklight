<template>
  <div>
    <div
      class="card card-background view mb-4"
      :class="[
        { 'card-featured-post': isFeatured },
        { 'card-flat': isFlat },
        { 'card-raised': isRaised },
        isDarkMode ? 'hover-card-yellow' : 'hover-card-uv',
      ]"
    >
      <img
        v-lazy="imageSrc(article)"
        class="card-background-image cyberpunk-effect"
        :class="{ 'featured-image': isFeatured }"
        :alt="article.title"
      />
      <div class="mask texture-mask-2"></div>
      <div
        class="card-img-overlay h-100 d-flex flex-column justify-content-end"
      >
        <ChannelBadge :channel="article.channel" :isTag="true" />
        <template v-if="isFeatured">
          <h4 class="exo-font mt-2" style="font-style: italic;">
            <span class="marker marker-dark marker-title">
              <strong>
                {{ article.title }}
              </strong>
            </span>
          </h4>
        </template>
        <template v-else>
          <h5 class="exo-font mt-2" style="font-style: italic;">
            <span class="marker marker-dark px-1">
              {{ article.title }}
            </span>
          </h5>
        </template>
        <div class="d-flex justify-content-between">
          <span class="badge badge-dark badge-tag">
            {{ formatDate(article.updatedAt) }}
          </span>
          <nuxt-link
            tag="a"
            :to="{
              name: `${slugName}-slug`,
              params: { slug: `${article.slug}` },
            }"
            class="btn btn-uv btn-sm"
          >
            Ler mais...
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
  name: "Cards",

  components: { ChannelBadge },

  props: {
    article: {
      type: Object,
      default: null,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isRaised: {
      type: Boolean,
      default: false,
    },
    isFlat: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters(["isDarkMode"]),

    slugName() {
      const link = this.article.dir.replace("/", "");
      return link;
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
    imageSrc(article) {
      const image = article.imgAlt ? article.imgAlt : article.img;

      return image;
    },
  },
};
</script>
<style lang="scss">
.hover-card {
  &-uv {
    &:hover {
      transition: all ease-in-out 0.2s;
      box-shadow: 6px 6px 1px 1px rgba(75, 0, 255, 1);
    }
  }
  &-yellow {
    &:hover {
      transition: all ease-in-out 0.2s;
      box-shadow: 6px 6px 1px 1px rgba(255, 255, 0, 1);
    }
  }
}
</style>
