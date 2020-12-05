<template>
	<b-row align-h="center">
		<section id="hero-header-title">
			<p>"Hidup mungkin rumit, namun bahagia sederhana" - <b>Zroku</b></p>
		</section>
	</b-row>
</template>

<script>
export default {
	name: 'HeroImage',
};
</script>

<style lang="scss" scoped>
#hero-header-title {
	padding: 32px;
	margin-bottom: 32px;
	text-align: center;

	*::selection {
		background-color: $primaryLighter;
		color: white;
	}

	*::-moz-selection {
		background-color: $primaryLighter;
		color: white;
	}

	p {
		background-color: $accentLighter;
		padding: 8px;
		margin-bottom: 0;

		b {
			font-family: $displayFont;
		}
	}
}
</style>