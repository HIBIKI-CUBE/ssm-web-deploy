<script>
  import Nav from './components/Nav.svelte';
  import Line from './components/Line.svelte';
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
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<Nav />
