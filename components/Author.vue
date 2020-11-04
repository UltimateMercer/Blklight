<template>
  <div
    class="container-fluid mb-4"
    :class="isDarkMode ? 'bg-neon-yellow' : 'bg-uv'"
  >
    <div class="container">
      <div class="card card-plain py-2">
        <div class="row">
          <div class="col-lg-3 col-12 p-0">
            <img
              width="200"
              src="https://i.imgur.com/VuENQgt.jpg"
              alt=""
              class="img-fluid mx-auto rounded-circle d-block py-3"
            />
          </div>
          <div class="col-lg-9 col-12">
            <div class="card-body">
              <h3>
                <span
                  class="marker marker-title"
                  :class="isDarkMode ? 'marker-dark' : 'marker-dark'"
                >
                  <strong><em> Ultimate Mercer </em></strong>
                </span>
              </h3>

              <p :class="isDarkMode ? 'text-dark' : 'text-light'">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione ut beatae tempora consectetur ad doloribus adipisci.
                Tempore, culpa animi nulla, reiciendis voluptatibus doloremque
                repellat eaque obcaecati molestiae, facilis delectus quod?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Author",
  computed: {
    ...mapGetters(["isDarkMode"]),
  },
};
</script>
