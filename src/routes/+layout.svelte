<script lang="ts">
  import '$lib/global.stylus';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<slot />

<style lang="stylus">
  :global(body)
    margin 0
</style>
