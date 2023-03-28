<script>
  import Button from "./button.svelte";
  import Picture from "./picture.svelte";
  export let
    contents,
    globalSettings,
    standardWidth,
    article = contents.article,
    // buttonsLayout = contents.bottomButtonsLayout,
    buttons = contents.bottomButtons;
</script>

<div class="container">
  <Picture pictureClass="static-picture" imgClass="static-img" {contents} {globalSettings} imageId={contents.imageId} width={contents.aspectRatio.width} height={contents.aspectRatio.height} style="width:100%"/>
  <div class="spacer"></div>
  <section class="right-column">
    <section class="text">
      {#each article as article}
        <p>{article}</p>
      {/each}
    </section>
    <section class="buttons">
      {#each buttons as button}
        <Button target="{button.target}">
          {#if Array.isArray(button.title)}
            {#each button.title as title}
              <span class="break-scope">{title}</span>
            {/each}
          {:else}
            {button.title}
          {/if}
        </Button>
      {/each}
    </section>
  </section>
</div>

<style lang="stylus">
.container
  display: flex
  align-items: center
  justify-content: space-between
  @media screen and (orientation: portrait)
    flex-flow column

:global(.static-img)
  background-color #fff
  width 100%
  padding 2em
  box-sizing border-box
  height auto
  position relative

:global(.static-picture)
  position relative
  &:before
    content ''
    display block
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    background linear-gradient(to bottom left, #f73f23, #f78323, #f7a723)
    -webkit-filter blur(15px)
    -moz-filter blur(15px)
    filter blur(15px)

.spacer
  flex 0 0 5%
  @media screen and (orientation: portrait)
    display none

.right-column
  flex 0 0 60%
  @media screen and (orientation: portrait)
    flex 0 0 100%

.text
  margin-bottom: 1em
  @media screen and (orientation: portrait)
    margin 1em 0
  p
    margin: 0

.buttons
  display: flex
  width: 100%
  justify-content space-around
</style>