<script>
  export let contents;
  const licenses = {
    'afl-3.0': 'Academic Free License v3.0',
    'apache-2.0': 'Apache license 2.0',
    'artistic-2.0': 'Artistic license 2.0',
    'bsl-1.0': 'Boost Software License 1.0',
    'bsd-2-clause': 'BSD 2-clause "Simplified" license',
    'bsd-3-clause': 'BSD 3-clause "New" or "Revised" license',
    'bsd-3-clause-clear': 'BSD 3-clause Clear license',
    'cc': 'Creative Commons license family',
    'cc0-1.0': 'Creative Commons Zero v1.0 Universal',
    'cc-by-4.0': 'Creative Commons Attribution 4.0',
    'cc-by-sa-4.0': 'Creative Commons Attribution Share Alike 4.0',
    'wtfpl': 'Do What The F*ck You Want To Public License',
    'ecl-2.0': 'Educational Community License v2.0',
    'epl-1.0': 'Eclipse Public License 1.0',
    'epl-2.0': 'Eclipse Public License 2.0',
    'eupl-1.1': 'European Union Public License 1.1',
    'agpl-3.0': 'GNU Affero General Public License v3.0',
    'gpl': 'GNU General Public License family',
    'gpl-2.0': 'GNU General Public License v2.0',
    'gpl-3.0': 'GNU General Public License v3.0',
    'lgpl': 'GNU Lesser General Public License family',
    'lgpl-2.1': 'GNU Lesser General Public License v2.1',
    'lgpl-3.0': 'GNU Lesser General Public License v3.0',
    'isc': 'ISC',
    'lppl-1.3c': 'LaTeX Project Public License v1.3c',
    'ms-pl': 'Microsoft Public License',
    'mit': 'MIT',
    'mpl-2.0': 'Mozilla Public License 2.0',
    'osl-3.0': 'Open Software License 3.0',
    'postgresql': 'PostgreSQL License',
    'ofl-1.1': 'SIL Open Font License 1.1',
    'ncsa': 'University of Illinois/NCSA Open Source License',
    'unlicense': 'The Unlicense',
    'zlib': 'zLib License'
  }
</script>

