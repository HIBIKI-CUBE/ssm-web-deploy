<script>
  import CircleLogo from '../img/ssm_logo_color_white.png';
</script>

<nav class="nav">
  <div class="nav__left">
    <a href="/">
      <img class="nav__logo" alt="サークルロゴ" src={CircleLogo} />
    </a>
  </div>
  <div class="nav__right">
    <div class="nav__menu-button" style="display:none;">
      <svg style="width:40px;height:40px" viewBox="0 0 24 24">
        <path fill="#56449A" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </div>
  </div>
</nav>

<style lang="stylus">
.nav
  width 100%
  height 90px
  display flex
  padding 15px 30px
  position fixed
  z-index 100

  a
    cursor: pointer

  &__logo
    max-height 50px

  &__menu-button
    width 40px
    height 40px
    background-color #fff

  &__left
    margin-right auto
    display flex
    align-items center

  &__right
    margin-left auto
    display flex
    align-items center
</style>
