<script lang="ts">
  export let title = '',
    subtitle = '',
    themeColor = '#000';
</script>

<div class="container">
  <div class="title" style="border-color: {themeColor}">
    <h1>{title}</h1>
    <span class="subtitle">{subtitle}</span>
  </div>
  <slot />
</div>

<style lang="stylus">
  .container
    margin-block: 5em
  h1
    margin 0 0.5ch

  .title
    margin-block: 1.5em
    border-left: 1ch solid
    padding-block: 0.25em
    display: flex
    align-items: flex-end
</style>
