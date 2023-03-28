<script>
  export let contents, globalSettings, standardWidth;
  import Picture from '$lib/components/picture.svelte';
  import { onMount } from 'svelte';
  const socialConsts = {
    urls: {
      twitter: 'twitter.com',
      facebook: 'facebook.com',
      note: 'note.com',
      github: 'github.com',
      qiita: 'qiita.com',
      youtube: 'www.youtube.com/c',
      lastfm: 'www.last.fm/ja/user',
    },
    aspectRatios: {
      twitter: { width: 2499, height: 2032 },
      facebook: { width: 971, height: 965 },
      note: { width: 167, height: 188 },
      github: { width: 362, height: 354 },
      qiita: { width: 1, height: 1 },
      youtube: { width: 44, height: 31 },
      lastfm: { width: 70877, height: 17833 },
    },
  };
  let ch2px, ch, rotateX, rotateY;
  onMount(() => {
    ch = ch2px.getBoundingClientRect().width;
  });
</script>

<div class="card_container" style="--rotateX: {rotateX}deg;--rotateY: {rotateY}deg;">
  {#each contents.cards as card}
    <div
      class="card_wrapper"
      style="--backfaceColor:{card.backfaceColor};--backfaceLogoBrightness: {card.backfaceLogoBrightness};"
      on:mousemove={(e) => {
        const cardClass = e.currentTarget.querySelector('.card').classList;
        if (!cardClass.contains('isFliping')) {
          rotateX =
            ((e.clientY - e.currentTarget.getBoundingClientRect().top) /
              (e.currentTarget.getBoundingClientRect().height / 2) -
              1) *
            10;
          rotateY =
            ((e.clientX - e.currentTarget.getBoundingClientRect().left) /
              (e.currentTarget.getBoundingClientRect().width / 2) -
              1) *
              -10 +
            (cardClass.contains('fliped') ? 180 : 0);
        }
      }}
      on:click={(e) => {
        const cardClass = e.currentTarget.querySelector('.card').classList;
        const backfaceClass = e.currentTarget.querySelector('.backface').classList;
        if (
          !cardClass.contains('isFliping') &&
          !e.currentTarget.querySelector('.card .lower').contains(e.target)
        ) {
          cardClass.add('isFliping');
          backfaceClass.add('isFliping');
          setTimeout(() => {
            cardClass.remove('isFliping');
            backfaceClass.remove('isFliping');
            cardClass[!cardClass.contains('fliped') ? 'add' : 'remove']('fliped');
            backfaceClass[!backfaceClass.contains('fliped') ? 'add' : 'remove']('fliped');
            rotateY += 180;
          }, 600);
        }
      }}
    >
      <div class="card">
        <div class="upper">
          {#if card.imageId}
            <div class="left">
              <Picture
                imgClass="card_left-img card_img"
                {contents}
                {globalSettings}
                imageId={card.imageId}
                sizes="(min-aspect-ratio: 16/9) {standardWidth / 3 / 3}vw, {standardWidth /
                  2 /
                  3}vw, (max-aspect-ratio: 1/1) {(standardWidth * 0.8) /
                  3}vw, (max-aspect-ratio: 3/4) {standardWidth / 3}vw"
                width="1"
                height="1"
              />
            </div>
          {/if}
          <div class="right {card.imageId ? '' : 'noImage'}">
            <div class="name">{card.name}</div>
            <div class="post">
              {#each card.post as post}
                <span>{post}</span>
              {/each}
            </div>
            <div class="logo">
              <div bind:this={ch2px} style="opacity:0;width:1ch" />
              <Picture
                imgClass="card_img"
                {contents}
                {globalSettings}
                imageDirectory={globalSettings.imageDirectory}
                imageId={contents.logoImageId}
                imageExtensionsShort={contents.logoImageExtensionsShort}
                sizes="{3 * ch}px"
                width={contents.logoAspectRatio.width}
                height={contents.logoAspectRatio.height}
              />
            </div>
          </div>
        </div>
        <div class="lower">
          {#each card.accounts as account}
            <a
              class="social-button {account.name} {card.accounts.length > 2 ? 'iconOnly' : ''}"
              href={account.customUrl
                ? account.customUrl
                : `https://${socialConsts.urls[account.name]}/${account.id}`}
              style="--popupContent: '{(account.name == 'twitter' ? '@' : '') + account.id}'"
            >
              <img
                src="{globalSettings.imageDirectory}{account.name == 'youtube'
                  ? 'youtube-white'
                  : account.name}.svg"
                alt="{account.name}のアイコン"
                width={socialConsts.aspectRatios[account.name].width}
                height={socialConsts.aspectRatios[account.name].height}
              />
              <span class="id">
                {account.id}
              </span>
            </a>
          {/each}
        </div>
      </div>
      <div class="backface">
        <Picture
          pictureClass="backface_logo_picture"
          imgClass="backface_logo"
          {contents}
          {globalSettings}
          imageDirectory={globalSettings.imageDirectory}
          imageId={contents.backfaceLogoImageId}
          imageExtensionsShort={contents.backfaceLogoImageExtensionsShort}
          width={contents.backfaceLogoAspectRatio.width}
          height={contents.backfaceLogoAspectRatio.height}
        />
      </div>
    </div>
  {/each}
</div>

<style lang="stylus">
  .card_container
    width 100%
    display flex
    flex-wrap wrap
  .card_wrapper
    @media (min-aspect-ratio: 16/9)
      width calc(100% / 3 - 2em)
      flex 0 0 calc(100% / 3 - 2em)
      font-size calc(2.5vw / 3)
    width calc(50% - 2em)
    flex 0 0 calc(50% - 2em)
    font-size calc(2.5vw * 0.5)
    @media (max-aspect-ratio: 1/1)
      flex 0 0 100%
      font-size calc(2.5vw * 0.8)
    @media (max-aspect-ratio: 3/4)
      flex 0 0 100%
      font-size: 2.5vw
    margin 0 auto 2em
    position relative
    &:before
      content ""
      display block
      padding-top calc(108 / 179 * 100%)
  .card, .backface
    position absolute
    top 0
    bottom 0
    right 0
    left 0
    -webkit-backface-visibility hidden
    backface-visibility hidden
    transition transform 400ms ease, filter 400ms ease
    &:hover
      filter drop-shadow(0px 0px 3px #aaa)
  .backface
    background-color var(--backfaceColor)
    &:not(.isFliping)
      transform translateZ(0px) rotateX(0deg) rotateY(180deg)
      &.fliped
        transform translateZ(0px) rotateX(0deg) rotateY(0deg)
      &:hover
        transform perspective(600px) translateZ(20px) rotateX(var(--rotateX)) rotateY(calc(var(--rotateY) + 180deg))
        transition none
    &.isFliping
      animation flipBackface 600ms ease 0ms both
      transition none
      &.fliped
        animation unflipBackface 600ms ease 0ms both
    @keyframes flipBackface
      0%
        transform perspective(600px) translateZ(20px) rotateX(var(--rotateX)) rotateY(calc(var(--rotateY) + 180deg))
      15%
        transform perspective(600px) translateZ(100px) rotateX(0deg) rotateY(180deg)
      85%
        transform perspective(600px) translateZ(100px) rotateX(0deg) rotateY(360deg)
      100%
        transform perspective(600px) translateZ(20px) rotateX(0deg) rotateY(360deg)
    @keyframes unflipBackface
      0%
        transform perspective(600px) translateZ(20px) rotateX(var(--rotateX)) rotateY(calc(var(--rotateY) - 180deg))
      15%
        transform perspective(600px) translateZ(100px) rotateX(0deg) rotateY(0deg)
      85%
        transform perspective(600px) translateZ(100px) rotateX(0deg) rotateY(-180deg)
      100%
        transform perspective(600px) translateZ(20px) rotateX(0deg) rotateY(-180deg)
  :global(.backface_logo_picture)
    width 30%
    height auto
    position absolute
    left 1em
    bottom 1em
  :global(.backface_logo)
    width 100%
    height auto
    filter brightness(var(--backfaceLogoBrightness))
  .card
    display flex
    flex-direction column
    background-color white
    &:not(.isFliping)
      transform translateZ(0px) rotateX(0deg) rotateY(0deg)
      &.fliped
        transform translateZ(0px) rotateX(0deg) rotateY(180deg)
      &:hover
        transform perspective(600px) translateZ(20px) rotateX(var(--rotateX)) rotateY(var(--rotateY))
        transition none
    &.isFliping
      animation flip 600ms ease 0ms both
      transition none
      &.fliped
        animation unflip 600ms ease 0ms both
    @keyframes flip
      0%
        transform perspective(600px) translateZ(20px) rotateX(var(--rotateX)) rotateY(var(--rotateY))
      15%
        transform perspective(600px) translateZ(100px) rotateX(0deg) rotateY(0deg)
      85%
        transform perspective(600px) translateZ(100px) rotateX(0deg) rotateY(180deg)
      100%
        transform perspective(600px) translateZ(20px) rotateX(0deg) rotateY(180deg)
    @keyframes unflip
      0%
        transform perspective(600px) translateZ(20px) rotateX(var(--rotateX)) rotateY(var(--rotateY))
      15%
        transform perspective(600px) translateZ(100px) rotateX(0deg) rotateY(180deg)
      85%
        transform perspective(600px) translateZ(100px) rotateX(0deg) rotateY(0deg)
      100%
        transform perspective(600px) translateZ(20px) rotateX(0deg) rotateY(0deg)
  .upper
    display: flex
    position: relative
    align-items: center
    height 100%
  .name
    font-size 2em
  .post
    margin-right 5ch
    span
      display inline-block
      background-color #e3ecee
      white-space nowrap
      padding .25em .5em
      border-radius 1em
      margin-right 1ch
      margin-top .25em
      font-size 1em
  .logo
    width 3.5ch
    position: absolute
    bottom 1ch
    right 2ch
  .left
    flex calc(100% / 3 - 2ch) 0 0
    margin-left 2ch
    width calc(100% / 3 - 2ch)
  :global(.card_left-img)
    border-radius 20% 20% 40% 20%
    border solid 2px var(--backfaceColor)
    box-sizing border-box
  .right
    width 100%
    margin-left 2ch
    .noImage&
      margin-left 4ch
  .lower
    display: flex
    height: 2.5em
  .social-button
    display: flex
    justify-content: center
    align-items center
    color: white
    width 100%
    height 100%
    position relative
    background-color var(--brand-color)
    img
      height 1em
      width auto
      object-fit fill
    &.iconOnly
      &:before
        content var(--popupContent)
        pointer-events none
        white-space nowrap
        display block
        position absolute
        top -2.75em
        padding 0.5em
        border-radius 0.5em
        color black
        border solid 1px var(--brand-color)
        animation hidePopup 200ms ease-in-out 0ms both
      &:hover:before
        animation spawnPopup 200ms ease-in-out 0ms both
  @keyframes spawnPopup
    0%
      transform translateY(2.75em)
      opacity 0
    50%
      opacity 0
    100%
      opacity 1
      transform translateY(0px)
  @keyframes hidePopup
    0%
      opacity 1
      transform translateY(0px)
    50%
      opacity 0
    100%
      opacity 0
      transform translateY(2.75em)
  .id
    margin-left 1ch
    .iconOnly &
      display: none
  .iconOnly img
    height 1.3em
  :global(.card_img)
    width 100%
    height auto
    object-fit cover
  .twitter
    --brand-color #1da1f3
    &.iconOnly:before
      background-color #d8e8f2
  .facebook
    --brand-color #1877f2
    &.iconOnly:before
      background-color #dae5f2
  .note
    --brand-color #41c8b5
    &.iconOnly:before
      background-color #b4e0bd
  .github
    --brand-color #171516
    &.iconOnly:before
      background-color #e8e1e5
  .qiita
    --brand-color #55C500
    &.iconOnly:before
      background-color #eaf7df
  .youtube
    --brand-color #f00
    &.iconOnly:before
      background-color #fff2f2
  .lastfm
    --brand-color #d51007
    &.iconOnly:before
      background-color #fac6c3
</style>
