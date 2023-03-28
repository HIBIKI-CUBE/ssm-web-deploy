<script>
  /** 半角スペースで分割した文字列 */
  export let string = '';
</script>

<p class={$$props.class}>
  {#each string.split(' ') as chunk}
    <span>{chunk}</span>
  {/each}
</p>

<style lang="stylus">
  span
    display: inline-block
</style>
