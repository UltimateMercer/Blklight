<template>
  <b-navbar tag="nav" toggleable="md" type="dark" variant="uv">
    <div class="container">
      <b-navbar-brand to="/">
        <img src="~/static/blklight-base-w.svg" width="50" alt="" />
        <strong><em>BLKLIGHT</em></strong>
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <nuxt-link to="/search" class="btn btn-outline-light">
            <font-awesome-icon :icon="['fas', 'search']" />
          </nuxt-link>
          <button
            class="btn btn-outline-light"
            title="Modo noturno"
            @click.prevent="darkMode"
          >
            <font-awesome-icon :icon="['fas', 'adjust']" />
          </button>
        </b-nav-form>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>
<script>
import Vue from "vue";
import { mapMutations, mapGetters } from "vuex";

import { NavbarPlugin } from "bootstrap-vue";

Vue.use(NavbarPlugin);

export default {
  name: "Navbar",

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isDarkMode"]),
    navbarVariant() {
      if (this.$route.name === "dev-corporation-index-*") {
        console.log(this.$route.params);
        return "primary";
      } else if (this.$route.path === "/nerdstation") {
        return "orange";
      } else {
        return "dark";
      }
    },
  },

  methods: {
    ...mapMutations({
      darkMode: "darkMode",
    }),

    // darkMode() {
    //   this.isDark = !this.isDark;
    //   localStorage.setItem("isDark", this.isDark);
    //   this.$store.commit("isDark");
    // },
  },
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

// .navbar-brand {
//   padding-top: 0.125rem !important;
//   padding-bottom: 0.125rem !important;
// }

.bg-transparent-dark {
  background-color: rgba(18, 18, 18, 0.5);
}
</style>
