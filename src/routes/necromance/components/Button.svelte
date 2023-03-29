<script lang="ts">
  export let variant: 'discord' | 'twitter' | undefined;
  export let href: string;
  const _classes = ['button'];
  if (variant !== undefined) _classes.push(`button--${variant}`);
  const classes = _classes.join(' ');
</script>

<a class={classes} {href}><slot /></a>

<style lang="stylus">
.button {
  display: inline-block;
  min-height: 50px;
  min-width: 100px;
  font-size: 1.125em;
  // padding: 15px 60px から 左上方向に5px 動かす
  padding: 9px 66px 21px 54px;
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 1px;
  vertical-align: middle;

  &--discord {
    color: #fff;
    font-weight: bold;
    background-color: #5865f2;
  }

  &--twitter {
    color: #fff;
    font-weight: bold;
    background-color: #1da1f2;
  }

  &::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 30px;
    border: 2px solid #fff;
    transition: all 0.3s ease;
  }

  &:hover,
  &:focus {
    padding: 15px 60px;
    &::before {
      top: 0px;
      left: 0px;
    }
  }
}
</style>
