<template>
  <b-navbar
    tag="nav"
    toggleable="md"
    :type="isDarkMode ? 'dark' : 'light'"
    :variant="isDarkMode ? 'dark' : 'polen'"
  >
    <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-2">
      <div class="container-fluid">
        <b-navbar-brand to="/">
          <img
            v-if="isDarkMode"
            src="~/static/blklight-base-w.svg"
            width="50"
            alt=""
          />
          <img v-else src="~/static/blklight-base.svg" width="50" alt="" />

          <strong><em>BLKLIGHT</em></strong>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <nuxt-link
              to="/search"
              class="btn"
              :class="isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'"
            >
              <font-awesome-icon :icon="['fas', 'search']" />
            </nuxt-link>
            <button
              class="btn"
              title="Modo noturno"
              @click.prevent="darkMode"
              :class="isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'"
            >
              <font-awesome-icon :icon="['fas', 'adjust']" />
            </button>
          </b-nav-form>
        </b-navbar-nav>
      </div>
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
  },

  methods: {
    ...mapMutations({
      darkMode: "darkMode",
    }),
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
