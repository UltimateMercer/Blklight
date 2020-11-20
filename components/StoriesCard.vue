<template>
  <div
    class="card mb-4"
    :class="isDarkMode ? 'hover-stories-yellow' : 'hover-stories-uv'"
  >
    <img
      v-lazy="imageSrc(story)"
      :alt="story.title"
      class="card-image-stories cyberpunk-effect"
    />
    <div class="mask texture-mask-4"></div>
    <div class="card-img-overlay d-flex flex-column">
      <div class="d-flex mb-2">
        <span class="badge badge-dark badge-tag mr-2">
          {{ formatDate(story.createdAt) }}
        </span>
        <ChannelBadge :channel="story.channel" :isTag="true" />
      </div>

      <h3>
        <span class="marker marker-dark marker-title">
          <strong>
            <em>{{ story.title }}</em>
          </strong>
        </span>
      </h3>
      <p v-if="story.description">
        <span class="marker marker-dark">
          {{ story.description }}
        </span>
      </p>
      <div></div>

      <div class="mt-auto ml-auto">
        <nuxt-link
          tag="a"
          :to="{
            name: `${slugName}-slug`,
            params: { slug: `${story.slug}` },
          }"
          class="btn btn-uv btn-rounded"
        >
          Ler mais...
        </nuxt-link>
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
  name: "Stories",

  components: { ChannelBadge },
  props: {
    story: {
      type: Object,
      default: null,
    },
  },

  computed: {
    ...mapGetters(["isDarkMode"]),

    slugName() {
      const link = this.story.dir.replace("/", "");
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
    imageSrc(story) {
      const image = story.imgAlt ? story.imgAlt : story.img;

      return image;
    },
  },
};
</script>
<style lang="scss">
.hover-stories {
  &-uv {
    &:hover {
      transition: all ease-in-out 0.2s;
      box-shadow: 0px 0px 0px 8px rgba(75, 0, 255, 1);
    }
  }
  &-yellow {
    &:hover {
      transition: all ease-in-out 0.2s;
      box-shadow: 0px 0px 0px 8px rgba(255, 255, 0, 1);
    }
  }
}
</style>
