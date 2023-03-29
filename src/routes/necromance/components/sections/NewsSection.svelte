<script>
  import Heading from '../Heading.svelte';
  import Section from '../Section.svelte';
</script>

<Section yPadding={false}>
  <div class="news-section">
    <div class="content">
      <Heading title="News" subtitle="ニュース" />
      <ul class="news-section__list">
        <li class="news-item">
          <time class="news-item__date" datetime="2020-09-27">2021/09/27</time>
          <p class="news-item__heading">公式サイトをリニューアルしました！</p>
          <p class="news-item__text">新しいサイトを宜しくお願いします！</p>
        </li>
        <li class="news-item">
          <a href="https://youtu.be/c9WYyPyVM18?t=165">
            <time class="news-item__date" datetime="2020-09-27">2021/06/05</time>
            <p class="news-item__heading">INDIE Live Expo 2021にてご紹介いただきました！</p>
            <p class="news-item__text">リンク先のYouTube動画でぜひご確認ください！</p>
          </a>
        </li>
        <li class="news-item">
          <a href="https://www.4gamer.net/games/999/G999905/20201228102/">
            <time class="news-item__date" datetime="2020-12-19">2020/12/19</time>
            <p class="news-item__heading">
              ゲームクリエイター甲子園2020にて総合大賞3位、審査員特別賞、話題賞を受賞しました！
            </p>
            <p class="news-item__text">詳細はリンク先の記事をご覧ください！</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</Section>

<style lang="stylus">
  @import '../../styles/_func.styl'
  @import '../../styles/_layouts.styl'

  .news-section {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 80px 0;

  +sm() {
		padding: 60px 0;
	}

  headingHatColor(#f2b807)

  &__list {
  }
}

.news-item {
  padding: 1.5em 0;
  border-top: 0.5px dashed #e2e2e4;
  &>a {
    display: block;
  }

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
  &:last-of-type {
    padding-bottom: 0;
  }

  &__date {
    color: #fff;
  }

  &__heading {
    font-size: 1.2em;
    color: #fff;
    font-weight: bold;
    margin-top: 0.5em;
  }

  &__text {
    margin-top: 0.5em;
    color: #fff;
  }
}
</style>
