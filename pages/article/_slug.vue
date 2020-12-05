<template>
	<b-container>
		<b-row align-h="center" align-v="center" class="title">
			<b-col md="10">
				<h1 class="animated fadeIn" v-html="post.title"></h1>
				<h5 class="animated fadeIn">{{ formatDate(post.date) }}</h5>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col md="10" tag="article">
				<nuxt-content :document="post" class="animated fadeIn" />
				<div class="prevnext">
					<nuxt-link
						v-if="prevNext[0] !== null"
						:to="{ name: slugRoute, params: { slug: prevNext[0].slug } }"
					>
						<b-row align-v="center">
							<fa class="icon" :icon="['fa', 'caret-left']"></fa>
							{{ prevNext[0].title }}
						</b-row>
					</nuxt-link>
					<nuxt-link
						v-if="prevNext[1] !== null"
						:to="{ name: slugRoute, params: { slug: prevNext[1].slug } }"
					>
						<b-row align-h="end" align-v="center">
							{{ prevNext[1].title }}
							<fa class="icon" :icon="['fa', 'caret-right']"></fa>
						</b-row>
					</nuxt-link>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ROUTES, CONSTANTS } from '~/configs';
import moment from 'moment';

export default {
	name: 'post',
	data() {
		return {
			isLoading: this.$route.params.postData ? false : true,
			slugRoute: ROUTES.POST.NAME,
		};
	},
	components: {
		fa: FontAwesomeIcon,
	},
	methods: {
		formatDate(date) {
			return moment(date).format('YYYY-MM-DD');
		},
	},
	async asyncData({ $content, params }) {
		const { slug } = params;

		const post = await $content('posts').where({ slug }).fetch();

		const prevNext = await $content('posts')
			.only(['title', 'slug'])
			.sortBy('date', 'desc')
			.surround(slug)
			.fetch();

		return { post: post[0], prevNext };
	},
	head() {
		let post = this.post;
		return {
			title: post.title + ' | ' + CONSTANTS.WEBSITE_TITLE,
			meta: [
				{
					author: 'Zroku',
					title: post.title,
					hid: post.description,
					content: post.html,
				},
			],
			link: [`${CONSTANTS.WEBSITE_URL}${ROUTES.POST.PATH(post.slug)}`],
		};
	},
};
</script>

<style lang="scss" scoped>
.title {
	// height: 50vh;
	margin: 80px 0 32px;

	h1,
	p,
	h5 {
		// text-align: center;
		animation-delay: 0.2s;
	}

	h1 {
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

.prevnext {
	margin: 40px 0;

	a {
		&:hover {
			border-bottom: none;
			text-decoration: none;
		}

		&:first-child .row .icon {
			margin-right: 16px;
		}

		&:last-child .row {
			border-bottom: 2px dashed $primaryLight;
			text-align: right;
			.icon {
				margin-left: 16px;
			}
		}
	}

	.row {
		margin: 0;
		padding: 16px;
		width: 100%;
		border-top: 2px dashed $primaryLight;
		font-weight: bold;

		&:hover {
			background-color: $accentLighter;
			color: $fontColor;
			transition: 0.2s;
			cursor: pointer;
		}

		.icon {
			font-size: 24px;
		}
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
