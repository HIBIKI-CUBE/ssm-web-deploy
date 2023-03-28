<script lang="ts">
  import type { PageData } from './$types';
  import Container from './container.svelte';
  import Entry from './entry.svelte';

  let showAllNews = false;
  export let data: PageData;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</svelte:head>

<Container title="NEWS" subtitle="お知らせ" themeColor="#f00">
  {#each showAllNews ? data.news : data.news.slice(0, 3) as entry, i}
    <Entry {...entry} index={i - 3} />
  {/each}
  <div class="showMore">
    <button on:click={() => (showAllNews = !showAllNews)}>
      <span class="material-symbols-outlined">
        {`keyboard_double_arrow_${showAllNews ? 'up' : 'down'}`}
      </span>
      {showAllNews ? '最新のお知らせのみ表示' : 'さらにお知らせを表示'}
    </button>
  </div>
</Container>

<style lang="stylus">
  .showMore
    display: flex
    justify-content: center
    padding: 2em
    button
      font-size 1em
      background-color transparent
      border none
      text-decoration underline
    .material-symbols-outlined
      font-size 1em
      vertical-align: text-top
      font-variation-settings:
      'FILL' 0,
      'wght' 500,
      'GRAD' 0,
      'opsz' 48
</style>
