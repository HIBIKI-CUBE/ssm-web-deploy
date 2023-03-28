<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import BezierEasing from 'bezier-easing';
  import SAT from 'sat';
  import Picture from '$lib/components/picture.svelte';

  let header: HTMLElement, checkbox: HTMLInputElement;

  let contents = {
    imageId: 'ssm-logo-landscape',
    aspectRatio: { width: 157213, height: 60041 },
    imageExtensionsShort: ['svg'],
    items: [
      { id: 'top', label: '作品' },
      { id: 'news', label: 'ニュース' },
      { id: 'about', label: 'チームについて' },
      { id: 'members', label: 'メンバー' },
    ],
  };

  const gameProps = {
    engaged: false,
    startTime: null,
    lastTime: null,
    hit: false,
    wasHit: false,
    keysPressed: {
      w: false,
      a: false,
      s: false,
      d: false,
    },
    command: [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ],
    commandsCount: 0,
    backgroundElement: null,
    debug: null,
    field: {
      width: 0,
      height: 0,
      origin: {
        x: null,
        y: null,
      },
    },
    arrow: {
      element: null,
      svgElement: null,
      width: 0,
      height: 0,
      speed: 20,
      collision: null,
      x: 0,
      y: 0,
      r: 0,
      offset: {
        x: null,
        y: null,
      },
    },
    obstacles: {
      lastAdded: null,
      interval: 500,
      duration: 2000,
      width: 200,
      height: 200,
      parent: null,
      elements: [],
    },
    launch: {
      launching: false,
      launched: false,
      distance: 0,
      duration: 2000,
      turn: {
        turning: false,
        startTime: null,
        startPoint: {
          x: 0,
          y: 0,
        },
        radius: 0,
      },
    },
  };

  const customEasing = BezierEasing(0.25, -0.4, 0.75, 1);

  function easeInOutCubic(x: number) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  const scroll_duration = 400; //ms
  let abort_scroll = false;

  function smoothScroll(time, start_time, origin, destination) {
    if (time == start_time) {
      checkbox.checked = false;
      requestAnimationFrame((time) => smoothScroll(time, start_time, origin, destination));
      return;
    }
    if (abort_scroll) {
      abort_scroll = false;
      return;
    }
    scrollTo({
      top:
        origin +
        (destination || origin * -1) * easeInOutCubic((time - start_time) / scroll_duration),
    });
    if (time - start_time > scroll_duration) return;
    requestAnimationFrame((time) => smoothScroll(time, start_time, origin, destination));
  }

  function triggerSmoothScroll(target) {
    if (target != 'top') {
      var targetElement = document.getElementById(target);
    }
    requestAnimationFrame((time) =>
      smoothScroll(
        time,
        time,
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        target == 'top' ? 0 : targetElement.getBoundingClientRect().top - header.clientHeight
      )
    );
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (gameProps.engaged) {
      if (Object.keys(gameProps.keysPressed).includes(e.key)) {
        gameProps.keysPressed[e.key] = true;
        if (gameProps.keysPressed.w && gameProps.keysPressed.s) {
          switch (e.key) {
            case 'w':
              gameProps.keysPressed.s = false;
              break;
            case 's':
              gameProps.keysPressed.w = false;
              break;
          }
        }
        if (gameProps.keysPressed.a && gameProps.keysPressed.d) {
          switch (e.key) {
            case 'a':
              gameProps.keysPressed.d = false;
              break;
            case 'd':
              gameProps.keysPressed.a = false;
              break;
          }
        }
      }
    } else if (e.key == gameProps.command[gameProps.commandsCount] && checkbox.checked) {
      if (++gameProps.commandsCount == gameProps.command.length) {
        requestAnimationFrame(gameInit);
        gameProps.engaged = true;
        gameProps.backgroundElement.classList.add('shown');
      }
    } else gameProps.commandsCount = 0;
  }

  onMount(() => {
    checkbox = document.getElementById('header_button_checkbox');
    setTimeout(() => {
      checkbox.checked = false;
    }, 2000);
  });
  function gameInit() {
    gameProps.arrow.width = gameProps.arrow.svgElement.getBoundingClientRect().width;
    gameProps.arrow.height = gameProps.arrow.svgElement.getBoundingClientRect().height;
    gameProps.arrow.offset.x = gameProps.arrow.svgElement.getBoundingClientRect().x;
    gameProps.arrow.offset.y = gameProps.arrow.svgElement.getBoundingClientRect().y;
    gameProps.arrow.collision = new SAT.Polygon(new SAT.Vector(), [
      new SAT.Vector(),
      new SAT.Vector(gameProps.arrow.width, gameProps.arrow.height / 2),
      new SAT.Vector(0, gameProps.arrow.height),
    ]);
    gameProps.field.width = innerWidth;
    gameProps.field.height = innerHeight;
    gameProps.field.origin.x = gameProps.field.width - gameProps.arrow.x;
    gameProps.field.origin.y = gameProps.field.height / 2;
    gameProps.launch.turn.radius = (gameProps.field.height - gameProps.arrow.offset.y) / 4;
    gameProps.launch.turn.startPoint.x = -(
      gameProps.field.width -
      (gameProps.field.width - gameProps.arrow.offset.x) * 2 -
      gameProps.launch.turn.radius
    );
    gameProps.launch.turn.startPoint.y = gameProps.arrow.offset.y;
    gameProps.launch.distance =
      gameProps.launch.turn.radius * Math.PI + Math.abs(gameProps.launch.turn.startPoint.x);
    gameProps.obstacles.width = gameProps.field.width / 7;
    gameProps.obstacles.height = gameProps.field.width / 7;
    requestAnimationFrame(gameUpdate);
  }

  function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  function gameUpdate(time) {
    gameProps.wasHit = gameProps.hit;
    gameProps.hit = false;
    if (gameProps.startTime == null) {
      gameProps.startTime = time;
    }
    if (!gameProps.launch.launched) {
      if (time - gameProps.startTime < gameProps.launch.duration) {
        if (!gameProps.launch.turn.turning) {
          gameProps.arrow.x = -(
            customEasing((time - gameProps.startTime) / gameProps.launch.duration) *
            gameProps.launch.distance
          );
          if (gameProps.arrow.x < gameProps.launch.turn.startPoint.x) {
            gameProps.launch.turn.turning = true;
            gameProps.launch.turn.startTime = time;
          }
        } else {
          gameProps.arrow.x =
            Math.cos(
              map_range(
                customEasing((time - gameProps.startTime) / gameProps.launch.duration),
                customEasing(
                  (gameProps.launch.turn.startTime - gameProps.startTime) /
                    gameProps.launch.duration
                ),
                1,
                0.5,
                1.5
              ) * Math.PI
            ) *
              gameProps.launch.turn.radius +
            gameProps.launch.turn.startPoint.x;
          gameProps.arrow.y =
            Math.sin(
              map_range(
                customEasing((time - gameProps.startTime) / gameProps.launch.duration),
                customEasing(
                  (gameProps.launch.turn.startTime - gameProps.startTime) /
                    gameProps.launch.duration
                ),
                1,
                0.5,
                1.5
              ) * Math.PI
            ) *
              -gameProps.launch.turn.radius +
            gameProps.launch.turn.startPoint.y +
            gameProps.launch.turn.radius;
          gameProps.arrow.r = map_range(
            customEasing((time - gameProps.startTime) / gameProps.launch.duration),
            customEasing(
              (gameProps.launch.turn.startTime - gameProps.startTime) / gameProps.launch.duration
            ),
            1,
            0,
            -180
          );
        }
      } else {
        gameProps.launch.launched = true;
        gameProps.arrow.collision.translate(
          gameProps.arrow.svgElement.getBoundingClientRect().x,
          gameProps.arrow.svgElement.getBoundingClientRect().y
        );
      }
    } else {
      const delta = (gameProps.arrow.speed * (time - gameProps.lastTime)) / 60;
      if (gameProps.keysPressed.w) {
        const deltaFixed =
          delta -
          (gameProps.arrow.collision.calcPoints[0].y - delta < 0 ? gameProps.arrow.speed : 0);
        gameProps.arrow.y -= deltaFixed;
        gameProps.arrow.collision.translate(0, -deltaFixed);
      }
      if (gameProps.keysPressed.a) {
        const deltaFixed =
          delta -
          (gameProps.arrow.collision.calcPoints[0].x - delta < 0 ? gameProps.arrow.speed : 0);
        gameProps.arrow.x -= deltaFixed;
        gameProps.arrow.collision.translate(-deltaFixed, 0);
      }
      if (gameProps.keysPressed.s) {
        const deltaFixed =
          delta -
          (gameProps.arrow.collision.calcPoints[2].y + delta > gameProps.field.height
            ? gameProps.arrow.speed
            : 0);
        gameProps.arrow.y += deltaFixed;
        gameProps.arrow.collision.translate(0, deltaFixed);
      }
      if (gameProps.keysPressed.d) {
        const deltaFixed =
          delta -
          (gameProps.arrow.collision.calcPoints[1].x + delta > gameProps.field.width
            ? gameProps.arrow.speed
            : 0);
        gameProps.arrow.x += deltaFixed;
        gameProps.arrow.collision.translate(deltaFixed, 0);
      }
      if (gameProps.obstacles.lastAdded == null)
        gameProps.obstacles.lastAdded = time - gameProps.obstacles.interval;
      if (time - gameProps.obstacles.lastAdded >= gameProps.obstacles.interval) {
        const obstacle = {};
        obstacle.element = document.createElement('div');
        obstacle.element.classList.add('game-obstacle');
        obstacle.element.style.setProperty('--gameFieldWidth', gameProps.field.width + 'px');
        obstacle.element.style.setProperty('--width', gameProps.obstacles.width + 'px');
        obstacle.element.style.setProperty('--height', gameProps.obstacles.height + 'px');
        obstacle.angle = Math.random() * 360 - 180;
        obstacle.element.style.setProperty('--angle', obstacle.angle + 'deg');
        obstacle.rotation = Math.random() * 360 * 4 - 360 * 2;
        obstacle.element.style.setProperty('--rotation', obstacle.rotation + 'deg');
        obstacle.startY =
          Math.random() * (gameProps.field.height + gameProps.obstacles.height) -
          gameProps.obstacles.height / 2;
        obstacle.element.style.setProperty('--StartY', obstacle.startY + 'px');
        obstacle.endY =
          Math.random() * (gameProps.field.height + gameProps.obstacles.height) -
          gameProps.obstacles.height;
        obstacle.element.style.setProperty('--EndY', obstacle.endY + 'px');
        obstacle.element.style.setProperty('--duration', gameProps.obstacles.duration + 'ms');
        obstacle.collision = new SAT.Box(
          new SAT.Vector(gameProps.field.width, obstacle.startY),
          gameProps.obstacles.width,
          gameProps.obstacles.height
        ).toPolygon();
        obstacle.collision.translate(
          -gameProps.obstacles.width / 2,
          -gameProps.obstacles.height / 2
        );
        obstacle.collision.rotate(-1 * obstacle.angle * (Math.PI / 180));
        obstacle.collision.translate(gameProps.obstacles.width / 2, gameProps.obstacles.height / 2);
        gameProps.obstacles.lastAdded = time;
        obstacle.addedAt = time;
        obstacle.destroyAt = time + gameProps.obstacles.duration;
        gameProps.obstacles.parent.appendChild(obstacle.element);
        gameProps.obstacles.elements.push(obstacle);
      }
      gameProps.obstacles.elements.forEach((v) => {
        if (time > v.destroyAt) {
          v.element.remove();
          gameProps.obstacles.elements = gameProps.obstacles.elements.filter((w) => w !== v);
        }
      });
      gameProps.obstacles.elements.forEach((v) => {
        const transformRatio = (time - v.addedAt) / gameProps.obstacles.duration;
        const timePassed = time - gameProps.lastTime;
        v.collision.setOffset(
          new SAT.Vector(
            -transformRatio * (gameProps.field.width + gameProps.obstacles.width),
            transformRatio * (v.endY - v.startY)
          )
        );
        v.collision.translate(-gameProps.obstacles.width / 2, -gameProps.obstacles.height / 2);
        v.collision.rotate(-timePassed * v.rotation);
        v.collision.translate(gameProps.obstacles.width / 2, gameProps.obstacles.height / 2);
        const tmp = gameProps.hit;
        gameProps.hit =
          (SAT.testPolygonPolygon(v.collision, gameProps.arrow.collision, new SAT.Response()) ||
            gameProps.hit) &&
          !gameProps.wasHit;
        if (gameProps.hit && !tmp) {
          v.element.style.backgroundColor = '#f00';
        }
      });
    }
    gameProps.lastTime = time;
    checkbox.checked = true;
    requestAnimationFrame(gameUpdate);
  }
