<footer>
  <img class="logo" width="1572" height="600" src="ssm-logo-landscape-white.svg" alt="" />
  <div class="copyright">&copy; 2023, HIBIKI CUBE, かずえもん, スーパースターマイン</div>
  <div class="license">
    <div class="codes">
      <div>
        このWebサイトのソースコードはMozilla Public License 2.0ライセンスの下で提供されており、<a
          href="https://github.com/HIBIKI-CUBE/superstarmine-web">GitHub</a
        >から入手して利用できます。
      </div>
      <div>
        The source code of this web site is licensed under a Mozilla Public License 2.0 and
        available at <a href="https://github.com/HIBIKI-CUBE/superstarmine-web">GitHub</a>.
      </div>
    </div>
    <div class="assets">
      <div>
        全てのソースコード以外の画像や動画などのリソースは<a
          href="https://creativecommons.org/licenses/by-nd/4.0/deed.ja"
        >
          クリエイティブ・コモンズ 表示 - 改変禁止 4.0 国際</a
        >ライセンスの下に提供されています。
      </div>
      <div>
        All non-source code resources such as images and videos are licensed under a <a
          href="http://creativecommons.org/licenses/by-nd/4.0/"
          >Creative Commons Attribution-NoDerivatives 4.0 International License</a
        >.
      </div>
    </div>
  </div>
</footer>

<style lang="stylus">
  footer
    background: #333
    padding: 3em calc((100% - 1000px) / 2)
    font-size 0.5em
    color: #fff
    .license, & a
      color #808080
    @media (max-width: 1111.11px)
      padding: 5%
      font-size 0.7em
  .codes, .assets
    margin-block: 2em
  .logo
    width: 25%
    height auto
    display block
    margin: 1em 0
  
  .copyright
    display inline-block
    &:after
      content: ""
      display block
      width: 100%
      height 1px
      background: linear-gradient(to right, #F73F23, #F7A723)
</style>
