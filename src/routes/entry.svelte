<script lang="ts">
  import { cdate } from 'cdate';
  import { fly } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';

  export let title = '',
    date = '',
    link = '#000',
    index = 0,
    entriesCount = 0;
</script>

<a href={link}>
  <article
    in:fly={{ x: 200, duration: 500, delay: 50 * index, easing: expoOut }}
    out:fly={{ x: 500, duration: 200, delay: 20 * -(index - (entriesCount)), easing: expoOut }}
  >
    {title}
    <time dateTime={cdate(date).format('YYYY-MM-DD')}>{cdate(date).format('YYYY/M/D')}</time>
  </article>
</a>

<style lang="stylus">
  a
    text-decoration: none;
    color: #333

  article
    background-color: #fff;
    box-shadow: 0 1px 5px #bbbb
    margin: 1em
    position relative
    padding: 1em 0.75em

  time
    background-color: #535353
    color: #fff;
    position absolute
    right: 0
    bottom 0
    padding: 0.25em 0.5em
    padding-left: 0
    border-radius 2em 0 0 0
    text-align: right
    min-width: 10ch
</style>