</script>

<svelte:window
  on:keydown={handleKeyDown}
  on:keyup={(e) => {
    if (Object.keys(gameProps.keysPressed).includes(e.key)) gameProps.keysPressed[e.key] = false;
  }}
/>

{#if browser}
<header
  bind:this={header}
  title={window.CSS.supports(
    `(backdrop-filter:blur(10px)) or (-webkit-backdrop-filter:blur(10px)) or (-moz-backdrop-filter:blur(10px)`
  )
    ? ''
    : 'Firefoxをお使いの方はabout:configを開いてbackdrop-filterを有効にすると他のブラウザーと同じ見た目にすることができます。'}
  style="--itemsCount: {contents.items.length};"
>
  <Picture
    click={() =>
      location.pathname == '/' && location.hash == ''
        ? triggerSmoothScroll('top')
        : location.assign(location.origin)}
    title="クリックすると{location.pathname == '/' && location.hash == ''
      ? 'ページの先頭'
      : 'トップページ'}に移動します"
    pictureClass="header_picture"
    imgClass="header_logo"
    imageId={contents.imageId}
    width={contents.aspectRatio.width}
    height={contents.aspectRatio.height}
  />
  <input
    type="checkbox"
    class="ui_button header_button_checkbox"
    checked
    name="header_button_checkbox"
    id="header_button_checkbox"
    bind:this={checkbox}
  />
  <label
    for="header_button_checkbox"
    class="header_button"
    title="クリックするとナビゲーションを開閉できます"
  >
    <div
      class="header_button_svg-wrapper"
      style="--arrow-x:{gameProps.arrow.x}px;--arrow-y:{gameProps.arrow.y}px;--arrow-r:{gameProps
        .arrow.r}deg;"
      bind:this={gameProps.arrow.element}
    >
      <svg class="header_button_svg" viewbox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
          bind:this={gameProps.arrow.svgElement}
          stroke="#444"
        />
      </svg>
    </div>
  </label>
  <nav class="header_navigation">
    <label for="header_button_checkbox" class="header_navigation_close_button">
      <span class="header_navigation_close_button_text">
        <span class="break-scope">ナビゲーション</span>を<span class="break-scope">閉じる</span>
      </span>
      <svg class="header_navigation_close_button_svg" viewbox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        />
      </svg>
    </label>
    <div
      class="header_close_area"
      on:click={() => (checkbox.checked = false)}
      on:touchstart={() => (checkbox.checked = false)}
    />
    {#each contents.items as item}
      <div class="header_navigation_list_items" on:click={() => triggerSmoothScroll(item.id)}>
        {item.label}
      </div>
    {/each}
    <div class="header_button_dummy">
      <svg class="header_button_svg" viewbox="0 0 24 24" fill="white" />
    </div>
  </nav>
</header>
{/if}
<div
  class="game-background"
  bind:this={gameProps.backgroundElement}
  style="--bg: {gameProps.hit ? '#f73f22' : '#000'}"
/>
<div bind:this={gameProps.obstacles.parent} />

<!-- <div class="game-debug">{gameProps.debug ? JSON.stringify(gameProps.debug) : ''}</div> -->
<style lang="stylus">
:root
  --base-size calc(3.5rem + env(safe-area-inset-top))
  --base-size-vw 1vw
  --navigation-width 70vw
  --ui-bg rgba(255,255,255,0.7)
  @supports not ((backdrop-filter blur(10px)) or (-webkit-backdrop-filter blur(10px)) or (-moz-backdrop-filter blur(10px)))
    --ui-bg #fffe
  --ui-bg-hover #fff
  --ui-bg-focus #333
  --ui-over-text-color #000
  --ui-over-bg #222
  --ui-over-bg-hover #888
  --ui-over-text-hover-color #000
  --ui-text-color #FFF
  --ui-text-hover-color #000

vendor(prop, args)
  {prop} args
  -webkit-{prop} args
  -moz-{prop} args

vendorarg(prop, arg)
  {prop} arg
  {prop} -webkit-+arg
  {prop} -moz-+arg

:global(main)
  margin-top: var(--base-size)

.break-scope
  display inline-block
  white-space nowrap

header
  position fixed
  top 0
  display flex
  align-items center
  justify-content space-between
  transform translateZ(999999999px)
  width 100%
  padding calc(var(--base-size) / 6) calc(var(--base-size) / 2 + env(safe-area-inset-right)) calc(var(--base-size) / 6) calc(var(--base-size) / 2 +  env(safe-area-inset-left))
  height var(--base-size)
  box-sizing border-box
  background-color var(--ui-bg)
  color var(--text-color)
  @media (prefers-color-scheme: dark)
    background-color var(--ui-bg)
    color var(--text-color)
  vendor(backdrop-filter, blur(10px))
  z-index 1000

.game-debug
  position fixed
  background-color #fff8
  z-index 10000000

.game-background
  position fixed
  z-index 10
  opacity 0
  pointer-events none
  height 100vh
  width 100%
  background-color var(--bg)
  transition opacity 1s ease 1s
:global(.game-background.shown)
  opacity 0.5 !important

:global(.game-obstacle)
  position fixed
  z-index 20000
  pointer-events none
  width var(--width)
  height var(--height)
  background-color #fff
  top 0
  right 0
  transform translateX(var(--width)) rotate(var(--angle))
  animation move-obstacle var(--duration) linear both

@keyframes -global-move-obstacle
  from
    transform translate(var(--width), var(--StartY)) rotate(var(--angle))
  to
    transform translate(calc(var(--gameFieldWidth) * -1), var(--EndY)) rotate(calc(var(--rotation) + var(--angle)))

:global(.header_logo)
  width auto
  height calc(var(--base-size) + env(safe-area-inset-top) - (var(--base-size) / 3))
  background-color #fff0
  cursor pointer

:global(.header_picture, .header_logo)
  z-index 7000

.header_button
  margin 0
  position fixed
  top 0
  right 0
  z-index 7000
  border none
  box-sizing border-box
  border-radius: calc(var(--base-size) / 6) 0 0 calc(var(--base-size) / 6)
  height var(--base-size)
  display inline-flex
  align-items center
  justify-content center
  background-color #444
  cursor pointer
  transition-property padding
  transition-duration 200ms
  transition-delay 0ms
  transition-timing-function ease-out
  @media screen and (orientation: landscape)
    &:hover
      background-color #555

.header_button_dummy
  margin 0
  z-index 6000
  border none
  box-sizing border-box
  cursor pointer
  height var(--base-size)
  display inline-flex
  align-items center
  justify-content center
  background-color var(--ui-over-bg)
  @media screen and (orientation: portrait)
    display none

@css{
  .header_button, .header_button_dummy{
    padding: 0 max(env(safe-area-inset-right), calc(var(--base-size) / 2)) 0 calc(var(--base-size) / 2);
  }
  #header_button_checkbox:checked ~ .header_button{
    padding: 0 calc(var(--base-size) / 2) 0;
  }
}

