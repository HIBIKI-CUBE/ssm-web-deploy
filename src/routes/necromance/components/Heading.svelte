<script lang="ts">
  export let align = 'left';
  export let title: string;
  export let subtitle: string;
</script>

<div class={`heading heading--${align}`}>
  <h2>{title}</h2>
  <span>{subtitle}</span>
</div>

<style lang="stylus">

@import './../styles/_break.styl'

// 帽子をかぶったヘッダー
.heading {
	color: #fff;
	display: inline-block;
	position: relative;
	margin: 29px 0 2.5em 0;
	overflow: visible;
	z-index: 1;

	&--left {
		text-align: left;
	}

	&--center {
		text-align: center;
	}

	&--right {
		text-align: right;
	}

	h2 {
		font-family: 'buena-park-jf', serif;
		text-transform: uppercase;
		font-size: 3em;
		line-height: 1em;
		letter-spacing: 1px;
		z-index: 3;
		+sm() {
			font-size: 9vw;
		}
	}
	span {
		letter-spacing: 1px;
		z-index: 3;
	}

	&::after {
		z-index: -1;
		position: absolute;
		width: 91.5px;
		height: 58px;
		top: -29px;
		right: -30px;
		display: block;
		content: '';
		background-color: #1e1054;
		-webkit-mask: url('../img/necromance_heading_hat.svg');
		mask: url('../img/necromance_heading_hat.svg');
		-webkit-mask-size: cover;
		mask-size: cover;
		user-select: none;
	}
}
</style>
