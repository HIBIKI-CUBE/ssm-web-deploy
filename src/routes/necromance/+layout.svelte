<slot />

<style lang="stylus">
  /*** The new CSS Reset - version 1.0.0 (last updated 8.7.2021) ***/

  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  :global(*:where(:not(iframe, canvas, img, svg, video):not(svg *)))
    all unset
    display revert

  /* Preferred box-sizing value */
  :global(*,*::before,*::after)
    box-sizing border-box

  /* Remove list styles (bullets/numbers) */
  :global(ol,ul)
    list-style none

  /* For images to not be able to exceed their container */
  :global(img)
    max-width 100%

  /* removes spacing between cells in tables */
  :global(table)
    border-collapse collapse
</style>
