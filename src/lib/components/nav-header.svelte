<script lang="ts">
  export let targets: { label: string; id: string }[];

  let arrow: HTMLElement;
  let angle = 0;
  let funMode = false;

  function handleMouse(event: { clientX: number; clientY: number }) {
    const rect = arrow.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    angle = (Math.atan2(centerX - event.clientX, event.clientY - centerY) * 180) / Math.PI + 180;
    angle = Math.min(270, Math.max(135, angle));
  }
</script>

<svelte:head>
  <meta name="theme-color" content="#fff" />
</svelte:head>

<!-- <svelte:body on:mousemove={handleMouse} /> -->

<header>
  <img class="logo" width="1572" height="600" src="ssm-logo-landscape.svg" alt="" />
  <!-- <button>
    メニュー
    <div class="arrow" bind:this={arrow}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        style="rotate: {funMode ? angle : 45}deg"
      >
        <path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
      </svg>
    </div>
  </button> -->
</header>

<style lang="stylus">
  header
    box-sizing border-box
    display flex
    align-items center
    justify-content space-between
    width 100%
    height 4rem
    padding 0 (@height / 2)
    background-color #fff
  .logo
    width auto
    height 60%
  button
    display flex
    align-items center
    height 100%
    padding 0
    margin 0
    font-size 1.2em
    color #333
    background-color #fff0
    border none
  .arrow
    box-sizing border-box
    display grid
    place-items center
    height 55%
    aspect-ratio 1
    margin-left 1ch
    background-color #f7931e
    border-radius 40%
    svg
      height 60%
      fill #fff
      rotate 45deg
</style>
