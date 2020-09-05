<template>
  <div class="grid row py-2">
    <div class="grid-sizer col-lg-4 col-md-6 col-12"></div>

    <div
      v-for="(article, i) in articles"
      :key="i"
      class="col-lg-4 col-md-6 col-12 grid-item"
      :class="channelColor(article.channel)"
    >
      <div class="card card-flat card-masonry">
        <div class="card-masonry-area-image with-hover-overlay">
          <div class="view">
            <img
              class="img-fluid card-masonry-image"
              :src="imageSrc(article)"
              :alt="article.title"
            />
            <div class="mask texture-mask-2"></div>
          </div>
        </div>
        <div
          class="card-masonry-area-header h-100 d-flex flex-column justify-content-end"
        >
          <h5 class="mb-2">
            <span class="marker marker-dark">
              {{ article.title }}
            </span>
          </h5>
          <span class="mb-2">
            <span class="badge badge-dark">
              {{ formatDate(article.updatedAt) }}
            </span>
            <span class="badge badge-dark">
              {{ article.channel }}
            </span>
          </span>
          <div>
            <router-link
              :to="{
                name: `${article.channel}-slug`,
                params: { slug: `${article.slug}` },
              }"
              class="btn btn-dark btn-sm btn-block"
              title="Acessar article do projeto"
            >
              Ler mais
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  name: "MasonryCards",

  props: {
    articles: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {};
  },

  computed: {},

  watch: {
    data() {
      debugger;

      this.loadMasonry();
    },
  },

  created() {
    this.loadMasonry();
  },

  mounted() {
    debugger;

    this.loadMasonry();
  },

  methods: {
    loadMasonry() {
      const Masonry = require("masonry-layout");
      const ImagesLoaded = require("imagesloaded");

      const grid = document.querySelector(".grid");

      ImagesLoaded(grid, () => {
        this.$emit("images-loaded");
        const msnry = new Masonry(grid, {
          itemSelector: ".grid-item",
          columnWidth: ".grid-sizer",
          percentPosition: true,
        });

        this.$emit("masonry-loaded", msnry);
        debugger;
      });
    },

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

    channelColor(channel) {
      if (channel === "dev-corporation") {
        return "bg-primary";
      }
      if (channel === "nerdstation") {
        return "bg-orange";
      }

      return "bg-uv";
    },
  },
};
</script>