.header_button_svg-wrapper
  display flex
  justify-content center
  align-items center
  height 100%
  z-index 8000
  transform translate(var(--arrow-x), var(--arrow-y)) rotate(var(--arrow-r))

.header_button_svg
  margin auto 0
  height 60%
  transform translate(0, -2%)
  z-index 8000
  fill white
  pointer-events none
  animation-name derotate_svg
  animation-duration 200ms
  animation-timing-function ease-out
  animation-delay 200ms
  animation-fill-mode both

.header_close_area
  display none
  position absolute
  background-color transparent
  cursor pointer
  height 100%
  width 100%
  left -100%
  top 0

.header_button_checkbox
  display none

.header_navigation
  display flex
  width var(--navigation-width)
  z-index 6000
  font-size var(--base-size-vw)
  position fixed
  top 0
  right 0
  background-color var(--ui-over-bg)
  @media screen and (orientation: portrait)
    flex-direction column
    width 50vw
    font-size calc(var(--base-size) / 3)
    height 100vh
  @media screen and (orientation: landscape)
    border-radius: calc(var(--base-size) / 6) 0 0 calc(var(--base-size) / 6)
  animation-name fold_navigation
  animation-duration 200ms
  animation-timing-function ease-out
  animation-fill-mode both

.header_navigation_list_items
  display block
  width 100%
  background-color transparent
  cursor pointer
  height var(--base-size)
  line-height var(--base-size)
  margin 0
  padding 0
  border none
  text-align center
  color var(--ui-text-color)

  &:last-child
    @media screen and (orientation: landscape)
      padding-right env(safe-area-inset-right)

  @media screen and (orientation: portrait)
    &:nth-last-child(2):after
      content ''
      position absolute
      display block
      background-color var(--ui-text-color)
      height 1px
      left calc(50vw * 0.05)
      transform translate(0, calc(100% - 1px))
      width calc(50vw * 0.9)

  &:hover
    background-color var(--ui-over-bg-hover)

  &+&:not(:nth-child(2)):before
    content ''
    position absolute
    display block
    background-color var(--ui-text-color)
    @media screen and (orientation: landscape)
      width 1px
      top calc(var(--base-size) * 0.1)
      transform translate(-0.5px, 0)
      height calc(var(--base-size) * 0.8)
    @media screen and (orientation: portrait)
      height 1px
      left calc(50vw * 0.05)
      transform translate(0, -0.5px)
      width calc(50vw * 0.9)

