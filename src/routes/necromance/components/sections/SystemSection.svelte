<script>
  import System01 from '../../img/system_01.png';
  import System02 from '../../img/system_02.png';
  import System03 from '../../img/system_03.png';
  import Heading from '../Heading.svelte';
  import Section from '../Section.svelte';
</script>

<Section>
  <div class="system-section">
    <div class="content">
      <Heading title="SYSTEM" subtitle="ゲームシステム" align="center" />
      <br />
      <img src={System01} width="500px" alt="ゲームシステム説明イラスト01" />
      <p class="system-section__text">敵弾をスレスレで避けて“れーぞく”！</p>
      <img src={System02} width="500px" alt="ゲームシステム説明イラスト02" />
      <p class="system-section__text">スキルを発動してステージを攻略しよう！</p>
      <img src={System03} width="500px" alt="ゲームシステム説明イラスト03" />
      <p class="system-section__text">ステージの最後には凶悪な魔物が！</p>
    </div>
  </div>
</Section>

<style lang="stylus">

@import '../../styles/_layouts.styl'

.system-section {
  text-align: center;

  &__text {
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    margin: 2em 0;
  }
}
</style>
