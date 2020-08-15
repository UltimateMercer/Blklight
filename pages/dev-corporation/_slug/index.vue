<template>
  <div :class="{ 'bg-dark': isDarkMode }">
    <HeaderLayout :article="headerInfo" />
    <div class="container-fluid px-lg-0 px-md-0 pb-4">
      <div
        class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12"
      >
        <div class="page">
          <div class="post monospace" :class="{ 'dark-post': isDarkMode }">
            <nuxt-content :document="article" />
            <p>{{ this.$route.n }}</p>

            <pre>{{ article }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout";

import { mapGetters } from "vuex";

export default {
  components: { HeaderLayout },

  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    console.log(name, params.slug);
    return { article };
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isDarkMode"]),

    headerInfo(article) {
      return {
        title: this.article.title,
        date: this.article.updatedAt,
        description: this.article.description,
        category: this.article.category,
        // type: this.article.attributes.type,
        // tags: this.article.attributes.tags,
        img: this.article.img,
        imgAlt: this.article.imgAlt,
        headerLayout: this.article.headerLayout,
      };
    },
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-br", options);
    },
  },
};
</script>