.header_navigation_close_button
  display flex
  align-items center
  cursor pointer
  margin 0
  line-height calc(var(--base-size) / 2)
  font-weight normal
  box-sizing border-box
  color var(--ui-text-color)
  &:hover
    background-color #ccc
    & .header_navigation_close_button_svg
      fill #ff0200
  @media screen and (orientation: landscape)
    border-radius: calc(var(--base-size) / 6) 0 0 calc(var(--base-size) / 6)
    padding 0 1ch 0
  @media screen and (orientation: portrait)
    height var(--base-size)
    padding-left 1.5ch
    border-bottom solid 1px

.header_navigation_close_button_text
  display flex
  align-items center
  @media screen and (orientation: portrait)
    display none

.header_navigation_close_button_svg
  height 60%
  z-index 8000
  fill white
  transition fill 150ms ease-in-out 0s
  @media screen and (orientation: landscape)
    display none

#header_button_checkbox:checked ~ .header_navigation
  animation-name expand_navigation
  animation-duration 200ms
  animation-timing-function ease-out
  animation-delay 150ms
  animation-fill-mode both
  & .header_close_area
    display block

#header_button_checkbox:checked ~ .header_button svg
  animation-name rotate_svg
  animation-duration 150ms
  animation-timing-function ease-in
  animation-delay 0ms
  animation-fill-mode both

