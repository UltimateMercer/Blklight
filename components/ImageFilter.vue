<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-filters"
    style="display: block;"
  >
    <filter
      id="cyberpunk-t"
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
        <feFuncR type="table" tableValues="0.01 0.28 0.01 0" />
        <feFuncG type="table" tableValues="0 0.04 0.66 1" />
        <feFuncB type="table" tableValues="0.02 1 0.96 0.5" />
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
      id="cyberpunk-u"
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
        <feFuncR type="table" tableValues="0 0.28 0.01" />
        <feFuncG type="table" tableValues="1 0.04 0.66" />
        <feFuncB type="table" tableValues="0.5 1 0.96" />
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
      id="cyberpunk-y"
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
        result="grayscale"
        values="1 0 0 0 0
                          1 0 0 0 0
                          1 0 0 0 0
                          0 0 0 1 0"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.01 0.28 0.01" />
        <feFuncG type="table" tableValues="0 0.04 0.66" />
        <feFuncB type="table" tableValues="0.02 1 0.96" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
    </filter>
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
        <feFuncR type="table" tableValues="0.07 0.39 0 0" />
        <feFuncG type="table" tableValues="0.07 0 0.59 1" />
        <feFuncB type="table" tableValues="0.07 1 1 0.78" />
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
      id="cyberpunk-ult2"
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
        <feFuncR type="table" tableValues="0.88 0.2 0 0 0.1" />
        <feFuncG type="table" tableValues="0 0 0 0.69 1" />
        <feFuncB type="table" tableValues="1 1 0 1 0.39" />
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
      id="cyberpunk-ult3"
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
        <feFuncR type="table" tableValues="0.88 0.2 0" />
        <feFuncG type="table" tableValues="0 0 0.69" />
        <feFuncB type="table" tableValues="1 1 1" />
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
      id="cyberpunk-ult4"
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
        <feFuncR type="table" tableValues="0 1" />
        <feFuncG type="table" tableValues="0.2 0" />
        <feFuncB type="table" tableValues="1 0.88" />
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
      id="cyberpunk-ult5"
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
        <feFuncR type="table" tableValues="1 0 0 0.1" />
        <feFuncG type="table" tableValues="0 0.2 0 1" />
        <feFuncB type="table" tableValues="0.88 1 0 0.39" />
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
      id="cyberpunk-ult6"
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
        <feFuncR type="table" tableValues="0 0.39 0" />
        <feFuncG type="table" tableValues="0 0.1 0.98" />
        <feFuncB type="table" tableValues="0 1 1" />
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
      id="cyberpunk-ult7"
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
        <feFuncG type="table" tableValues="0 0.1 0.98 0.98" />
        <feFuncB type="table" tableValues="0 1 1 0.1" />
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
      id="cyberpunk-ult8"
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
        filter: url("#cyberpunk-ult8");
      }
    }
  }
}
</style>
