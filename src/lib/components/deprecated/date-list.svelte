<script>
  export let contents;
</script>

<ul>
  {#each contents.articles as article}
    <li class="entry">
      <a href={article.url}>
        <!-- svelte-ignore component-name-lowercase -->
        <time class="date" datetime="{(article.date.year ? ("0000"+article.date.year).slice(-4) : "") + (article.date.month ? "-" + ("00"+article.date.month).slice(-2) : "") + (article.date.day ? "-" + ("00"+article.date.day).slice(-2) : "")}">
          {(article.date.year ? ("0000"+article.date.year).slice(-4) : "") + (article.date.month ? "/" + ("00"+article.date.month).slice(-2) : "") + (article.date.day ? "/" + ("00"+article.date.day).slice(-2) : "")}
        </time>
        <div class="title-container">
          {#if Array.isArray(article.title)}
            {#each article.title as title}
              <span class="break-scope">{title}</span>
            {/each}
          {:else}
            <span>{article.title}</span>
          {/if}
        </div>
      </a>
    </li>
  {/each}
</ul>


<style lang="stylus">
  ul
    padding 0

  .entry
    background-color white
    filter drop-shadow(2px 2px 3px #ccc)
    list-style none
    position relative
    transition filter 200ms ease-out 0ms
    filter none
    &:not(:last-child)
      margin-bottom 0.5em
    &:hover
      filter brightness(0.9)

  a
    display flex
    align-items stretch
    height 100%
    flex-basis 100%
    text-decoration underline
    color black
    font-weight 500

  .title-container
    padding 2ch
    margin-right calc(9ch + 1em + 2em)
    @media (max-aspect-ratio: 1/1)
      margin-right 0
      margin-bottom 2em

  time
    position absolute
    right 0
    bottom 0
    padding 0.5em 1em 0.5em 2em
    color white
    background-color var(--themeColor)
    border-radius 2em 0 0 0
    line-height 1em
    // display flex
    // align-items center
    // justify-content center
    // color white
    // background-color #505050
    // line-height 100%
    // flex 0 0 10ch
    // position relative
    // &:after
    //   content ''
    //   display block
    //   height 100%
    //   border-right dotted 1px #a7a7a7
    //   position absolute
    //   top 0
    //   right 2px
</style>