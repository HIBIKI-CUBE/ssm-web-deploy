<script>
  import KeyVisual01 from '../../img/keyvisual/01.png';
  import KeyVisual02 from '../../img/keyvisual/02.png';
  import KeyVisual03 from '../../img/keyvisual/03.png';
  import KeyVisual04 from '../../img/keyvisual/04.png';
  import KeyVisual05 from '../../img/keyvisual/05.png';
  import KeyVisual06 from '../../img/keyvisual/06.png';
  import KeyVisual07 from '../../img/keyvisual/07.png';
  import KeyVisual08 from '../../img/keyvisual/08.png';
  import KeyVisual09 from '../../img/keyvisual/09.png';
  import KeyVisual10 from '../../img/keyvisual/10.png';
  import KeyVisual11 from '../../img/keyvisual/11.png';
  import KeyVisual12 from '../../img/keyvisual/12.png';
  import Logo from '../../img/ぞくロマロゴ_Ver3.png';
  import Section from '../Section.svelte';
</script>

<Section>
  <div class="hero-section">
    <div class="hero-section__elements-wrapper">
      <div class="hero-section__elements">
        <img class="hero-section__layer01" src={KeyVisual01} alt="キービジュアル01" />
        <img class="hero-section__layer03" src={KeyVisual03} alt="キービジュアル03" />
        <img class="hero-section__layer04" src={KeyVisual04} alt="キービジュアル04" />
        <img class="hero-section__layer05" src={KeyVisual05} alt="キービジュアル05" />
        <img class="hero-section__layer06" src={KeyVisual06} alt="キービジュアル06" />
        <img class="hero-section__layer07" src={KeyVisual07} alt="キービジュアル07" />
        <img class="hero-section__layer08" src={KeyVisual08} alt="キービジュアル08" />
        <img class="hero-section__layer09" src={KeyVisual09} alt="キービジュアル09" />
        <img class="hero-section__layer10" src={KeyVisual10} alt="キービジュアル10" />
        <img class="hero-section__layer11" src={KeyVisual11} alt="キービジュアル11" />
        <img class="hero-section__layer12" src={KeyVisual12} alt="キービジュアル12" />
        <img class="hero-section__layer02" src={KeyVisual02} alt="キービジュアル02" />
        <img class="hero-section__logo" src={Logo} alt="ロゴ" />
      </div>
    </div>
    <div class="hero-section__shape-divider">
      <svg
        viewBox="0 0 1280 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style="position:absolutebottom:0"
      >
        <path
          d="M342.816 63.56C404.683 74.35 464.587 93.69 526.283 105.42C614.165 122.14 705.685 123.15 793.429 105.81C878.699 89 967.115 48 1051.37 27.17C1126.09 8.69 1207.67 1.08 1280 24.17V120H0V92.65C109.297 53.7958 227.854 43.7355 342.816 63.56Z"
          fill="#56449A"
        />
      </svg>
    </div>
  </div>
</Section>

<style lang="stylus">

@import '../../styles/_layouts.styl'

@keyframes fadeIn {
	0% {
		opacity: 0
	}
	100% {
		opacity: 1
	}
}

@keyframes bounceIn {
	0% {
		transform: scale(0)
	}
	100% {
		transform: scale(1)
	}
}

@keyframes slideFadeUp {
	0% {
		transform: translateY(10px)
		opacity: 0
	}
	100% {
		transform: translateY(0)
		opacity: 1
	}
}

@keyframes slideFadeLeft {
	0% {
		transform: translateX(-10px)
		opacity: 0
	}
	100% {
		transform: translateX(0)
		opacity: 1
	}
}

@keyframes slideFadeRight {
	0% {
		transform: translateX(10px)
		opacity: 0
	}
	100% {
		transform: translateX(0)
		opacity: 1
	}
}

@keyframes slideFadeRotate {
	0% {
		transform: rotate(-10deg)
		opacity: 0
	}
	100% {
		transform: rotate(0deg)
		opacity: 1
	}
}

@keyframes kirakira {
	0% {
		opacity: 0
	}
	25% {
		opacity: 0.7
	}
	50% {
		opacity: 0.3
	}
	75% {
		opacity: 1
	}
	100% {
		opacity: 0
	}
}

$anime01
	// 魔法陣
	animation-name: fadeIn
	animation-timing-function: ease-in
	animation-duration: 0.3s
	animation-delay: 0.5s
	animation-fill-mode: both

