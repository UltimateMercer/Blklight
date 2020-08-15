<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <div class="container-fluid mt-5 pt-4">
      <div
        class="col-xl-10 col-lg-12 col-md-12 col-12 offset-xl-1 offset-lg-0 offset-md-0 offset-0 p-md-0"
      >
        <Featured :featureds="featureds" />
      </div>
    </div>
    <div class="container my-3">
      <nuxt-link to="/dev-corporation" class="btn btn-primary btn-raised">
        Dev Corporation
      </nuxt-link>
      <nuxt-link to="/nerdstation" class="btn btn-orange btn-raised">
        Nerdstation
      </nuxt-link>
    </div>
    <div class="container mb-4">
      <h3
        class="marker marker-title"
        :class="isDarkMode ? 'marker-light' : 'marker-dark'"
      >
        <span>
          <strong>Últimas notícias</strong>
        </span>
      </h3>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <div
            class="card card-raised card-background view mb-3"
            :class="isDarkMode ? 'neon-shadow-light' : 'neon-shadow-dark'"
          >
            <img
              :src="imageSrc(article)"
              class="card-background-image"
              alt=""
            />
            <div class="mask texture-mask-2"></div>

            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-end"
            >
              <h5 class="">
                <span class="marker marker-dark marker-title">
                  {{ article.title }}
                </span>
              </h5>
              <div class="card-subinfo">
                <span class="badge badge-dark">
                  {{ formatDate(article.updatedAt) }}
                </span>
              </div>
              <div class="card-subinfo">
                <span class="badge badge-dark">
                  {{ article.channel }}
                </span>
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
        </div>
      </div>
    </div>
    <DuotoneFilters />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Featured from "@/components/Featured";
import DuotoneFilters from "@/components/DuotoneFilters";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  components: { Featured, DuotoneFilters },
  async asyncData({ $content, params }) {
    const featureds = await $content("articles", params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "slug",
        "channel",
        "updatedAt",
        "isFeatured",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: true })
      .fetch();

    const articles = await $content("articles", params.slug)
      .only([
        "title",
        "img",
        "imgAlt",
        "channel",
        "slug",
        "isFeatured",
        "updatedAt",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: "" })
      .fetch();

    return {
      featureds,
      articles,
    };
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

    // channelSlug(article) {
    //   const channel = article.channel;
    //   const slug = article.slug;
    //   const path = `/${channel}-${slug}`;
    //   return path;
    // },
  },
};
</script>