#header_button_checkbox:checked ~ .header_button
  transition-delay 150ms
  // @media screen and (orientation: landscape)
  //   animation-name expand_button
  //   animation-duration 200ms
  //   animation-timing-function ease-out
  //   animation-delay 150ms
  //   animation-fill-mode both

@keyframes rotate_svg
  0%
    transform rotate(45deg)
  100%
    transform rotate(270deg)

@keyframes derotate_svg
  0%
    transform rotate(270deg)
  100%
    transform rotate(45deg)

@media screen and (orientation: landscape)
  @keyframes expand_button
    0%
      transform translate(0, 0)
    100%
      transform translate(calc(var(--navigation-width) * -1), 0)

  @keyframes fold_button
    0%
      transform translate(calc(var(--navigation-width) * -1), 0)
    100%
      transform translate(0, 0)

  @keyframes expand_navigation
    0%
      transform translate(100%, 0%)
    100%
      transform translate(0%, 0%)

  @keyframes fold_navigation
    0%
      transform translate(0%, 0%)
    100%
      transform translate(100%, 0%)

@media screen and (orientation: portrait)
  @keyframes expand_navigation
    0%
      transform translate(100%, 0%)
    100%
      transform translate(0%, 0%)

  @keyframes fold_navigation
    0%
      transform translate(0%, 0%)
    100%
      transform translate(100%, 0%)
</style>
