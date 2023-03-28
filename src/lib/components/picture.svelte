<script lang="ts">
  export let target = '',
    title = '',
    alt = '',
    imageTypes = ['webp', 'png'],
    sizes = '',
    sizeSet = [2000, 1750, 1500, 1250, 1000, 750, 500, 250],
    fallbackSize = 1000,
    directory = '/img/',
    srcName = '',
    loadLazy = true,
    imgClass = '',
    imgId = '',
    width = '100px',
    height = '100px';

  function generateSrcset(imageType: string) {
    return sizeSet.map((v) => `${directory}${srcName}@${v}w.${imageType} ${v}w`).join(', ');
  }
</script>

<picture data-target={target} class={$$props.class} {title}>
  {#each imageTypes as imageType}
    <source type="image/{imageType}" {sizes} srcset={generateSrcset(imageType)} />
  {/each}
  <img
    id={imgId}
    class={imgClass}
    src="{directory}{srcName}@{fallbackSize}w.{imageTypes.slice(-1)[0]}"
    {alt}
    loading={loadLazy ? 'lazy' : 'eager'}
    {width}
    {height}
  />
</picture>

<style lang="stylus">
  img
    vertical-align: bottom
</style>