<footer style="--itemsCount: {(() => {let count = 0;Object.keys(contents).forEach(v => count += v == 'copyright' ? 1 : 2);return count})()};{contents.transparent || contents.backgroundColor ? `--ui-bg: ${contents.transparent ? "transparent" : contents.backgroundColor};` : ''}">
  {#if contents.copyright}
    <section class="copyright">
      <div>
        {#if Array.isArray(contents.copyright)}
          {#each contents.copyright as copyright, i}
            <span class="break-scope">{@html copyright}{i+1 != contents.copyright.length ? ', ' : ''}</span>
          {/each}
        {:else}
          <span class="break-scope">{@html contents.copyright}</span>
        {/if}
        <span class="break-scope">buildReplacee.version</span>
        <span class="break-scope">buildReplacee.buildDate</span>
      </div>
    </section>
  {/if}
  {#if contents.codeLicense}
    <section class="license">
      <div>
        The source code of this web site is licensed under a {licenses[contents.codeLicense.license]}{contents.codeLicense.linkLabel && contents.codeLicense.url ? ' and available at ' : '.'}
        {#if contents.codeLicense.linkLabel && contents.codeLicense.url}
          <a href={contents.codeLicense.url} style="{contents.anchorColor ? `color: ${contents.anchorColor}` : ''}">{contents.codeLicense.linkLabel}</a>.
        {/if}
      </div>
    </section>
    <section class="license">
      <div>
        このWebサイトのソースコードは{licenses[contents.codeLicense.license]}ライセンスの下で提供されて{contents.codeLicense.linkLabel && contents.codeLicense.url ? 'おり、' : 'います。'}
        {#if contents.codeLicense.linkLabel && contents.codeLicense.url}
          <a href={contents.codeLicense.url} style="{contents.anchorColor ? `color: ${contents.anchorColor}` : ''}">{contents.codeLicense.linkLabel}</a>から入手して利用できます。
        {/if}
      </div>
    </section>
  {/if}
  {#if contents.assetsLicense.ccType}
    <section class="creative-commons">
      <div>
        <a rel="license" href="http://creativecommons.org/licenses/{contents.assetsLicense.ccType}/4.0/"><img alt="Creative Commons License" style="border-width:0;display:inline-block;vertical-align:middle;margin-right: 1ch;" src="https://i.creativecommons.org/l/{contents.assetsLicense.ccType}/4.0/80x15.png" width="80" height="15" loading="lazy"/></a>All non-source code resources such as images and videos are licensed under a <a rel="license" href="http://creativecommons.org/licenses/{contents.assetsLicense.ccType}/4.0/" style="{contents.anchorColor ? `color: ${contents.anchorColor}` : ''}">Creative Commons {contents.assetsLicense.ccType.match(/by/i) ? 'Attribution' : ''}{contents.assetsLicense.ccType.match(/-/gi).length >= 1 ? '-' : ''}{contents.assetsLicense.ccType.match(/nc/i) ? 'NonCommercial' : ''}{contents.assetsLicense.ccType.match(/-/gi).length >= 2 ? '-' : ''}{contents.assetsLicense.ccType.match(/nd/i) ? 'NoDerivatives' : ''}{contents.assetsLicense.ccType.match(/-/gi).length >= 3 ? '-' : ''}{contents.assetsLicense.ccType.match(/sa/i) ? 'ShareAlike' : ''} 4.0 International License</a>.
      </div>
    </section>
    <section class="creative-commons">
      <div>
        <a rel="license" href="https://creativecommons.org/licenses/{contents.assetsLicense.ccType}/4.0/deed.ja"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0;display:inline-block;vertical-align:middle;margin-right: 1ch;" src="https://i.creativecommons.org/l/{contents.assetsLicense.ccType}/4.0/80x15.png" width="80" height="15" loading="lazy"/></a>全てのソースコード以外の画像や動画などのリソースは <a rel="license" href="https://creativecommons.org/licenses/by-nd/4.0/deed.ja" style="{contents.anchorColor ? `color: ${contents.anchorColor}` : ''}">クリエイティブ・コモンズ {contents.assetsLicense.ccType.match(/by/i) ? '表示' : ''}{contents.assetsLicense.ccType.match(/-/gi).length >= 1 ? ' - ' : ''}{contents.assetsLicense.ccType.match(/nc/i) ? '非営利' : ''}{contents.assetsLicense.ccType.match(/-/gi).length >= 2 ? ' - ' : ''}{contents.assetsLicense.ccType.match(/nd/i) ? '改変禁止' : ''}{contents.assetsLicense.ccType.match(/-/gi).length >= 3 ? ' - ' : ''}{contents.assetsLicense.ccType.match(/sa/i) ? '継承' : ''} 4.0 国際 ライセンス</a>の下に提供されています。
      </div>
    </section>
  {/if}
</footer>

<style lang="stylus">
  @css{
    footer{
      padding: 2em max(env(safe-area-inset-right), calc((100vw - var(--standardWidth)) / 2)) max(calc(2em - env(safe-area-inset-bottom)), env(safe-area-inset-bottom)) max(env(safe-area-inset-left), calc((100vw - var(--standardWidth)) / 2));
    }
  }
  footer
    box-sizing border-box
    width 100%
    display flex
    justify-content space-around
    align-items stretch
    font-size 0.8em
    background-color var(--ui-bg)
    @media screen and (orientation: portrait)
      flex-direction column

    section
      display flex
      align-items center
      flex-basis 100%
      position relative
      background-color transparent

      &:not(:last-child)
        @media screen and (orientation: portrait)
          margin-bottom 0.5em

        @media screen and (orientation: landscape)
          margin-right 1.5em

      @media screen and (orientation: landscape)
        padding 1em
        border-bottom solid 1px var(--accent-color)

        &:before
          content ''
          display block
          width 60%
          height 2em
          position absolute
          top 0
          left 0
          border solid 1px #a3a3a3
          border-right-color transparent
          border-bottom-color transparent
          box-sizing border-box
          border-radius 1vw 0 0 0

        &:after
          content ''
          display block
          width 100%
          height 0.25em
          position absolute
          left 0
          bottom 0
          background linear-gradient(to bottom left,#f73f23, #f78323, #f7a723)

  .copyright
    @media screen and (orientation: portrait)
      justify-content center
</style>