<template>
  <div>
    <div v-if="headerTemplate === 'portrait-left'">
      <div class="header-content header-h-full d-md-inline-flex mb-3">
        <div class="header-image-half header-h-full view">
          <div
            v-lazy:background-image="imageSrc"
            class="header-image-background header-h-full"
          ></div>
          <div class="mask texture-mask-4"></div>
        </div>
        <div class="header-info-half header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark title">
                {{ article.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ dateFormat }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-1">
                <span
                  v-if="article.category === 'Design'"
                  class="badge badge-tag badge-uv mx-0"
                >
                  {{ article.category }}
                </span>
                <span
                  v-if="article.category === 'Dev'"
                  class="badge badge-tag badge-primary text-dark mx-0"
                >
                  {{ article.category }}
                </span>
                <span
                  v-if="article.type === 'Pro'"
                  class="badge badge-tag badge-dark mx-0"
                >
                  {{ article.type }}
                </span>
                <span
                  v-if="article.type === 'Pessoal'"
                  class="badge badge-tag badge-orange mx-0"
                >
                  {{ article.type }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="headerTemplate === 'portrait-right'">
      <div class="header-content header-h-full d-md-inline-flex mb-3">
        <div class="header-info-half header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark title">
                {{ article.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ dateFormat }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-1">
                <span
                  v-if="article.category === 'Design'"
                  class="badge badge-tag badge-uv mx-0"
                >
                  {{ article.category }}
                </span>
                <span
                  v-if="article.category === 'Dev'"
                  class="badge badge-tag badge-primary text-dark mx-0"
                >
                  {{ article.category }}
                </span>
                <span
                  v-if="article.type === 'Pro'"
                  class="badge badge-tag badge-dark mx-0"
                >
                  {{ article.type }}
                </span>
                <span
                  v-if="article.type === 'Pessoal'"
                  class="badge badge-tag badge-orange mx-0"
                >
                  {{ article.type }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="header-image-half header-h-full view">
          <div
            v-lazy:background-image="imageSrc"
            class="header-image-background header-h-full"
          ></div>
          <div class="mask texture-mask-4"></div>
        </div>
      </div>
    </div>

    <div v-if="headerTemplate === 'landscape'">
      <div
        class="header-content header-h-full d-md-inline-flex shadow-image mb-3"
      >
        <div class="header-info header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark title">
                {{ article.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ dateFormat }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-1">
                <span v-if="article.category === 'Design'">
                  <span class="badge badge-tag badge-uv mx-0">
                    {{ article.category }}
                  </span>
                </span>
                <span v-if="article.category === 'Dev'">
                  <span class="badge badge-tag badge-primary text-dark mx-0">
                    {{ article.category }}
                  </span>
                </span>
                <span v-if="article.type === 'Pro'">
                  <span class="badge badge-tag badge-dark mx-0">
                    {{ article.type }}
                  </span>
                </span>
                <span v-if="article.type === 'Pessoal'">
                  <span class="badge badge-tag badge-orange mx-0">
                    {{ article.type }}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="header-image header-h-full view">
          <div
            v-lazy:background-image="imageSrc"
            class="header-image-background header-h-full"
          ></div>
          <div class="mask texture-mask-4"></div>
        </div>
      </div>
    </div>

    <div v-if="headerTemplate === 'parallax'">
      <div class="header-simple mt-5 mb-3">
        <div
          v-lazy:background-image="imageSrc"
          class="header-simple-image-parallax view mb-2"
        >
          <div class="mask parallax-mask texture-mask-4"></div>
        </div>
      </div>
      <div
        class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12"
      >
        <div class="header-simple-info mb-0 mx-lg-0">
          <h1 class="blog-title">
            <span class="marker marker-dark">
              {{ article.title }}
            </span>
          </h1>

          <h5 class="blog-meta">
            <span class="marker marker-dark">
              {{ dateFormat }}
            </span>
          </h5>
          <div class="d-flex">
            <div class="mt-1">
              <span>
                <span
                  v-if="article.category === 'Design'"
                  class="badge badge-tag badge-uv mx-0"
                >
                  {{ article.category }}
                </span>
              </span>
              <span
                v-if="article.category === 'Dev'"
                class="badge badge-tag badge-primary text-dark mx-0"
              >
                {{ article.category }}
              </span>
              <span
                v-if="article.type === 'Pro'"
                class="badge badge-tag badge-dark mx-0"
              >
                {{ article.type }}
              </span>
              <span
                v-if="article.type === 'Pessoal'"
                class="badge badge-tag badge-orange mx-0"
              >
                {{ article.type }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="headerTemplate === 'square-profile'">
      <div class="container-fluid mt-5 p-0">
        <div class="container p-0">
          <div class="col-12 pt-lg-3 py-2 px-3">
            <div class="header-profile">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12 col-12">
                  <div
                    v-lazy-container="{ selector: 'img' }"
                    class="head-avatar"
                  >
                    <img
                      :data-src="imageSrc"
                      width="325"
                      class="rounded shadow-image img-fluid mx-auto d-block mb-4"
                      :alt="article.title"
                    />
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-xs-12 col-12">
                  <div class="head-text my-3">
                    <h1 class="blog-title">
                      <span class="marker marker-dark marker-title">
                        {{ article.title }}
                      </span>
                    </h1>
                    <template v-if="article.description">
                      <h5 class="blog-meta">
                        <span class="marker marker-dark sm-mark">
                          {{ article.description }}
                        </span>
                      </h5>
                    </template>

                    <h5 class="blog-meta">
                      <span class="marker marker-dark sm-mark">
                        {{ dateFormat }}
                      </span>
                    </h5>
                    <div class="d-flex">
                      <div class="mt-1">
                        <span
                          v-if="article.category === 'Design'"
                          class="badge badge-tag badge-uv mx-0"
                        >
                          {{ article.category }}
                        </span>
                        <span
                          v-if="article.category === 'Dev'"
                          class="badge badge-tag badge-primary text-dark mx-0"
                        >
                          {{ article.category }}
                        </span>
                        <span
                          v-if="article.type === 'Pro'"
                          class="badge badge-tag badge-dark mx-0"
                        >
                          {{ article.type }}
                        </span>
                        <span
                          v-if="article.type === 'Pessoal'"
                          class="badge badge-tag badge-orange mx-0"
                        >
                          {{ article.type }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="headerTemplate === 'circle-profile'">
      <div class="container-fluid p-0">
        <div class="container p-0">
          <div class="col-12 pt-lg-3 py-2 px-3">
            <div class="header-profile mt-4">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12 col-12">
                  <div
                    v-lazy-container="{ selector: 'img' }"
                    class="head-avatar"
                  >
                    <img
                      :data-src="imageSrc"
                      width="325"
                      class="rounded-circle shadow-image img-fluid mx-auto d-block mb-4"
                      :alt="article.title"
                    />
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-xs-12 col-12">
                  <div class="head-text my-3">
                    <h1 class="blog-title">
                      <span class="marker marker-dark title">
                        {{ article.title }}
                      </span>
                    </h1>
                    <h5 class="blog-meta">
                      <span class="marker marker-dark sm-mark">
                        {{ article.description }}
                      </span>
                    </h5>
                    <h5 class="blog-meta">
                      <span class="marker marker-dark sm-mark">
                        {{ dateFormat }}
                      </span>
                    </h5>
                    <div class="d-flex">
                      <div class="mt-1">
                        <span v-if="article.category === 'Design'">
                          <span class="badge badge-tag badge-uv mx-1">
                            {{ article.category }}
                          </span>
                        </span>
                        <span v-if="article.category === 'Dev'">
                          <span
                            class="badge badge-tag badge-primary text-dark mx-1"
                          >
                            {{ article.category }}
                          </span>
                        </span>
                        <span v-if="article.type === 'Pro'">
                          <span class="badge badge-tag badge-dark mx-1">
                            {{ article.type }}
                          </span>
                        </span>
                        <span v-if="article.type === 'Pessoal'">
                          <span class="badge badge-tag badge-orange mx-1">
                            {{ article.type }}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="headerTemplate === 'image-top'">
      <div class="container-fluid p-0 mt-4">
        <div class="col-lg-10 offset-lg-1 col-12 p-lg-0">
          <div class="header-simple">
            <div
              v-lazy-container="{ selector: 'img' }"
              class="view shadow-image"
            >
              <img
                :data-src="imageSrc"
                alt=""
                class="header-simple-image-top"
              />
              <div class="mask texture-mask-4"></div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12"
        >
          <div class="header-simple-info mt-3 mb-0 mx-lg-0">
            <h1 class="blog-title">
              <span
                class="marker"
                :class="isDarkMode ? 'marker-light' : 'marker-dark'"
              >
                {{ article.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span
                class="marker"
                :class="isDarkMode ? 'marker-light' : 'marker-dark'"
              >
                {{ dateFormat }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-1">
                <span
                  v-if="article.category === 'Design'"
                  class="badge badge-tag badge-uv mx-0"
                >
                  {{ article.category }}
                </span>
                <span
                  v-if="article.category === 'Dev'"
                  class="badge badge-tag badge-primary text-dark mx-0"
                >
                  {{ article.category }}
                </span>
                <span
                  v-if="article.type === 'Pro'"
                  class="badge badge-tag badge-dark mx-0"
                >
                  {{ article.type }}
                </span>
                <span
                  v-if="article.type === 'Pessoal'"
                  class="badge badge-tag badge-orange mx-0"
                >
                  {{ article.type }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  name: "HeaderLayout",

  props: {
    article: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      // headerLayout: this.article.imgheaderLayout
    };
  },

  computed: {
    ...mapGetters(["isDarkMode"]),

    imageSrc() {
      const image = this.article.imgAlt
        ? this.article.imgAlt
        : this.article.img;

      return image;
    },

    dateFormat() {
      const formattedDate = format(
        new Date(this.article.date),
        "dd 'de' MMMM 'de' yyyy",
        {
          locale: ptBR,
        }
      );

      return formattedDate;
    },

    headerTemplate() {
      const layoutTemplate = [
        "image-top",
        "parallax",
        "portrait-left",
        "portrait-right",
        "landscape",
      ];
      const num = Math.floor(Math.random() * layoutTemplate.length);

      const layout = this.article.headerLayout
        ? this.article.headerLayout
        : layoutTemplate[num];

      return layout;
    },
  },
};
</script>
