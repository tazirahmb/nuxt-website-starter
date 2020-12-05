<template>
	<div>
		<b-row align-h="center" align-v="center" class="title">
			<b-col md="10">
				<h1 class="animated fadeIn" v-html="pageData.title"></h1>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col md="10" tag="article">
				<nuxt-content :document="pageData" class="animated fadeIn" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import { CONSTANTS } from '~/configs';

const { PER_PAGE } = CONSTANTS;

export default {
	name: 'Page',
	data() {
		return {
			perPage: PER_PAGE,
			isLoading: false,
		};
	},
	async asyncData({ $content, params }) {
		const { section } = params;

		const pageData = await $content('section', section).fetch();

		return { pageData };
	},
	methods: {
		toggleLoading: function () {
			this.isLoading = !this.isLoading;
		},
	},
};
</script>

<style lang="scss" scoped>
.title {
	// height: 50vh;
	margin: 80px 0 32px;

	h1 {
		animation-delay: 0.2s;
		margin: 0;

		&::after {
			content: ''; /* This is necessary for the pseudo element to work. */
			display: block; /* This will put the pseudo element on its own line. */
			width: 64px; /* Change this to whatever width you want. */
			margin: 16px 0;
			// transform: translate(-8px, 0);
			border-bottom: 4px solid $accentColor; /* This creates the border. Replace black with whatever color you want. */
		}
	}
}

article {
	min-height: 60vh;
	&::before {
		content: ''; /* This is necessary for the pseudo element to work. */
		display: block; /* This will put the pseudo element on its own line. */
		width: 100%; /* Change this to whatever width you want. */
		margin: 16px auto;
		// transform: translate(-8px, 0);
		border-top: 2px dashed $primaryLight; /* This creates the border. Replace black with whatever color you want. */
	}
	.nuxt-content {
		animation-delay: 0.2s;
	}
}

@media only screen and (max-width: 600px) {
	.title {
		h1 {
			font-size: 40px;
		}
	}
	p {
		font-size: 18px;
	}
}
</style>