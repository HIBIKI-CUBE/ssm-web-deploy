<script lang="ts">
  export let color = '#F00';
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</svelte:head>

<a href={$$props.href} style="--color: {color}">
  <slot />
  <span class="material-symbols-outlined arrow"> keyboard_arrow_right </span>
</a>

<style lang="stylus">
  a
    color: var(--color);
    text-decoration: none;
    display: inline-grid;
    place-items center
    border: 3px solid var(--color);
    margin-block: 1em;
    min-width: 20ch;
    padding-inline 5ch
    font-weight: bold;
    box-sizing: border-box;
    height 3em;
    border-radius: 1.5em
    position: relative
    background: #FFF
  .arrow
    position: absolute;
    right: 0.5ch;
    font-variation-settings:
    'FILL' 0,
    'wght' 800,
    'GRAD' 0,
    'opsz' 48
</style>
