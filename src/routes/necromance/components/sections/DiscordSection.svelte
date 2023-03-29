<script>
  import Button from '../Button.svelte';
  import Heading from '../Heading.svelte';
  import Line from '../Line.svelte';
  import Section from '../Section.svelte';
</script>

<Section>
  <div class="discord-section">
    <div class="content">
      <Heading title="DISCORD" subtitle="ディスコード" />
      <div class="filled-sentence">
        <Line
          align="center"
          slideIn="left"
          string="Discordの公式コミュニティー では 開発陣より情報を 先行公開中！"
        />
        <Line align="center" slideIn="left" string="参加して最新情報を ゲットしよう！" />
      </div>
      <div style="margin-top: 60px">
        <Button variant="discord" href="https://discord.gg/FvZvX8gEDx">サーバーに参加する</Button>
      </div>
    </div>
  </div>
</Section>

<style lang="stylus">

@import '../../styles/_layouts.styl'

.discord-section {
	text-align: center;
	.filled-sentence {
		:global(p + p) {
			margin-top: 2em;
		}
	}
}
</style>
