<template>
	<div class="post">
		<nuxt-link :to="{ name: postPageLink, params: { slug: post.slug } }">
			<h4 class="animated fadeInUp post-title" v-html="post.title"></h4>
		</nuxt-link>
		<p class="post-desc animated fadeInUp" v-html="post.description || ''" />
	</div>
</template>

<script>
import { ROUTES } from '~/configs';

export default {
	name: 'ArticlePost',
	props: {
		post: Object,
	},
	data: function () {
		return {
			postPageLink: ROUTES.POST.NAME,
		};
	},
};
</script>

<style lang="scss" scoped>
// individual post style
.post {
	padding-left: 24px;
	.post-title {
		margin-bottom: 8px;
		animation-delay: 0.2s;
		animation-duration: 0.75s;
		display: inline-block;
	}

	.post-desc {
		// border-left: 1px solid #ccc;
		// font-style: italic;
		animation-delay: 0.5s;
		animation-duration: 0.75s;
		margin-bottom: 24px;
		&:after {
			content: ''; /* This is necessary for the pseudo element to work. */
			display: block; /* This will put the pseudo element on its own line. */
			width: 32px; /* Change this to whatever width you want. */
			padding-top: 8px; /* This creates some space between the element and the border. */
			// transform: translate(-8px, 0);
			border-bottom: 1px solid #ccc; /* This creates the border. Replace black with whatever color you want. */
		}
	}
}
</style>