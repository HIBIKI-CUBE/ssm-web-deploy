<script>
  import '@splidejs/svelte-splide/css';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import Button from '$lib/components/magic-button.svelte';
  import Footer from '$lib/components/footer.svelte';
  import Yframe from '$lib/components/youtube-iframe.svelte';
  import Picture from '$lib/components/picture.svelte';
  import { onMount } from 'svelte';

  let loadTwitterWidget = false,
    scroll = 0,
    height = 0;

  onMount(() => {
    ((d) => {
      let config = {
          kitId: 'egn6fhp',
          scriptTimeout: 3000,
          async: !0,
        },
        h = d.documentElement,
        t = setTimeout(() => {
          h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
        }, config.scriptTimeout),
        tk = d.createElement('script'),
        f = !1,
        s = d.getElementsByTagName('script')[0],
        a;
      h.className += ' wf-loading';
      tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
      tk.async = !0;
      tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a !== 'complete' && a !== 'loaded')) return;
        f = !0;
        clearTimeout(t);
        try {
          Typekit.load(config);
        } catch (e) {}
      };
      s.parentNode.insertBefore(tk, s);
    })(document);

    const twitterObserver = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting && !loadTwitterWidget) {
          loadTwitterWidget = true;
          twitterObserver.unobserve(document.querySelector('.twitter-timeline'));
        }
      },
      {
        rootMargin: '50%',
      }
    );
    twitterObserver.observe(document.querySelector('.twitter-timeline'));
  });
</script>

<svelte:head>
  <title>マジカオス - スーパースターマイン</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link rel="preconnect" href="https://p.typekit.net/" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="https://use.typekit.net/lkm8uks.css" />
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<img src="/img/magic-bg.png" alt="" class="background" />
<img src="/img/ssm-logo-landscape-white.svg" alt="" class="header_logo_magic" />
<svelte:window bind:scrollY={scroll} bind:innerHeight={height} />
<div
  class="wrapper"
  style="-webkit-backdrop-filter:
  blur({Math.max(Math.min(10 * ((scroll - height / 2) / (height / 4)), 10), 0)}px)
  brightness({1 - Math.max(Math.min(0.2 * ((scroll - height / 2) / (height / 4)), 0.2), 0)});
  backdrop-filter:
    blur({Math.max(Math.min(10 * ((scroll - height / 2) / (height / 4)), 10), 0)}px)
    brightness({1 - Math.max(Math.min(0.2 * ((scroll - height / 2) / (height / 4)), 0.2), 0)});"
