<script>
  import Button from "../components/button.svelte";
  import Yframe from "../components/youtube-iframe.svelte";
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import SwiperCore, { Controller, EffectFade } from 'swiper';
  import { sync } from '../sync-store.js';
  import Color from 'color';
  export let pairId, globalSettings, contents, standardWidth;
  const transitionDuration = globalSettings.transitionDuration,
        backgroundColor = contents.articles.map(v => Color(v.themeColor).lightness(95).desaturate(0.3).hex());

  SwiperCore.use([Controller, EffectFade]);

  const setControlledSwiper = e => {
      const [swiper] = e.detail;
      $sync.controlledSwiper = null
      // set Controller swiper instance
      window.addEventListener('pictureGroup_load', e => {
        if(e.detail == 'slideHero'){
          swiper.update();
          $sync.controlledSwiper = swiper;
          dispatchEvent(new CustomEvent('controllee_load', {detail: pairId}));
        }
      });
  }

  //Adobe font loading
  addEventListener('pictureGroup_load', e => {
    if(e.detail == 'slideHero'){
      (d => {
        var config = {
          kitId: 'egn6fhp',
          scriptTimeout: 3000,
          async: !0
        },
        h=d.documentElement,t=setTimeout(()=>{h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=!1,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=!0;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=!0;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document)
    }
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://p.typekit.net/">
  <link rel="preload" href="/swiper-bundle.min.css" as="style">
  <link rel="stylesheet" type="text/css" href="/swiper-bundle.min.css">
</svelte:head>

<Swiper
  allowSlideNext={false}
  allowSlidePrev={false}
  allowTouchMove={false}
  autoHeight={true}
  spaceBetween={0}
  slidesPerView={1}
  speed={transitionDuration}
  loop={true}
  loopAdditionalSlides={contents.articles.length - 1}
  effect='fade'
  fadeEffect={{crossFade: true}}
  on:swiper={setControlledSwiper}
  on:snapIndexChange={() => window.dispatchEvent(new CustomEvent('slide'))}
>
  {#each contents.articles as article, i}
    <SwiperSlide>
      <div class="slide-container" style="--backgroundColor: {backgroundColor[i]};--themeColor: {contents.articles[i].themeColor}">
        <div class="title-container">
          <div class="headline">
            <span class="subtitle">
              {#if Array.isArray(article.subtitle)}
                {#each article.subtitle as subtitle}
                  {subtitle}
                {/each}
              {:else}
                {article.subtitle}
            {/if}
            </span>
            <span class="title">
              {#if Array.isArray(article.title)}
                {#each article.title as title}
                  {title}
                {/each}
              {:else}
                {article.title}
              {/if}
            </span>
          </div>
          <div class="buttons pc">
            {#each article.buttons as button}
              {#if button.popup}
                <div class="popup {button.disabled ? 'disabled' : ''}">{button.popup}</div>
              {/if}
              <Button target={button.target} bg="#0a6afa" width="auto" disabled={button.disabled} spaMode={button.spaMode}>
                {#if Array.isArray(button.title)}
                  {#each button.title as title}
                    <span class="break-scope">{title}</span>
                  {/each}
                {:else}
                  {button.title}
                {/if}
              </Button>
            {/each}
          </div>
        </div>
        <div class="description-container">
          {#if article.slides}
            <div class="slide">
              <Swiper
                centeredSlides={true}
                autoHeight={true}
                spaceBetween={0}
                slidesPerView={1}
                speed={transitionDuration}
                updateOnImagesReady={true}
                on:snapIndexChange={() => window.dispatchEvent(new CustomEvent('slide'))}
              >
                {#each article.slides as slide}
                  <SwiperSlide>
                    {#if slide.type == "youtube"}
                      <Yframe {contents} {globalSettings} id={slide.id} sizes='@media (orientation: portrait) {standardWidth}vw, {(standardWidth * 0.975) / 2}vw'/>
                    {/if}
                  </SwiperSlide>
                {/each}
              </Swiper>
            </div>
          {/if}
          <div class="description">
            <article>
              {#if Array.isArray(article.description)}
                {#each article.description as p, i}
                  <p class={i == 0 ? 'first-line' : ''}>{p}</p>
                {/each}
              {:else}
                {article.description}
              {/if}
            </article>
            {#if article.specs}
              <div class="specs">
                {#if article.specs.times}
                  <div class="times">
                    <span class="tag">制作時期</span>
                    {#each article.specs.times as time, i}
                      <!-- svelte-ignore component-name-lowercase -->
                      <time class="break-scope" datetime="{(time.year ? ("0000"+time.year).slice(-4) : "") + (time.month ? "-" + ("00"+time.month).slice(-2) : "") + (time.day ? "-" + ("00"+time.day).slice(-2) : "")}">
                        {#if time.year}
                          {time.year}年{!(time.month || time.day) ? time.annotation : ''}
                        {/if}
                        {#if time.month}
                          {time.month}月{!time.day ? time.annotation : ''}
                        {/if}
                        {#if time.day}
                          {time.day}日{time.annotation}
                        {/if}
                      </time>
                      {i+1 != article.specs.times.length ? ', ' : ''}
                    {/each}
                  </div>
                {/if}
                {#if article.specs.platforms}
                  <div class="platforms">
                    <span class="tag">対応プラットフォーム</span>
                    {#each article.specs.platforms as platform, i}
                      <span class="break-scope">
                        {platform.name} {platform.version || ""}{platform.orLater ? "以降" : ""}{i+1 != article.specs.platforms.length ? ',' : ''}
                      </span>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}
          </div>
        </div>
        <div class="buttons mobile">
          {#each article.buttons as button}
            {#if button.popup}
              <div class="popup {button.disabled ? 'disabled' : ''}">{button.popup}</div>
            {/if}
            <Button target={button.target} bg="#0a6afa" width="calc(var(--standardWidth) * 0.45)" disabled={button.disabled} spaMode={button.spaMode}>
              {#if Array.isArray(button.title)}
                {#each button.title as title}
                  <span class="break-scope">{title}</span>
                {/each}
              {:else}
                {button.title}
              {/if}
            </Button>
          {/each}
        </div>
      </div>
    </SwiperSlide>
  {/each}
</Swiper>

<style lang="stylus">
  .slide-container
    background-color var(--backgroundColor)
    border-top solid .25em var(--themeColor)
    padding 0 calc(((100vw - var(--standardWidth)) / 2) - 2vw) 5vw
  .title-container
    display flex
    justify-content space-between
    align-items center
    background-color white
    border-radius 2vw
    margin 5vw 0 0
    filter drop-shadow(2px 2px 3px #ccc)
    padding 2vw
    font-family vdl-v7marugothic, sans-serif
    font-style normal
    font-weight 700
    @media (min-aspect-ratio: 16/9)
      font-size calc(2.5vw / 2.5)
    font-size calc(2.5vw / 2)
    @media (max-aspect-ratio: 1/1)
      font-size calc(2.5vw * 0.8)
    @media (max-aspect-ratio: 3/4)
      font-size: 2.5vw
    .headline
      display flex
      flex-direction column
      align-items flex-start
    .title
      font-size 2em
      line-height 1em
      margin 0.25em 0
    .subtitle
      font-size 1.5em
      line-height 1em
      margin 0.25em 0
      position relative
      &:before
        content ''
        display block
        position absolute
        bottom 0
        left 0
        width 100%
        height calc(100% / 3)
        background-color var(--themeColor)
        opacity 0.5
        mix-blend-mode multiply
    .buttons
      display flex
      font-size 1.2em
      @media screen and (orientation: portrait)
        display none
      white-space nowrap
      flex-direction column
      justify-content center
      align-items center
      .popup
        --themeColor #0a6afa
        font-size 0.75em
        font-weight 300
        white-space nowrap
        color var(--themeColor)
        &.disabled
          --themeColor #aaa
        &:before, &:after
          content ''
          display block
          width 1px
          height 50%
          position absolute
          top 0
          bottom 0
          margin auto
          background-color var(--themeColor)
          border-radius 0.5px
        &:before
          left -1ch
          transform rotate(-30deg)
        &:after
          right -1ch
          transform rotate(30deg)
  :glovbal(.description-container .swiper-wrapper)
    height auto !important
  :global(.description-container .swiper-slide)
    width 100% !important
  .description-container
    display flex
    @media screen and (orientation: portrait)
      display block
    justify-content space-between
    align-items flex-start
    margin 2vw
    .slide
      flex-basis 100%
      box-sizing border-box
      margin-right calc(var(--standardWidth) * 0.025)
      @media screen and (orientation: portrait)
        margin 0
    .specs
      font-family vdl-v7marugothic, sans-serif
      font-style normal
      font-size calc(1em * 14 / 16)
      font-weight 500
      &>*
        margin 0.75em 0
      .tag
        box-sizing border-box
        border solid 1px #d0d0d0
        border-radius .7vw
        padding .25em 1.5ch
        line-height 1em
        background-color white
        display inline-block
        font-weight 700
    .description
      flex-basis 100%
      p
        margin 0
        line-height 1.5em
        &.first-line
          line-height normal
          margin 0.8em 0
          font-size calc(1em * (18 / 14))
          font-family vdl-v7marugothic, sans-serif
          font-style normal
          font-weight 700
  .buttons
    display flex
    font-size 1.2em
    @media screen and (orientation: landscape)
      display none
    white-space nowrap
    flex-direction column
    justify-content center
    align-items center
    --themeColor #0a6afa
    .popup
      font-size 0.75em
      font-weight 300
      white-space nowrap
      position relative
      color var(--themeColor)
      &.disabled
        --themeColor #aaa
      &:before, &:after
        content ''
        display block
        width 1px
        height 50%
        position absolute
        top 0
        bottom 0
        margin auto
        background-color var(--themeColor)
        border-radius 0.5px
      &:before
        left -1ch
        transform rotate(-30deg)
      &:after
        right -1ch
        transform rotate(30deg)
</style>