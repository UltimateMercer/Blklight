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
      class="badge badge-dark text-danger"
      :class="isTag ? 'badge-tag' : ''"
    >
      Danger Zone
    </span>
    <span
      v-if="channel === 'arts'"
      class="badge badge-indigo"
      :class="isTag ? 'badge-tag' : ''"
    >
      Arts
    </span>
    <span
      v-if="channel === 'redlight'"
      class="badge badge-pink"
      :class="isTag ? 'badge-tag' : ''"
    >
      Redlight
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
