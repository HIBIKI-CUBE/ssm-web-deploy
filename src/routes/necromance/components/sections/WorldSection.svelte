<script>
  import Line from '../Line.svelte';
  import EnemiesImg from '../../img/enemies.png';
  import Doya from '../../img/necromance_doya.png';
  import Heading from '../Heading.svelte';
  import Section from '../Section.svelte';
</script>

<Section>
  <div class="world-section">
    <div class="content">
      <Heading title="World" subtitle="ワールド" />
      <div class="world-section__block01">
        <div class="filled-sentence">
          <Line align="left" slideIn="left" string="伝承の時代から 幾星霜──" />
          <Line
            align="left"
            slideIn="left"
            string="何人も寄りつかぬ 険阻な山々に囲まれた 広大な樹林、 “フレーダーマオスの森”。"
          />
          <Line
            align="left"
            slideIn="left"
            string="屈強な木々が生い茂る その森には、 だれもが怖じ恐れる 妖女が棲むという 言伝がある。"
          />
          <Line
            align="left"
            slideIn="left"
            string="彼の者は人々に、 畏怖を込めて こう呼ばれた── “魔女”と。"
          />
        </div>
        <div class="world-section__block01__img">
          <img src={EnemiesImg} alt="敵" />
        </div>
      </div>
      <div style="height: 80px;" />
      <div class="world-section__block02">
        <div class="world-section__block02__img">
          <img src={Doya} alt="ドヤ顔のネクロマンスちゃん" />
        </div>
        <div class="filled-sentence">
          <Line
            align="right"
            slideIn="right"
            string="そんな魔女伝説の調査のため、 森を訪れた 民俗学者のあなた。"
          />
          <Line
            align="right"
            slideIn="right"
            string="しかし現れたのは、 『自称』天才魔女の 女の子！？"
          />
          <Line
            variant="necro"
            align="right"
            slideIn="right"
            string="アンタ、 魔女にキョーミ あるんでしょ？"
          />
          <Line
            variant="necro"
            align="right"
            slideIn="right"
            string="いいわ、アタシが連れて ってあげる！"
          />
          <Line
            align="right"
            slideIn="right"
            string="謎の少女と学者は 魔女伝説の全容を 明らかにするため、 魔物うごめく 森の奥を目指す──"
          />
        </div>
      </div>
    </div>
  </div>
</Section>

<style lang="stylus">
  @import '../../styles/_break.styl'
  @import '../../styles/_layouts.styl'

  .world-section {
	&__block01 {
		display: flex;
		position: relative;
		.filled-sentence {
			:global(p:first-of-type) {
				+sm() {
					margin-top: 10em;
				}
			}
			:global(p + p) {
				margin-top: 2em;
				+sm() {
					margin-top: 1em;
				}
			}
		}
		&__img {
			position: absolute;
			top: 0;
			right: 0;
			z-index: -2;
			img {
				max-height: 250px;
			}
		}
	}
	&__block02 {
		display: flex;
		justify-content: flex-end;
		position: relative;
		.filled-sentence {
			:global(p:first-of-type) {
				+sm() {
					margin-top: 10em;
				}
			}
			:global(p + p) {
				margin-top: 2em;
				+sm() {
					margin-top: 1em;
				}
			}
		}
		&__img {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -2;
			img {
				max-height: 400px;
			}
		}
	}
}
</style>
