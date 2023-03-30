<script lang="ts">
  import '@splidejs/svelte-splide/css';
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import Button from './button.svelte';
  import Picture from '$lib/components/picture.svelte';

  export let items: {
    id: string;
    color: string;
    title: string;
    subtitle: string;
    description: string;
    buttons: { label: string; url: string }[];
  }[];
</script>

<div class="hero">
  <Splide
    hasTrack={false}
    aria-label="ゲーム一覧"
    options={{
      type: 'loop',
      perPage: 1,
      lazyLoad: 'nearby',
      arrows: true,
      pagination: true,
    }}
  >
    <div class="slider">
      <SplideTrack>
        {#each items as item}
          <SplideSlide>
            <div class="slide" style="--color: {item.color}">
              <div class="content">
                <h3 class="subtitle">{item.subtitle}</h3>
                <h2 class="title">{item.title}</h2>
                <div class="description">{item.description}</div>
                <div class="buttons">
                  {#each item.buttons as button}
                    <Button href={button.url} color="#0A6AFA">{button.label}</Button>
                  {/each}
                </div>
              </div>
              <Picture srcName={item.id} sizes='100vw'/>
            </div>
          </SplideSlide>
        {/each}
      </SplideTrack>
      <div class="controls">
        <div class="splide__arrows" />
        <ul class="splide__pagination" />
      </div>
    </div>
  </Splide>
</div>

<style lang="stylus">
  .slider
    position: relative;
  .controls
    position absolute
    bottom: 1.8em;
    width 100%
  .splide__pagination
    height 100%
  .slide
    aspect-ratio 2/1
    @media (max-width: 1111px)
      aspect-ratio 16/9
    @media (max-width: 650px)
      aspect-ratio 4/5
    :global(img)
      width 100%
      height 100%
      object-fit cover
  .content
    position absolute
    bottom 0
    left 0
    width 100%
    height 100%
    padding 5%
    @media (max-width: 650px)
      padding-bottom 2.5em
    box-sizing border-box
    display flex
    flex-direction column
    align-items flex-start
    justify-content flex-end
    color: #FFF
    background: radial-gradient(circle at top right, rgba(100, 100, 100, 0.1), rgba(30, 30, 30, 0.9));
    backdrop-filter: blur(1px);

  .title, .subtitle
    background: var(--color)
    margin: 0.25em 0
    display inline-block

  .title
    font-size: 3em
    @media (max-width: 1111px)
      font-size: 1.8em

  .subtitle
    font-size: 1.5em
    @media (max-width: 1111px)
      font-size: 0.9em

  .description
    width: 50%
    @media (max-width: 1111px)
      width: 80%
</style>
