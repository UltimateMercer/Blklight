<template>
  <div>
    <div
      class="card card-background mb-4"
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
      <div
        class="card-img-overlay h-100 d-flex flex-column justify-content-end"
      >
        <ChannelBadge :channel="article.channel" :isTag="isFeatured" />
        <h4 class="exo-font mt-2" style="font-style: italic;">
          <span class="marker marker-dark marker-title">
            <strong>
              {{ article.title }}
            </strong>
          </span>
        </h4>
        <div class="d-flex justify-content-between">
          <span class="badge badge-dark badge-tag">
            {{ formatDate(article.createdAt) }}
          </span>
          <nuxt-link
            tag="a"
            :to="{
              name: `${slugName(article.dir)}-slug`,
              params: { slug: `${article.slug}` },
            }"
            class="btn btn-uv btn-flat btn-sm"
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
    slugName(dir) {
      if (dir.startsWith("/articles/")) {
        const link = dir.replace("/articles/", "");
        return link;
      }
    },
  },
};
</script>
<style lang="scss">
.hover-card {
  &-uv {
    &:hover {
      -webkit-animation: shadow-pop-br-uv 0.2s
        cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-br-uv 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
  }
  &-yellow {
    &:hover {
      // transition: all ease-in-out 0.2s;
      // box-shadow: 6px 6px 1px 1px rgba(255, 255, 0, 1);
      -webkit-animation: shadow-pop-br-yellow 0.2s
        cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-br-yellow 0.2s cubic-bezier(0.47, 0, 0.745, 0.715)
        both;
    }
  }
}

@-webkit-keyframes shadow-pop-br-yellow {
  0% {
    -webkit-box-shadow: 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00,
      0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00;
    box-shadow: 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00,
      0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: 1px 1px #ffff00, 2px 2px #ffff00, 3px 3px #ffff00,
      4px 4px #ffff00, 5px 5px #ffff00, 6px 6px #ffff00, 7px 7px #ffff00,
      8px 8px #ffff00;
    box-shadow: 1px 1px #ffff00, 2px 2px #ffff00, 3px 3px #ffff00,
      4px 4px #ffff00, 5px 5px #ffff00, 6px 6px #ffff00, 7px 7px #ffff00,
      8px 8px #ffff00;
    -webkit-transform: translateX(-8px) translateY(-8px);
    transform: translateX(-8px) translateY(-8px);
  }
}
@keyframes shadow-pop-br-yellow {
  0% {
    -webkit-box-shadow: 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00,
      0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00;
    box-shadow: 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00,
      0 0 #ffff00, 0 0 #ffff00, 0 0 #ffff00;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: 1px 1px #ffff00, 2px 2px #ffff00, 3px 3px #ffff00,
      4px 4px #ffff00, 5px 5px #ffff00, 6px 6px #ffff00, 7px 7px #ffff00,
      8px 8px #ffff00;
    box-shadow: 1px 1px #ffff00, 2px 2px #ffff00, 3px 3px #ffff00,
      4px 4px #ffff00, 5px 5px #ffff00, 6px 6px #ffff00, 7px 7px #ffff00,
      8px 8px #ffff00;
    -webkit-transform: translateX(-8px) translateY(-8px);
    transform: translateX(-8px) translateY(-8px);
  }
}

@-webkit-keyframes shadow-pop-br-uv {
  0% {
    -webkit-box-shadow: 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff,
      0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff;
    box-shadow: 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff,
      0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: 1px 1px #4c00ff, 2px 2px #4c00ff, 3px 3px #4c00ff,
      4px 4px #4c00ff, 5px 5px #4c00ff, 6px 6px #4c00ff, 7px 7px #4c00ff,
      8px 8px #4c00ff;
    box-shadow: 1px 1px #4c00ff, 2px 2px #4c00ff, 3px 3px #4c00ff,
      4px 4px #4c00ff, 5px 5px #4c00ff, 6px 6px #4c00ff, 7px 7px #4c00ff,
      8px 8px #4c00ff;
    -webkit-transform: translateX(-8px) translateY(-8px);
    transform: translateX(-8px) translateY(-8px);
  }
}
@keyframes shadow-pop-br-uv {
  0% {
    -webkit-box-shadow: 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff,
      0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff;
    box-shadow: 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff,
      0 0 #4c00ff, 0 0 #4c00ff, 0 0 #4c00ff;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: 1px 1px #4c00ff, 2px 2px #4c00ff, 3px 3px #4c00ff,
      4px 4px #4c00ff, 5px 5px #4c00ff, 6px 6px #4c00ff, 7px 7px #4c00ff,
      8px 8px #4c00ff;
    box-shadow: 1px 1px #4c00ff, 2px 2px #4c00ff, 3px 3px #4c00ff,
      4px 4px #4c00ff, 5px 5px #4c00ff, 6px 6px #4c00ff, 7px 7px #4c00ff,
      8px 8px #4c00ff;
    -webkit-transform: translateX(-8px) translateY(-8px);
    transform: translateX(-8px) translateY(-8px);
  }
}
</style>
