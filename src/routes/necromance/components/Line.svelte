<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  /** 半角スペースで分割した文字列 */
  export let string = '',
    align = '',
    slideIn = '',
    variant: 'normal' | 'necro' = 'normal';
  let element: any;
  let intersecting: any;
</script>

<IntersectionObserver once {element} bind:intersecting>
  <p
    data-align={align}
    data-slidein={slideIn}
    bind:this={element}
    class:animation={intersecting}
    class={`line line--${variant}`}
  >
    {#each string.split(' ') as chunk}
      <span>{chunk}</span>
    {/each}
  </p>
</IntersectionObserver>

<style lang="stylus">

  @import '../styles/_break.styl'

.line {
  font-size: 1.125em;
  line-height: 200%;
  font-weight: bold;
  font-feature-settings: 'palt';
  letter-spacing: 2px;
  padding: 0 5px;
  display: table;
  &[data-align='left'] {
    text-align: left;
    margin-right: auto !important;
  }
  &[data-align='right'] {
    text-align: right;
    margin-left: auto !important;
  }
  &[data-align='center'] {
    text-align: center;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  &[data-slidein='left'] {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    &.animation {
      animation-name: slideInLeft;
      animation-duration: 0.6s;
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-fill-mode: both;
    }
  }
  &[data-slidein='right'] {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    &.animation {
      animation-name: slideInRight;
      animation-duration: 0.6s;
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-fill-mode: both;
    }
  }
  span {
    color: #111;
    display: inline-block;
    position: relative;
    // thanks: https://ponsyon.com/archives/4623
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: -5px;
      top: 0;
      right: -5px;
      background-color: #ffffff;
      z-index: -1;
    }
  }
  &--necro {
    margin: 3em 0;
    padding: 0 5px;
    +sm() {
      margin: 1em 0;
    }
    span {
      font-size: 1.2em;
      font-weight: bold;
      &::before {
        background-color: #ffa220;
      }
    }
  }
}
@keyframes slideInLeft {
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
@keyframes slideInRight {
  0% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
</style>
