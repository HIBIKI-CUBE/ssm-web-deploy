<script>
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import SwiperCore, { Controller, EffectFade, Pagination } from 'swiper';
  import { sync } from '../sync-store.js';
  import Picture from "../components/picture.svelte";
  export let contents, pairId, globalSettings, standardWidth;

  const transitionDuration = globalSettings.transitionDuration;
  let themeColor;

  SwiperCore.use([Controller, EffectFade, Pagination]);

  let controlledSwiper = null;
  addEventListener('controllee_load', e => {
    setTimeout(() => {
      controlledSwiper = e.detail == pairId ? $sync.controlledSwiper : undefined;
    });
  });

  const preloadWidth = contents.articles.map(u => {
    return globalSettings.imageSizes.find(v => v > (document.body.getBoundingClientRect().width * (standardWidth / 100) * (devicePixelRatio || 1) / 16 * 9 / u.aspectRatio.height * u.aspectRatio.width)) || globalSettings.imageSizes.slice(-1)[0];
  });
</script>

<svelte:head>
  {#each contents.articles as article, i}
    <link rel="preload" href="/img/{article.imageId}@{preloadWidth[i]}w.webp" as="image">
  {/each}
  <link rel="preload" href="/swiper-bundle.min.css" as="style">
  <link rel="stylesheet" type="text/css" href="/swiper-bundle.min.css">
</svelte:head>

<div class="slide-hero" style="--themeColor:{themeColor}">
  <img class="arrow left" src="/img/arrow.svg" alt="左のスライドへ" width='309.94' height='355.04'>
  <Swiper
    centeredSlides={true}
    spaceBetween={4}
    slidesPerView={'auto'}
    grabCursor={true}
    speed={transitionDuration}
    slideToClickedSlide={true}
    loop={true}
    pagination={{
      clickable: true,
      bulletClass: 'swiper-pagination-bullet-custom',
      bulletActiveClass: 'swiper-pagination-bullet-custom-active'
    }}
    on:swiper={e => {
      const [swiper] = e.detail;
      window.addEventListener('pictureGroup_load', e => {
        if(e.detail == 'slideHero'){
          setTimeout(() => {
            swiper.loopDestroy();
            swiper.loopCreate();
            swiper.update();
            themeColor = contents.articles[swiper.realIndex].themeColor;
          });
        }
      });
    }}
    on:realIndexChange={e => {
      const [swiper] = e.detail[0];
      themeColor = contents.articles[swiper.realIndex].themeColor;
    }}
    loopedSlides={contents.articles.length}
    controller={{ control: controlledSwiper }}
  >
    {#each contents.articles as article}
      <SwiperSlide>
        <Picture imgClass="slide-img" sizes="{standardWidth / 16 * 9 / article.aspectRatio.height * article.aspectRatio.width}vw" {contents} {globalSettings} imageId={article.imageId} width={article.aspectRatio.width} height={article.aspectRatio.height} useTiny={true} loadLazy={false} groupId="slideHero" groupImagesCount={contents.articles.length * 2}/>
      </SwiperSlide>
    {/each}
  </Swiper>
  <img class="arrow right" src="/img/arrow.svg" alt="右のスライドへ" width='309.94' height='355.04'>
</div>

<style lang="stylus">
  :global(.slide-hero .slide-img)
    width auto
    height calc(var(--standardWidth) / 16 * 9)
    vertical-align top
  :global(.slide-hero .swiper-wrapper)
    width 50%
  :global(.slide-hero .swiper-slide)
    text-align center
    width auto

  :global(.swiper-pagination-bullet-custom)
    width 1em
    height 1em
    display inline-block
    margin 0 0.333em
    border-radius 33.3%
    border 1px solid #888
    box-sizing border-box
    background-color transparent
    opacity 0.5
    transition opacity 200ms ease 0ms, transform var(--transitionDuration) ease-in-out 0ms
    transform rotate(0deg)
    &:before
      content ''
      display block
      width 100%
      height 100%
      border-radius 33.3%
      box-sizing border-box
      border 1px solid #fff
      background-color var(--themeColor)
      transition background-color 200ms ease 0ms

  :global(.swiper-pagination-bullet-custom-active)
    background-color var(--themeColor)
    border none
    transform rotate(90deg)
    opacity 1
    &:before
      border none

  .slide-hero
    position relative
    &:before, &:after
      content ''
      display block
      width calc((100vw - var(--standardWidth)) / 6)
      height 100%
      position absolute
      top 0
      z-index 2
      pointer-events none
    &:before
      left 0
      background linear-gradient(to right, #2228, transparent)
    &:after
      right 0
      background linear-gradient(to left, #2228, transparent)

    .arrow
      @media screen and (orientation: portrait)
        display none
      position absolute
      top 0
      bottom 0
      margin auto calc((100vw - var(--standardWidth)) / 6)
      z-index 3
      width calc((100vw - var(--standardWidth)) / 6)
      height auto
      pointer-events none
      animation-duration 1s
      animation-timing-function ease-in-out
      animation-fill-mode both
      animation-direction alternate
      animation-iteration-count infinite
      &.left
        left 0
        animation-name swing-left
      &.right
        right 0
        animation-name: swing-right

    @keyframes swing-left
      0%
        transform translateX(calc((100vw - var(--standardWidth)) / 48))
      100%
        transform translateX(calc(((100vw - var(--standardWidth)) / 48) * -1))

    @keyframes swing-right
      0%
        transform scaleX(-1) translateX(calc((100vw - var(--standardWidth)) / 48))
      100%
        transform scaleX(-1) translateX(calc(((100vw - var(--standardWidth)) / 48) * -1))

</style>