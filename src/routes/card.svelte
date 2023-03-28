<script lang="ts">
  import { fly } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';

  type Accounts = {
    twitter?: string;
    note?: string;
    qiita?: string;
    github?: string;
    youtube?: string;
  };

  export let name = '',
    positions = [''],
    imgId = '',
    accounts: Accounts,
    color = '',
    index = 0;

  import Picture from '$lib/components/picture.svelte';
</script>

<div
  class="card"
  style="--theme-color: {color}"
  in:fly={{ y: 200, duration: 500, delay: 50 * index, easing: expoOut }}
  out:fly={{ y: 100, duration: 200, delay: 20 * index, easing: expoOut }}
>
  <div class="content">
    <img class="logo" width="1572" height="600" src="ssm-logo-landscape.svg" alt="" />
    <div class="basics">
      {#if imgId}
        <Picture srcName={imgId} directory="/img/members/" imgClass="avatar" />
      {/if}
      <div class="info">
        {#each positions as position}
          <div class="position">
            {position}
          </div>
        {/each}
        <div class="name">
          {name}
        </div>
      </div>
    </div>
    <div class="accounts">
      {#each Array(5) as _, i}
        <a href={accounts[Object.keys(accounts)[i]]} class="account {Object.keys(accounts)[i]}">
          {#if Object.keys(accounts)[i]}
            <img class="icon" src="/img/{Object.keys(accounts)[i]}.svg" alt="" />
          {/if}
        </a>
      {/each}
    </div>
  </div>
</div>

<style lang="stylus">
  .card
    aspect-ratio 91/55
    width calc((100% - 2em) / 2)
    margin:0 auto 2em
    @media (min-width: 1000px)
      width calc((100% - 2em) / 3)
    @media (max-width: 650px)
      width 100%
    background-color #fff
    display grid
    place-items center
    box-shadow: 0 5px 5px #bbbb

  .content
    display flex
    flex-direction column
    justify-content space-between
    width calc((300 - 20 * 2)/300 * 100%)
    height calc((300 * 55 / 91 - 20 * 2)/(300 * 55 / 91) * 100%)

  .logo
    width: calc(45 / 260 * 100%);
    height: auto;

  .basics
    margin-top calc(11/260 * 100%)
    :global(img)
      width calc(76 / 260 * 100% - 4px);
      height auto;
      border 2px solid var(--theme-color);
      border-radius: 14% 14% 29% 14%;

  .info
    display inline-block
    height 100%
    margin-left 1ch

  .position
    font-size 0.75em

  .name
    font-size 1.25em

  .accounts
    display flex
    flex-direction row-reverse

  .account
    aspect-ratio 1/1
    text-decoration none
    width calc(27 / 260 * 100%)
    margin-left calc(12 / 260 * 100%)
    height auto
    display grid
    place-items center
    background-color #c4c4c4
    border-radius 32%
    &:global(.twitter)
      background-color: #00A4FA
    &:global(.note)
      background-color: #41C8B5
    &:global(.github)
      background-color: #171516
    &:global(.qiita)
      background-color: #55C500
    &:global(.youtube)
      background-color: #F00

  .icon
    max-width: calc(12 / 26 * 100%);
    max-height: calc(11 / 25 * 100%);
</style>
