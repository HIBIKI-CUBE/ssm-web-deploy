<script>
  import Color from 'color';
  export let title, subtitle, themeColor, id;
  $: backgroundColor = Color(themeColor).lightness(96);
  $: textColor = Color(themeColor).luminosity() > 0.7 ? '#000' : '#fff';
</script>

<style lang="stylus">
  section
    background-color var(--backgroundColor)
    width 100%
    margin 0
    border-bottom solid 1px white
    transition background-color var(--transitionDuration) ease-in-out 0s
    h2, h3
      margin 0
      height 100%
      line-height 100%
      color var(--textColor)
    h3
      margin-left 1ch
    .title-bar
      background linear-gradient(var(--themeColor) 75%, var(--backgroundColor))
      display flex
      flex-wrap wrap
      align-items center
      width 100%
      height 100%
      box-sizing border-box
      padding 0 5vw 0
    .padding
      padding 3vw calc((100vw - var(--standardWidth)) / 2)
</style>

<section id={id} style="--themeColor: {themeColor}; --backgroundColor: {backgroundColor}; --textColor: {textColor}">
  <div class="title-bar">
    {#if title}
      <h2>{title}</h2>
    {/if}
    {#if subtitle}
      <h3>{subtitle}</h3>
    {/if}
  </div>
  <div class="padding">
    <slot></slot>
  </div>
</section>