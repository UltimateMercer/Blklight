<template>
  <div>
    <span
      v-if="channel === 'dev-corporation'"
      class="badge badge-primary"
      :class="isTag ? 'badge-tag' : ''"
    >
      Dev Corporation
    </span>
    <span
      v-if="channel === 'nerdstation'"
      class="badge badge-orange"
      :class="isTag ? 'badge-tag' : ''"
    >
      Nerdstation
    </span>
    <!-- <span v-else class="badge badge-dark"> {{ channel }}</span> -->
  </div>
</template>
<script>
export default {
  name: "ChannelBadge",

  props: {
    channel: {
      type: String,
      default: null,
    },

    isTag: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