>
  <div class="hero">
    <div class="logo-bg" />
    <div class="characters">
      <img src="/img/magic-c3.png" alt="" class="c3 character" />
      <img src="/img/magic-c4.png" alt="" class="c4 character" />
      <img src="/img/magic-c1.png" alt="" class="c1 character" />
      <img src="/img/magic-c2.png" alt="" class="c2 character" />
      <img src="/img/magic-logo.png" alt="" class="logo" />
    </div>
  </div>

  <div class="dim">
    <section class="dim2">
      <h1>
        魔法少女<wbr />たちが<wbr />弾幕で<wbr />バチボコ！<br />
        マジで<wbr />カオスな<wbr />パーティに<wbr />飛び込め！
      </h1>
    </section>

    <section class="youtube">
      <h2>MOVIE</h2>
      <div class="youtube-wrapper">
        <Yframe id="MN_xMaBgJiM" sizes="60vw" />
      </div>
    </section>

    <section class="splide">
      <h2>SCREENSHOTS</h2>
      <Splide
        aria-label="スクリーンショット"
        options={{
          type: 'loop',
          focus: 'center',
          padding: '20vw',
          breakpoints: {
            900: {
              padding: '10vw',
            },
          },
          gap: '5vw',
          autoHeight: true,
          lazyLoad: 'nearby',
          // autoWidth: true,
        }}
      >
        <SplideSlide>
          <Picture imgClass="slide" srcName="magic_ss1" sizes="(max-width:900px) 80vw, 60vw" width=16 height=9/>
        </SplideSlide>
        <SplideSlide>
          <Picture imgClass="slide" srcName="magic_ss2" sizes="(max-width:900px) 80vw, 60vw" width=16 height=9 />
        </SplideSlide>
        <SplideSlide>
          <Picture imgClass="slide" srcName="magic_ss3" sizes="(max-width:900px) 80vw, 60vw" width=16 height=9 />
        </SplideSlide>
        <SplideSlide>
          <Picture imgClass="slide" srcName="magic_ss4" sizes="(max-width:900px) 80vw, 60vw" width=16 height=9 />
        </SplideSlide>
        <SplideSlide>
          <Picture imgClass="slide" srcName="magic_ss5" sizes="(max-width:900px) 80vw, 60vw" width=16 height=9 />
        </SplideSlide>
        <SplideSlide>
          <Picture imgClass="slide" srcName="magic_ss6" sizes="(max-width:900px) 80vw, 60vw" width=16 height=9 />
        </SplideSlide>
      </Splide>
      <p>※画面は開発中のものです。</p>
    </section>
    <section>
      <h2>STEAM</h2>
      <p>今すぐウィッシュリストへ追加しよう！</p>
      <Button href="https://store.steampowered.com/app/1785220/__MAGIC_CHAOS/">STEAMページへ</Button
      >
    </section>
    <section class="discord dim2">
      <h2>DISCORD</h2>
      <p>公式Discordで、ゲーム制作や交流を一緒に楽しもう！</p>
      <Button href="https://discord.gg/cmgUJUuKzv">
        <svg width="27" height="21" viewBox="0 0 27 21" xmlns="http://www.w3.org/2000/svg">
          <use xlink:href="/img/discord.svg#shape" />
        </svg> Discordに参加
      </Button>
    </section>
    <section class="twitter">
      <a
        class="twitter-timeline"
        data-width="400"
        data-height="600"
        data-theme="light"
        href="https://twitter.com/magicchaos_ssm"
        >ゲーム『れーぞく！ネクロマンスちゃん』公式アカウントのツイート</a
      >
      {#if loadTwitterWidget}
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      {/if}
    </section>

    <div class="bottom-stick">
      <a class="steam" href="https://store.steampowered.com/app/1785220/__MAGIC_CHAOS/">
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <use xlink:href="/img/steam.svg#shape" />
        </svg>
        <div class="theme">Steam</div>
      </a>
      <a class="discord" href="https://discord.gg/cmgUJUuKzv">
        <svg
          width="27"
          height="21"
          viewBox="0 0 27 21"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <use xlink:href="/img/discord.svg#shape" />
        </svg>
        <div class="theme">Discord</div>
      </a>
    </div>
  </div>
</div>
<Footer />

<style lang="stylus">

  :global(html,body)
    width: 100%
    height: 100%
    margin: 0

  .logo-bg
    background: #0009
    aspect-ratio: 1572.13 / 600.41
    height: 3em
    padding: 1em
    border-radius: 0 0 1em 0
    position: sticky
    top: 0
    bottom: 0
    z-index: 9000

  .header_logo_magic
    position: fixed
    margin: 1em
    height: 3em
    background-color #fff0
    cursor pointer
    z-index: 10000

  .wrapper
    text-align: right

  .background
    width: 100%
    height: 100%
    height: 100lvh
    position: fixed
    object-fit: cover
    z-index: -1

  .hero
    .characters
      position: relative
      top: -5em
      height: 100vh
      height: 100svh
      width: 100%
      overflow: hidden
    img
      position: absolute
    .character
      height: 80vh
      height: 80svh
      bottom 10vh
      bottom 10svh
      &.c1
        left 10vw
        filter: drop-shadow(5px 2px 0 #41FC94)
      &.c2
        left 30vw
        filter: drop-shadow(5px 2px 0 #F933FE)
      &.c3
        right 30vw
        filter: drop-shadow(-5px 2px 0 #46FDFF)
      &.c4
        right 10vw
        filter: drop-shadow(-5px 2px 0 #F82B8B)
      @media screen and (max-aspect-ratio: 1160 / 860)
        &.c1
          left 0
          bottom 5vh
          bottom 5svh
        &.c2
          left 30vw
          bottom 0
        &.c3
          right 30vw
          top 0
        &.c4
          right 0
          top 5vh
          top 5svh
    .logo
      max-width: 70vw
      max-height: 40vh
      left: 0
      right: 0;
      margin auto
      bottom: 3vw

  .bottom-stick
    z-index: 9000
    position: sticky
    display: flex
    padding: 1vw
    bottom: 0
    justify-content: flex-end
    @media screen and (max-aspect-ratio: 1/1)
      flex-direction: column

    a
      width auto
      display: inline-flex
      color white
      font-size: 1.5em
      align-items: center
      border-radius: 100vw
      padding: 1% 2%
      margin 0.5vw
      background: #000
      align-self: flex-end
      text-decoration: none
      svg
        margin-right 1ch
        height 1.2em
        width auto
      &.discord
        background: #5162F8
      &.steam
        background linear-gradient(180deg, #111d2e 0%, #051839 21.2%, #0a1b48 40.7%, #132e62 58.1%, #144b7e 73.8%, #136497 87.3%, #1387b8 100%);


  .theme, h1, h2
    font-family vdl-v7gothic, sans-serif
    font-weight 900

  section
    padding: 11vw 0 11vw
    text-align: center
    font-family: m-plus-2p, sans-serif
    font-weight: 400
    font-size: 1.5em
    color: #fff
    text-shadow: 0 0 4px #0008

  h1
    text-align: center
    font-size: 5.5vw
    color: #fff
    text-shadow:  1px 1px 0 #282828,
                  -1px 1px 0 #282828,
                  1px -1px 0 #282828,
                  -1px -1px 0 #282828,
                  calc(1em / 24) calc(1em / 24) 0 #000,
                  calc(1em / 12) calc(1em / 12) 0 #FF00FF

  h2
    text-align: center
    line-height: 2
    font-size: 1.5em
    color: #FF00FF
    text-shadow:  3px 3px 0 #282828,
                  -3px 3px 0 #282828,
                  3px -3px 0 #282828,
                  -3px -3px 0 #282828,
                  -3px calc(2em / 16) 0 #282828,
                  0px calc(2em / 16) 0 #282828,
                  3px calc(2em / 16) 0 #282828

  .youtube
    width: 60%
    margin: 0 auto

  .youtube-wrapper
    border: 1vw solid #fff

  .splide
    :global(.slide)
      width: 100%
      height: auto
    p
      visibility: visible

  .twitter
    display:flex
    justify-content: center
</style>
