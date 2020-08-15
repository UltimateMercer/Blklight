<template>
  <b-navbar
    tag="nav"
    toggleable="md"
    type="dark"
    fixed="top"
    :variant="navbarVariant"
  >
    <div class="container">
      <b-navbar-brand>
        <nuxt-link to="/" class="navbar-brand mx-2 py-2">
          <strong>
            BLKLIGHT
          </strong>
        </nuxt-link>
      </b-navbar-brand>
      <template
        v-if="
          this.$route.name === 'dev-corporation-index' ||
          this.$route.name === 'dev-corporation-index-category' ||
          this.$route.name === 'dev-corporation-index-search'
        "
      >
        <b-nav-text>
          <nuxt-link :to="this.$route.path">
            /Dev Corporation
          </nuxt-link>
        </b-nav-text>
      </template>
      <template v-if="this.$route.path === '/nerdstation'">
        <b-nav-text>
          <nuxt-link :to="this.$route.path">
            /Nerdstation
          </nuxt-link>
        </b-nav-text>
      </template>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <button
            class="btn btn-dark"
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
        console.log(this.$route);
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

.bg-transparent-dark {
  background-color: rgba(18, 18, 18, 0.5);
}
</style>
