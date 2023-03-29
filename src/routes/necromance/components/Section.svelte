<script>
  export let yPadding = true;
  const _classes = ['section'];
  if (!yPadding) _classes.push('section--no-padding');
  const classes = _classes.join(' ');
</script>

<div class={classes}>
  <slot />
</div>

<style lang="stylus">
@import '../styles/_break.styl'
.section {
	padding: 80px 0;

	+sm() {
		padding: 60px 0;
	}

  &--no-padding {
    padding: 0;

    +sm() {
      padding: 0;
    }
  }

	&:first-of-type {
		padding-top: 0;
	}

	&:last-of-type {
		padding-bottom: 0;
	}
}
</style>
