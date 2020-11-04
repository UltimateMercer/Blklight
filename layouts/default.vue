<template>
  <div
    class="d-flex flex-column h-100"
    :class="isDarkMode ? 'bg-dark' : 'bg-light'"
  >
    <Navbar />
    <Nuxt />
    <ImageFilter />
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageFilter from "@/components/ImageFilter";

export default {
  components: { Navbar, Footer, ImageFilter },
  computed: {
    ...mapGetters(["isDarkMode"]),
  },
};
</script>

<style>
@import "~/assets/style/css/ultimate.css";
</style>
