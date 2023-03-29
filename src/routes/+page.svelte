<script lang="ts">
  import type { PageData } from './$types';
  import NavHeader from '$lib/components/nav-header.svelte';
  import SlideHero from './slide-hero.svelte';
  import About from './about.svelte';
  import Contact from './contact.svelte';
  import News from './news.svelte';
  import Footer from '$lib/components/footer.svelte';

  export let data: PageData;
</script>

<NavHeader
  targets={[
    { label: '作品', id: '#works' },
    { label: 'ニュース', id: '#news' },
    { label: 'チーム', id: '#about' },
    { label: '連絡先', id: '#contact' },
  ]}
/>

<SlideHero
  items={[
    {
      id: 'magicchaos',
      color: '#FF00FD',
      title: 'マジカオス',
      subtitle: '対戦弾幕アクション',
      description:
        '魔法少女が闘う最大4人対戦の弾幕アクション。キャラと弾幕を組み合わせて戦略を練り、全員まるごとブッ倒せ！',
      buttons: [{ label: 'ティザーサイトへ', url: '/magicchaos' }],
    },
    {
      id: 'foh7rj5YI_E',
      color: '#F7931F',
      title: 'れーぞく！ネクロマンスちゃん',
      subtitle: 'れーぞく全方位シューティングゲーム',
      description:
        'スーパースターマイン第一作目のSTG。敵弾をスレスレでかわすことで強大な必殺技をブッ放せる『れーぞくシステム』を搭載。リスクとリターンの取捨選択に手に汗握る、白熱したバトルを楽しめる。',
      buttons: [{ label: 'ティザーサイトへ', url: '/necromance' }],
    },
    {
      id: 'spinner_ss',
      color: '#464646',
      title: 'SPINNER',
      subtitle: '新感覚ホッケーアクションゲーム',
      description:
        'ハンドルコントローラーを用いて戦う1vs1のホッケーゲーム。ゴールがなく、パックが端のラインを超えると対となるラインにワープするという仕様が特徴。',
      buttons: [
        {
          label: '紹介記事を読む',
          url: 'https://game.creators-guild.com/g4c/%e3%82%b2%e3%83%bc%e3%83%a0%e6%a5%ad%e7%95%8c%e4%ba%a4%e6%b5%81%e4%bc%9a%e3%81%ab%e6%bd%9c%e5%85%a5%ef%bc%81/',
        },
      ],
    },
    {
      id: 'cup-run_ss',
      color: '#b56c4e',
      title: 'CUPRUNMEN',
      subtitle: 'VRMタイムアタックランゲーム',
      description:
        '初となるフルリモート体制で制作したランゲーム。技術的にユニークな点として、「プレイヤーの向きとステージの法線ベクトルから溢れるスープ量を算出する」という処理を行っている。',
      buttons: [{ label: 'unityroomで遊ぶ', url: 'https://unityroom.com/games/cuprunmen' }],
    },
    {
      id: 'fall_in_parfait-ss1',
      color: '#4ae0ef',
      title: 'フォーリンパフェ',
      subtitle: 'パフェ積みアクションゲーム',
      description:
        '2020年8月に開催されたUnity1Weekで制作したゲーム。『上から落ちてくる材料を器でキャッチしてパフェを作る』というシンプルな操作性ながら、パフェを大きくなるにつれて爆弾に当たりやすくなる、オンラインランキングの実装といった工夫により、上級者にとってもやり込みがいのあるゲームとなった。',
      buttons: [{ label: 'unityroomで遊ぶ', url: 'https://unityroom.com/games/fallinparfait' }],
    },
    {
      id: 'bakugai-img',
      color: '#da3c26',
      title: '爆買いマーケット',
      subtitle: '爆買いアクションランゲーム',
      description:
        'フォーリンパフェに続く、Unity1Week二作目。ショッピングカートに搭乗してスーパーマーケットを爆走し、床の商品を拾ったり商品棚や他のプレイヤーを攻撃することでスコアを稼ぐ。',
      buttons: [{ label: 'unityroomで遊ぶ', url: 'https://unityroom.com/games/bakugaimarket' }],
    },
    // {
    //   id: 'necromance',
    //   color: '#F7931F',
    //   title: data.dictionary['games.necromance.title']['ja'],
    //   subtitle: data.dictionary['games.necromance.subtitle']['ja'],
    //   description: data.dictionary['games.necromance.description']['ja'],
    //   buttons: [
    //     {
    //       label: data.dictionary['games.necromance.link-label']['ja'],
    //       url: data.dictionary['games.necromance.link']['ja'],
    //     },
    //   ],
    // },
    // {
    //   id: 'necromance',
    //   color: '#F7931F',
    //   title: 'れーぞく！ネクロマンスちゃん',
    //   subtitle: 'れーぞく全方位シューティングゲーム',
    //   description: '説明文ここに',
    //   buttons: [{ label: 'ティザーサイトへ', url: '#' }],
    // },
  ]}
/>

<main>
  <News {data} />

  <About />

  <Contact />
</main>

<Footer />

<style lang="stylus">
  main
    margin: 0 auto
    width 1000px
    overflow-x hidden

    @media (max-width: 1111.11px)
      width 90%
  :global(body)
    background-color: #e5e5e5
</style>
