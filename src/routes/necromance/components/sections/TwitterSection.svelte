<script>
  import Button from '../Button.svelte';
  import Section from '../Section.svelte';
</script>

<svelte:head>
  <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<Section>
  <div class="twitter-section">
    <div class="content">
      <p class="twitter-section__followText">Twitterもフォローしてね！</p>
      <div class="twitter-section__widget">
        <a
          class="twitter-timeline"
          data-width="400"
          data-height="533"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/necromance_chan?ref_src=twsrc%5Etfw"
          >Tweets by necromance_chan</a
        >
      </div>
      <div style="margin-top: 60px;">
        <Button variant="twitter" href="https://twitter.com/necromance_chan">
          Twitter をフォローする
        </Button>
      </div>
    </div>
  </div>
</Section>

<style lang="stylus">

@import '../../styles/_layouts.styl'

.twitter-section
  text-align center

  :global(.twitter-timeline)
    margin 0 auto

  &__followText
    font-size 1.5em
    font-weight bold
    color #fff
    margin-bottom 2em
</style>
