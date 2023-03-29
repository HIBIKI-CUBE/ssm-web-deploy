<script>
  import Section from '../Section.svelte';
</script>

<Section>
  <div class="movie-section">
    <div class="content">
      <div class="movie-section__video-wrapper">
        <iframe
          class="movie-section__iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jLoTKRXC-X0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</Section>

<style lang="stylus">
  @import '../../styles/_layouts.styl'

  .movie-section
    &__video-wrapper
      // thanks https://qiita.com/ryounagaoka/items/a98f59347ed758743b8d
      // thanks https://qiita.com/0084ken/items/e7d35d2a8eb507f4d59c
      position: relative
      width: 80%
      height: 0
      padding-bottom: 45%
      //overflow: hidden
      margin: calc(2.5em + 4px) auto 0 auto

      &::before
        content: ""
        position: absolute
        top: -10px
        left: -10px
        right: -10px
        bottom: -10px
        border-radius: 20px
        z-index: -1
        background-color: #f2b807
        @media only screen and (max-width: 630px)
          top: -5px
          left: -5px
          right: -5px
          bottom: -5px
          border-radius: 10px

      &::after
        content: "SPECIAL MOVIE"
        position: absolute
        top: -1.3em
        right: 20px
        font-size: 2.5em
        font-family: "buena-park-jf", serif
        color: #f2b807
        text-shadow: 4px 0px 0px #241938
        z-index: -2
        @media only screen and (max-width: 630px)
          right: 10px
          font-size: 1.5em

    &__iframe
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      border-radius: 20px
      @media only screen and (max-width: 630px)
        border-radius: 10px
</style>
