<template>
  <div class="">
    <ChannelHeader :routeName="this.$route.name" />
    <div
      class="container py-4"
      :class="isDarkMode ? 'text-light' : 'text-dark'"
    >
      <h1>Nerdstation</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
        necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo
        hic qui nostrum voluptates esse dolorum alias asperiores ea.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
        necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo
        hic qui nostrum voluptates esse dolorum alias asperiores ea.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
        necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo
        hic qui nostrum voluptates esse dolorum alias asperiores ea.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
        necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo
        hic qui nostrum voluptates esse dolorum alias asperiores ea.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
        necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo
        hic qui nostrum voluptates esse dolorum alias asperiores ea.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
        necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo
        hic qui nostrum voluptates esse dolorum alias asperiores ea.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
        necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo
        hic qui nostrum voluptates esse dolorum alias asperiores ea.
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import ChannelHeader from "~/components/ChannelHeader";

export default {
  components: { ChannelHeader },
  computed: {
    ...mapGetters(["isDarkMode"]),
  },
};
</script>
