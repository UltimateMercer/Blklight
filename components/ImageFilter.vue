<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-filters"
    style="display: block;"
  >
    <filter
      id="cyberpunk-ult"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 0.39 0 1" />
        <feFuncG type="table" tableValues="0 0 0.78 1" />
        <feFuncB type="table" tableValues="0 1 1 0" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-ult_alt"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 0.39 0.78 0 1" />
        <feFuncG type="table" tableValues="0 0 0 0.78 1" />
        <feFuncB type="table" tableValues="0 1 1 1 0" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
  </svg>
</template>
<script>
export default {};
</script>
<style lang="scss">
.hover-card {
  &-uv,
  &-teal {
    &:hover {
      .cyberpunk-effect {
        transition: 1s ease-in;
        filter: url("#cyberpunk-ult");
      }
    }
  }
}
</style>
