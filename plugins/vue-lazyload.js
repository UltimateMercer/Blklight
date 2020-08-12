import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("~/assets/images/ultimate-logo.jpg"),
  loading: require("~/assets/images/ultimate-logo.jpg"),
  attempt: 1,
});
