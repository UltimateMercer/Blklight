<template>
  <div
    class="card my-4"
    :class="isDarkMode ? 'hover-card-teal' : 'hover-card-uv'"
  >
    <div class="view">
      <img
        src="https://i.imgur.com/QFd1g0Q.jpg"
        alt=""
        class="card-image-stories cyberpunk-effect"
      />
      <div class="mask texture-mask-4"></div>
      <div class="card-img-overlay d-flex flex-column">
        <h3 class="">
          <span class="marker marker-dark marker-title">
            <strong>Goku VS Jiren</strong>
          </span>
        </h3>
        <p>
          <span class="marker marker-dark">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </span>
        </p>
        <div>
          <span class="badge badge-dark badge-tag">
            31 Out 2020
          </span>
          <span class="badge badge-orange badge-tag">
            Nerdstation
          </span>
        </div>

        <div class="mt-auto ml-auto">
          <a href="#" class="btn btn-uv btn-rounded">View Button</a>
        </div>
      </div>
    </div>
    <ImageFilter />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import ImageFilter from "@/components/ImageFilter";
export default {
  name: "Stories",

  components: { ImageFilter },

  computed: {
    ...mapGetters(["isDarkMode"]),
  },
};
</script>
