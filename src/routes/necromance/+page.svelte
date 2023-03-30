<script>
  import Nav from './components/Nav.svelte';
  import Line from './components/Line.svelte';
  import HeroSection from './components/sections/HeroSection.svelte';
  import MovieSection from './components/sections/MovieSection.svelte';
  import NewsSection from './components/sections/NewsSection.svelte';
  import WorldSection from './components/sections/WorldSection.svelte';
  import CharactersSection from './components/sections/CharactersSection.svelte';
  import SystemSection from './components/sections/SystemSection.svelte';
  import DiscordSection from './components/sections/DiscordSection.svelte';
  import TwitterSection from './components/sections/TwitterSection.svelte';
  import ShareSection from './components/sections/ShareSection.svelte';
  import Footer from './components/Footer.svelte';

  const meta = {
    lang: 'ja',
    title: 'れーぞく！ネクロマンスちゃん - SUPER STARMINE',
    url: 'https://superstarmine.com/necromance',
    description:
      '「セカイを”れーぞく”せよ！」──最凶の魔女ネクロマンスとともに魔女伝説の謎を解き明かすべく戦う、全方位シューティングゲーム「れーぞく！ネクロマンスちゃん」の公式サイトです。',
    image: 'https://next.superstarmine.com/necromance_ogp.png',
    canonical: 'https://superstarmine.com/necromance',
  };
</script>

<svelte:head>
  <title>{meta.title}</title>
  <link rel="stylesheet" href="https://use.typekit.net/lkm8uks.css" />
  <meta property="og:title" content={meta.title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={meta.url} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:site_name" content="SUPER STARMINE" />
  <meta property="og:image" content={meta.image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@necromance_chan" />
</svelte:head>

<div class="necromance-wrapper">
  <Nav />
  <HeroSection />
  <main class="main">
    <MovieSection />
    <NewsSection />
    <WorldSection />
    <CharactersSection />
    <SystemSection />
    <DiscordSection />
    <TwitterSection />
  </main>
  <ShareSection />
  <Footer />
</div>

<style lang="stylus">
  @import './styles/_break.styl'
  @import './styles/_layouts.styl'
  @import './styles/_typography.styl'

  .necromance-wrapper
    width: 100%;
    font-size: 16px;
    +sm() {
      font-size: 14px;
    }
    color: #333;
    background: url('./img/20210827_bg.png'), #56449a;
    background-repeat: repeat;
    font-family: 'Noto Sans JP', sans-serif;
    position: absolute
    z-index: 0
  /*** The new CSS Reset - version 1.0.0 (last updated 8.7.2021) ***/

  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  :global(.necromance-wrapper *:where(:not(iframe, canvas, img, svg, video):not(svg *)))
    all unset
    display revert

  /* Preferred box-sizing value */
  :global(.necromance-wrapper *, .necromance-wrapper *::before, .necromance-wrapper *::after)
    box-sizing border-box

  /* Remove list styles (bullets/numbers) */
  :global(.necromance-wrapper ol,.wrapper.necromance-wrapper ul)
    list-style none

  /* For images to not be able to exceed their container */
  :global(.necromance-wrapper img)
    max-width 100%

  /* removes spacing between cells in tables */
  :global(.necromance-wrapper table)
    border-collapse collapse
</style>
