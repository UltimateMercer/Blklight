<template>
  <div class="card mt-0 mb-4">
    <img v-lazy="channel.cover" class="card-image-header cyberpunk-header" />
    <div class="card-img-overlay d-flex flex-column">
      <div class="container-fluid">
        <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1">
          <h1>
            <span class="marker marker-dark marker-title">
              <strong>
                <em>{{ channel.name }}</em>
              </strong>
            </span>
          </h1>
        </div>
      </div>
      <div class="container-fluid mt-auto">
        <div class="col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1">
          <div class="d-flex">
            <nuxt-link
              :to="channel.routes.home"
              class="btn btn-dark btn-flat btn-sm"
            >
              <font-awesome-icon :icon="['fas', 'home']" />
            </nuxt-link>

            <span class="btn btn-dark btn-flat btn-sm ml-auto">
              <font-awesome-icon :icon="['fas', 'search']" />
            </span>
            <nuxt-link
              :to="channel.routes.about"
              class="btn btn-dark btn-flat btn-sm"
            >
              Sobre
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <ImageFilter />
  </div>
</template>
<script>
import ImageFilter from "~/components/ImageFilter";
export default {
  name: "ChannelHeader",

  components: { ImageFilter },

  props: {
    routeName: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      channel: {
        base: "",
        name: "",
        routes: {
          home: "",
          about: "",
        },
        cover: "",
      },
      channelsData: [
        {
          base: "dev-corporation",
          name: "Dev Corporation",
          routes: {
            home: "/dev-corporation",
            about: "/dev-corporation/about",
          },
          cover: "https://i.imgur.com/Te8hqVv.jpg",
        },
        {
          base: "nerdstation",
          name: "Nerdstation",
          routes: {
            home: "/nerdstation",
            about: "/nerdstation/about",
          },
          cover: "https://i.imgur.com/HzkfSgI.jpg",
        },
        {
          base: "blklist",
          name: "Blklist",
          routes: {
            home: "/blklist",
            about: "/blklist/about",
          },
          cover: "https://i.imgur.com/HzkfSgI.jpg",
        },
        {
          base: "arts",
          name: "Arts",
          routes: {
            home: "/arts",
            about: "/arts/about",
          },
          cover: "https://i.imgur.com/E2xsDvG.jpg",
        },
        {
          base: "redlight",
          name: "Redlight",
          routes: {
            home: "/redlight",
            about: "/redlight/about",
          },
          cover: "https://i.imgur.com/1k8By32.png",
        },
      ],
    };
  },

  created() {
    const route = this.routeName.replace("-about", "");
    console.log(route);
    const info = this.channelsData.find((channel) => channel.base === route);
    console.log(info);
    if (info) {
      this.channel.base = info.base;
      this.channel.name = info.name;
      this.channel.cover = info.cover;
      this.channel.routes.home = info.routes.home;
      this.channel.routes.about = info.routes.about;
    }
  },

  methods: {
    validateRoute(routeName) {},
  },
};
</script>
<style lang="scss">
.card-image-header {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
