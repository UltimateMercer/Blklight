<template>
  <div
    class="card card-background hover-card view mb-4"
    :class="[
      { 'card-featured-post': isFeatured },
      { 'card-flat': isFlat },
      { 'card-raised': isRaised },
    ]"
  >
    <img
      v-lazy="imageSrc(article)"
      class="card-background-image"
      :class="{ 'featured-image': isFeatured }"
      :alt="article.title"
    />
    <div class="mask texture-mask-2"></div>

    <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
      <template v-if="isFeatured">
        <h4 class="exo-font" style="font-style: italic;">
          <span class="marker marker-dark px-1">
            <strong>
              {{ article.title }}
            </strong>
          </span>
        </h4>
      </template>
      <template v-else>
        <h5 class="exo-font" style="font-style: italic;">
          <span class="marker marker-dark px-1">
            <strong>
              {{ article.title }}
            </strong>
          </span>
        </h5>
      </template>

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
</template>

<script>
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
  &:hover {
    transition: ease-in-out 0.2s;
    // -webkit-box-shadow: 8px 8px 0px 0px rgba(18, 18, 18, 1);
    // -moz-box-shadow: 8px 8px 0px 0px rgba(18, 18, 18, 1);
    // box-shadow: 8px 8px 0px 0px rgba(18, 18, 18, 1);
    //box-shadow: 8px 8px 0px 0px rgba(0, 123, 255, 1);
    box-shadow: 6px 6px 1px 0px rgba(72, 11, 255, 1);
  }
}
</style>