$anime02
	// ネクロマンスちゃん
	animation-name: slideFadeUp
	animation-timing-function: ease-in
	animation-duration: 0.3s
	animation-delay: 1s
	animation-fill-mode: both

$anime03
	// ボス
	animation-name: fadeIn
	animation-timing-function: ease-in
	animation-duration: 0.3s
	animation-delay: 1.5s
	animation-fill-mode: both

$anime04-left
	// 左敵
	animation-name: slideFadeLeft
	animation-timing-function: ease-in
	animation-duration: 0.3s
	animation-delay: 2s
	animation-fill-mode: both

$anime04-right
	// 右敵
	animation-name: slideFadeRight
	animation-timing-function: ease-in
	animation-duration: 0.3s
	animation-delay: 2s
	animation-fill-mode: both

$anime05
	// 玉
	animation-name: slideFadeRotate
	animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1)
	animation-duration: 0.3s
	animation-delay: 2.5s
	animation-fill-mode: both

$anime06
	// エフェクト
	animation-name: fadeIn
	animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1)
	animation-duration: 0.3s
	animation-delay: 3s
	animation-fill-mode: both

$anime07
	// ロゴ
	animation-name: bounceIn
	animation-timing-function: cubic-bezier(0.91, 1.79, 0.01, 1.13)
	animation-duration: 300ms
	animation-delay: 3.5s
	animation-fill-mode: both

$anime-kirakira
	animation-name: kirakira
	animation-timing-function: ease-in
	animation-duration: 4s
	animation-delay: 4s
	animation-iteration-count: infinite
	animation-fill-mode: backwards

pos(w, t, l)
	width w px
	top t px
	left l px
	@media screen and (max-width: 720px)
		width "calc(%s/ 720 * 100vw)" % w
		top "calc(%s / 720 * 100vw)" % t
		left "calc(%s / 720 * 100vw)" % l

.hero-section
	width: 100%
	height: 720px
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url('../../img/HERO_BG.jpg')
	background-size: cover
	background-position: center center
	z-index: -3
	position: relative
	padding: 0

	@media screen and (max-width: 600px)
		height: 600px

	@media screen and (max-width: 400px)
		height: 400px

	&__elements-wrapper
		height: 100%
		width: 100%
		display: flex
		justify-content: center
		align-items: center

	&__elements
		height: 100vw
		width: 100vw
		max-width: 720px
		max-height: 720px
		position: relative
		overflow: hidden
		user-select: none

	&__shape-divider
		position: absolute
		width: 100%
		bottom: 0

	&__layer01
		// ボス
		position: absolute
		opacity: 0
		pos(708.05, 0, 5.98)
		@extends $anime03

	&__layer02
		// キラキラ
		position: absolute
		opacity: 0
		pos(687.48, 250.84, 10.55)
		@extends $anime06
		@extends $anime-kirakira

	&__layer03
		// 右敵-青
		position: absolute
		opacity: 0
		pos(178.24, 230.8, 514.51)
		@extends $anime04-right

	&__layer04
		// 魔法陣1
		position: absolute
		opacity: 0
		pos(409.57, 592.03, 155.21)
		@extends $anime01

	&__layer05
		// 魔法陣2
		position: absolute
		opacity: 0
		pos(438.05, 591.5, 139.92)
		@extends $anime01

	&__layer06
		// 魔法陣3
		position: absolute
		opacity: 0
		pos(466.88, 583.77, 128.14)
		@extends $anime01

	&__layer07
		// 衝撃波奥
		position: absolute
		opacity: 0
		pos(493.95, 454.92, 113.03)
		@extends $anime06

	&__layer08
		// 弾1-青
		position: absolute
		opacity: 0
		pos(394.08, 183.52, 128.14)
		@extends $anime05

	&__layer09
		// ネクロマンスちゃん
		position: absolute
		opacity: 0
		pos(334.16, 263.67, 177.89)
		@extends $anime02

	&__layer10
		// 弾2-赤
		position: absolute
		opacity: 0
		pos(345.59, 416.95, 225)
		@extends $anime05

	&__layer11
		// 衝撃波手前
		position: absolute
		opacity: 0
		pos(642.3, 516.27, 38.85)
		@extends $anime06

	&__layer12
		// 左敵-赤
		position: absolute
		opacity: 0
		pos(180.18, 342, 0)
		@extends $anime04-left

	&__logo
		// ロゴ
		position: absolute
		transform: scale(0)
		pos(580, 450, 70)
		@extends $anime07
</style>
