<template>
  <div
    class="card card-flat card-raised mb-4"
    :class="isDarkMode ? 'bg-darkest hover-card-yellow' : 'hover-card-uv'"
  >
    <div class="row">
      <div class="col-md-5 col-12">
        <img
          v-lazy="imageSrc(article)"
          class="card-img-fit cyberpunk-effect"
          style="height: 300px !important; width: 100% !important;"
        />
      </div>
      <div class="col-md-7 col-12">
        <div class="p-3" :class="isDarkMode ? 'text-light' : ''">
          <ChannelBadge :channel="article.channel" :isTag="true" />

          <h3 class="exo-font mt-1 mb-2" style="font-style: italic;">
            <span class="">
              <strong>
                {{ article.title }}
              </strong>
            </span>
          </h3>
          <div class="card-subinfo mb-2">
            <span class="badge badge-dark">
              {{ formatDate(article.createdAt) }}
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
              class="btn"
              :class="isDarkMode ? 'btn-outline-neon-yellow' : 'btn-outline-uv'"
            >
              Leia mais...
            </nuxt-link>
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

import ChannelBadge from "@/components/ChannelBadge";

export default {
  name: "CardsHorizontal",

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
