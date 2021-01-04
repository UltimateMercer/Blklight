<template>
  <section class="container-fluid">
    <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1">
      <template v-if="isDarkMode">
        <img
          src="~/static/blklight-base-w.svg"
          width="160"
          class="mx-auto d-block mt-2"
          alt=""
        />
      </template>
      <template v-else>
        <img
          src="~/static/blklight-base.svg"
          width="160"
          class="mx-auto d-block mt-2"
          alt=""
        />
      </template>
      <h1 class="text-center" :class="isDarkMode ? 'text-light' : 'text-dark'">
        <strong><em>Playground</em></strong>
      </h1>
    </div>
    <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-lg-0 px-3 pt-5">
      <div class="row mb-5">
        <div class="col-lg-7 col-md-6 col-12 px-md-4 px-3 mb-3">
          <div class="sticky-top">
            <h2
              class="mt-3 mb-3"
              :class="isDarkMode ? 'text-light' : 'text-dark'"
            >
              <strong><em>Destaque</em></strong>
            </h2>
            <template v-for="(featured, i) in featureds">
              <div
                class="card mb-4"
                :key="i"
                :class="
                  isDarkMode
                    ? 'card-plain hover-card-yellow'
                    : 'hover-card-uv card-raised'
                "
              >
                <img
                  v-lazy="featured.img"
                  class="card-img-top card-img-fit cyberpunk-effect"
                  alt="..."
                  style="height: 500px !important"
                />
                <div
                  class="card-body px-4"
                  :class="isDarkMode ? 'text-light' : ''"
                >
                  <h3>
                    <strong
                      ><em>{{ featured.title }}</em></strong
                    >
                  </h3>
                  <p class="card-text">
                    {{ featured.description }}
                  </p>
                  <span
                    class="badge badge-primary badge-tag mb-2"
                    style="text-transform: capitalize"
                  >
                    {{ featured.channel }}
                  </span>
                  <span class="badge badge-primary badge-tag">
                    {{ formatDate(featured.updatedAt) }}
                  </span>
                  <div class="text-right mb-2">
                    <nuxt-link
                      tag="a"
                      :to="{
                        name: `${slugName(featured.dir)}-slug`,
                        params: { slug: `${featured.slug}` },
                      }"
                      class="btn btn-uv btn-flat btn-sm"
                    >
                      Ler mais...
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-12 px-md-4 px-3">
          <h2
            class="mt-3 mb-3"
            :class="isDarkMode ? 'text-light' : 'text-dark'"
          >
            <strong> <em> Últimas notícias</em></strong>
          </h2>
          <template v-for="(post, i) in posts">
            <div
              class="card mb-4"
              :key="i"
              :class="
                isDarkMode
                  ? 'card-plain hover-card-yellow'
                  : 'hover-card-uv card-raised'
              "
            >
              <img
                v-lazy="post.img"
                class="card-img-top card-img-fit cyberpunk-effect"
                alt="..."
                style="height: 350px !important"
              />
              <div
                class="card-body px-4"
                :class="isDarkMode ? 'text-light' : ''"
              >
                <h4>
                  <strong
                    ><em>{{ post.title }}</em></strong
                  >
                </h4>
                <p class="card-text">
                  {{ post.description }}
                </p>
                <span
                  class="badge badge-primary badge-tag mb-2"
                  style="text-transform: capitalize"
                >
                  {{ post.channel }}
                </span>
                <span class="badge badge-primary badge-tag">
                  {{ formatDate(post.updatedAt) }}
                </span>
                <div class="text-right mb-2">
                  <nuxt-link
                    tag="a"
                    :to="{
                      name: `${slugName(post.dir)}-slug`,
                      params: { slug: `${post.slug}` },
                    }"
                    class="btn btn-uv btn-flat btn-sm"
                  >
                    Ler mais...
                  </nuxt-link>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <div
            class="card mb-5"
            :class="
              isDarkMode
                ? 'card-plain hover-card-yellow'
                : 'hover-card-uv card-raised'
            "
          >
            <!-- Card image -->
            <div class="card-picture narrow">
              <div class="">
                <img
                  class="card-img card-img-fit rounded cyberpunk-effect"
                  v-lazy="article.multimedia[0]['url']"
                  alt="Card image cap"
                  style="height: 325px !important"
                />
              </div>
            </div>
            <div class="card-body px-4" :class="isDarkMode ? 'text-light' : ''">
              <h4 class="mb-3">
                <strong
                  ><em>{{ article.title }}</em></strong
                >
              </h4>
              <p class="card-text">
                {{ article.abstract }}
              </p>
              <span
                class="badge badge-uv badge-tag mb-2"
                style="text-transform: capitalize"
              >
                {{ article.section }}
              </span>
              <span class="badge badge-uv badge-tag">
                {{ formatDate(article.updated_date) }}
              </span>
              <div class="text-right mb-2">
                <a
                  :href="article.short_url"
                  target="_blank"
                  class="btn btn-sm"
                  :class="
                    isDarkMode ? 'btn-outline-neon-yellow' : 'btn-outline-uv'
                  "
                >
                  Read more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-lg-4 col-md-6 col-12"
        >
          <div
            class="card mb-4"
            :class="
              isDarkMode
                ? 'card-plain hover-card-yellow'
                : 'hover-card-uv card-raised'
            "
          >
            <img
              v-lazy="article.multimedia[0]['url']"
              class="card-img-top card-img-fit cyberpunk-effect"
              alt="..."
              style="height: 350px !important"
            />
            <div class="card-body px-4" :class="isDarkMode ? 'text-light' : ''">
              <h4>
                <strong
                  ><em>{{ article.title }}</em></strong
                >
              </h4>
              <p class="card-text">
                {{ article.abstract }}
              </p>
              <span
                class="badge badge-uv badge-tag mb-2"
                style="text-transform: capitalize"
              >
                {{ article.section }}
              </span>
              <span class="badge badge-uv badge-tag">
                {{ formatDate(article.updated_date) }}
              </span>
              <div class="text-right mb-2">
                <a
                  :href="article.short_url"
                  target="_blank"
                  class="btn btn-sm"
                  :class="
                    isDarkMode ? 'btn-outline-neon-yellow' : 'btn-outline-uv'
                  "
                >
                  Read more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  async asyncData({ $axios, $content, params }) {
    const featureds = await $content({ deep: true }, params.slug)
      .only([
        "title",
        "description",
        "img",
        "imgAlt",
        "slug",
        "dir",
        "channel",
        "createdAt",
        "updatedAt",
        "isFeatured",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: true })
      .limit(1)
      .fetch();

    const posts = await $content({ deep: true }, params.slug)
      .only([
        "title",
        "description",
        "img",
        "imgAlt",
        "slug",
        "dir",
        "channel",
        "createdAt",
        "updatedAt",
        "isFeatured",
      ])
      .sortBy("updatedAt", "desc")
      .where({ isFeatured: false })
      .limit(5)
      .fetch();

    const data = await $axios.$get(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=oPWIpYcGwSdzOH2cqYKkyvcotJCkGRNn"
    );
    const articles = data.results;
    // console.log(articles);
    return {
      articles,
      featureds,
      posts,
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
    slugName(archive) {
      const link = archive.replace("/", "").replace("/articles", "");
      return link;
    },
  },
};
</script>
