<template>
  <div class="container" :class="isDarkMode ? 'text-light' : 'text-dark'">
    <div class="my-3">
      <h1 class="">
        <strong><em>Ultimate Awakening</em></strong>
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quia
        iusto pariatur neque exercitationem voluptate nostrum voluptas, ipsa
        sapiente aperiam eveniet ipsam commodi soluta, dicta iste, alias maiores
        placeat rem.
      </p>

      <h4>Ultimate Power</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum molestias
        qui ad quae quas dolores quisquam ut dicta eius commodi autem recusandae
        inventore totam doloribus, error omnis rem saepe? Illo!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
        voluptatem tempore dolore, est sapiente iste? Harum laboriosam
        reiciendis consectetur dolorem suscipit vitae sit officiis veniam
        asperiores hic! Harum, nulla officiis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia
        quae iusto, repellendus quod corrupti optio illo consectetur ducimus
        iure sapiente dolores id sit eius maiores quam dicta! Qui, perferendis!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto id
        nulla expedita repudiandae vitae magni incidunt illum aliquid sapiente
        neque perspiciatis, quas minus a doloremque adipisci inventore facilis
        nesciunt dignissimos.
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isDarkMode"]),
  },
};
</script>
