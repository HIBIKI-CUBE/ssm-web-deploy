<script lang="ts">
  import Container from './container.svelte';
  import Card from './card.svelte';
  import Line from '$lib/components/line.svelte';

  const members = [
    {
      name: 'マチコー',
      imgId: 'machiko',
      positions: ['リーダー', 'プランナー'],
      accounts: {
        twitter: 'https://twitter.com/MachiCollider',
        note: 'https://note.com/machikou_mk2',
        qiita: 'https://qiita.com/Machikof',
      },
      color: '#E03D16',
    },
    {
      name: 'いーだ',
      imgId: 'i-da',
      positions: ['プログラマー', 'マスタリングエンジニア'],
      accounts: {
        twitter: 'https://twitter.com/GoodPaddyField5',
        note: 'https://note.com/203_',
      },
      color: '#57E827',
    },
    {
      name: 'Amu',
      imgId: 'amu',
      positions: ['UI/ロゴデザイナー', 'エフェクトクリエーター'],
      accounts: {
        twitter: 'https://twitter.com/Amu_dsgn',
      },
      color: '#E84327',
    },
    {
      name: 'HIBIKI CUBE',
      imgId: 'hibiki',
      positions: ['Webエンジニア', 'CGモデラー'],
      accounts: {
        twitter: 'https://twitter.com/hibiki_cube',
        github: 'https://github.com/HIBIKI-CUBE',
        qiita: 'https://qiita.com/HIBIKI-CUBE',
      },
      color: '#01ACE7',
    },
    {
      name: 'Matsu',
      imgId: '',
      positions: ['プログラマー', 'レベルデザイナー'],
      accounts: {
        twitter: 'https://twitter.com/sake_unity_stu',
        github: 'https://github.com/AtaruMatsudaira',
      },
      color: '#E82727',
    },
    {
      name: 'ナミー',
      imgId: '',
      positions: ['デバッガー'],
      accounts: {
        twitter: 'https://twitter.com/fi_matsu',
      },
      color: '#6E27E8',
    },
    {
      name: 'えちょ',
      imgId: 'echo',
      positions: ['レベルデザイナー'],
      accounts: {
        twitter: 'https://twitter.com/ysXKPSlvMZqVtIW',
      },
      color: '#000000',
    },
    {
      name: '十二月ねこ',
      imgId: '',
      positions: ['CGモデラー'],
      accounts: {
        twitter: 'https://twitter.com/Subamaru_7',
      },
      color: '#E82781',
    },
    {
      name: 'かずえもん',
      imgId: 'kazuemon',
      positions: ['Webデザイナー'],
      accounts: {
        twitter: 'https://k6n.jp/tw',
        youtube: 'https:/k6n.jp/yt',
        github: 'https://k6n.jp/gh',
      },
      color: '#E8A127',
    },
    {
      name: 'NEO',
      imgId: 'neo',
      positions: ['エフェクト', 'サウンドデザイン'],
      accounts: {
        twitter: 'https://twitter.com/neo_97m',
        note: 'https://github.com/NEON1212121',
      },
      color: '#7DE8BD',
    },
    {
      name: 'すぎのこ',
      imgId: '',
      positions: ['3Dモデラー'],
      accounts: {
        twitter: 'https://twitter.com/ucSzlqTS3y78lIN',
      },
      color: '#145866',
    },
  ];

  let showAllMembers = false;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</svelte:head>

<Container title="ABOUT" subtitle="チーム紹介" themeColor="#f00">
  <div class="headline">
    <Line class="colored" string="テクノロジー と エンタメ の 融合" />
    <Line string="を目指す" />
  </div>
  <Line
    string="私たち スーパースターマイン は、 大学サークル発、 新進気鋭の ゲーム制作 チームです。"
  />

  <div class="cards">
    {#each showAllMembers ? members : members.slice(0, 3) as member, i}
      <Card {...member} index={i - 3} />
    {/each}
  </div>

  <div class="showMore">
    <button on:click={() => (showAllMembers = !showAllMembers)}>
      <span class="material-symbols-outlined">
        {`keyboard_double_arrow_${showAllMembers ? 'up' : 'down'}`}
      </span>
      {showAllMembers ? 'メインメンバーのみ表示' : 'メンバーを全員表示'}
    </button>
  </div>
</Container>

<style lang="stylus">
  .headline
    font-size 2em
    font-weight bold
    margin-block 0.5em
    :global(.colored)
      background-color: #f00
      color: #fff
    :global(p)
      margin 0
      display inline

  .cards
    margin-top 3em
    display flex
    flex-wrap wrap
    justify-content space-between

  .showMore
    display: flex
    justify-content: center
    padding: 2em
    button
      font-size 1em
      background-color transparent
      border none
      text-decoration underline
    .material-symbols-outlined
      font-size 1em
      vertical-align: text-top
      font-variation-settings:
      'FILL' 0,
      'wght' 500,
      'GRAD' 0,
      'opsz' 48
</style>
