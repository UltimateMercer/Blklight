<template>
  <b-navbar tag="nav" toggleable="md" type="dark" variant="dark" fixed="top">
    <div class="container">
      <b-navbar-brand>
        <nuxt-link to="/" class="navbar-brand mx-2">
          <strong>
            BLKLIGHT
          </strong>
        </nuxt-link>
      </b-navbar-brand>
    </div>
  </b-navbar>
</template>
<script>
import Vue from "vue";
import { NavbarPlugin } from "bootstrap-vue";
Vue.use(NavbarPlugin);

export default {
  name: "Navbar",
  data() {
    return {
      route: this.$nuxt.$route.path,
    };
  },

  computed: {},
};
</script>
<style lang="scss">
.navbar {
  font-family: "IBM Plex Sans Condensed", "Fira Code", sans-serif;
  font-size: 1.25rem;
  padding: 0.25rem !important;
  .navbar-nav {
    .nav-item {
      padding: 0.25rem 1rem;
      font-weight: 500;
      .nav-link {
        color: #eaeaea;
      }
    }
  }
}

.bg-transparent-dark {
  background-color: rgba(18, 18, 18, 0.5);
}
</style>
