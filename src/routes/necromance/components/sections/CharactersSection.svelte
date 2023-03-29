<script>
  import Heading from '../Heading.svelte';
  import SmileNecro from '../../img/Necromance_smile_alpha_shadow.png';
  import Section from '../Section.svelte';
</script>

<Section>
  <div class="characters-section">
    <div class="content">
      <Heading title="CHARACTERS" subtitle="キャラクター" align="center" />
      <div class="character">
        <div class="character__contents">
          <div class="character__figure">
            <img src={SmileNecro} alt="笑顔のネクロマンスちゃん" />
          </div>
          <div class="character__description">
            <h3 class="character__spell">NECROMANCE</h3>
            <p class="character__name">ネクロマンス</p>
            <p class="character__intro">
              胸元と頭のリボンがトレードマークの女の子。<br />
              14歳くらいに見える。<br />
              尊大な態度とそれに不釣り合いな体躯で、学者の前に現れる。<br />
              とある魔女を恨み、復讐を誓っているらしいが——。<br />
            </p>
          </div>
        </div>
      </div>
      <p class="characters-section__more">さらに個性豊かなキャラクターが続々登場！</p>
    </div>
  </div>
</Section>

<style lang="stylus">

@import '../../styles/_func.styl'
@import '../../styles/_break.styl'
@import '../../styles/_layouts.styl'

.characters-section {
  text-align: center;
  &__more {
    margin-top: 2em;
    color: #fff;
    font-size: 1.5em;
  }
}

.character {
  text-align: left;
  align-items: center;
  display: inline-block;
  background-color: #453e62;
  clip-path: polygon(5% 0, 0 50%, 8% 100%, 97% 100%, 100% 50%, 95% 0);
  position: relative;

  +sm() {
    clip-path: none;
    border-radius: 20px;
  }

  &__contents {
    align-items: center;
    display: grid;
    z-index: 1;
    padding: 0px 40px;
    grid-template-columns: minmax(auto, 250px) 1fr;
    gap: 40px;
    +tab() {
      gap: 10px;
    }
    +sm() {
      grid-template-columns: 1fr;
      padding: 30px 0;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  &::before {
    position: absolute;
    display: inline-block;
    content: "";
    top: 12px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    clip-path: polygon(5% 0, 0 50%, 8% 100%, 97% 100%, 100% 50%, 95% 0);
    background-color: #aba2cd;
    z-index: -2;
    +sm() {
      clip-path: none;
    }
  }

  &::after {
    position: absolute;
    display: inline-block;
    content: "";
    top: 14px;
    left: 14px;
    right: 14px;
    bottom: 14px;
    clip-path: polygon(5% 0, 0 50%, 8% 100%, 97% 100%, 100% 50%, 95% 0);
    background-color: #453e62;
    z-index: -1;
    +sm() {
      clip-path: none;
    }
  }

  &__figure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    grid-column: 1 / 2;
    +sm() {
      grid-row: 1 / 2;
    }
    img {
      max-height: 350px;
    }
  }

  &__description {
    color: #fff;
    +sm() {
      grid-row: 2 / 3;
      margin: -200px 20px 0 20px;
      padding: 20px;
      background-color: rgba(#333, 0.85);
      border-radius: 20px;
    }
  }

  &__spell {
    font-family: "buena-park-jf", serif;
    text-transform: uppercase;
    font-size: 2em;
    +sm() {
      font-size: 1.5em;
    }
  }

  &__name {
    font-weight: bold;
  }

  &__intro {
    margin-top: 2em;
  }
}
</style>
