<script>
  import SSMLogoBlack from '../img/ssm_logo_color_black.png';
</script>

<footer class="footer">
  <div class="content">
    <img class="footer__circle-logo" src={SSMLogoBlack} alt="サークルロゴ" />
    <p class="footer__copyright">&copy; 2021 HIBIKI CUBE, かずえもん, スーパースターマイン</p>
    <hr class="footer__divider" />
    <p class="footer__license">
      このWebサイトのソースコードは Mozilla Public License 2.0ライセンス の下で提供されており <a
        href="https://github.com/SuperStarMine/web-v3">GitHub</a
      >
      から入手して利用できます。<br />
      The source code of this web site is licensed under a Mozilla Public License 2.0 and available at
      <a href="https://github.com/SuperStarMine/web-v3">GitHub</a>.
    </p>
    <p class="footer__license">
      全てのソースコード以外の画像や動画などのリソースは クリエイティブ・コモンズ 表示 - 改変禁止
      4.0 国際 ライセンス の下に提供されています。<br />
      All non-source code resources such as images and videos are licensed under a Creative Commons Attribution-NoDerivatives
      4.0 International License.
    </p>
  </div>
</footer>

<style lang="stylus">
.footer
  font-size: 12px;
  padding: 70px 10px;
  background-color: #f8f9fb;

  &__circle-logo
    height: 70px;

  &__divider
    height: 1px;
    overflow: visible;
    width: 100px;
    background: linear-gradient(
      90deg,
      rgba(247, 63, 35, 1) 0%,
      rgba(247, 167, 35, 1) 100%
    );
    z-index: 100;
    margin: 30px 0;

  &__copyright
    margin-top: 17px;

  &__license
    line-height: 24px;
    color: #808080;
    margin: 24px 0;
    a
      text-decoration: underline;
      cursor: pointer;

    &:first-child
      margin-top: 0;

    &:last-child
      margin-bottom: 0;
</style>
