/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import path from 'path';
import { CONSTANTS, ROUTES } from './configs';

export default {
	/*
	 ** Headers of the page
	 */
	env: {
		baseURL:
			process.env.NODE_ENV === 'production' ? CONSTANTS.WEBSITE_URL : 'http://localhost:3333',
	},
	head: {
		title: CONSTANTS.WEBSITE_TITLE,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			// eslint-disable-next-line quotes
			{ hid: 'description', name: 'description', content: CONSTANTS.WEBSITE_DESCRIPTION },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },

	/*
	 ** Global CSS
	 */
	css: ['@fortawesome/fontawesome/styles.css', '~/assets/main.css', '@/assets/css/style.scss'],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['~/plugins'],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxt/content',
		// Doc: https://bootstrap-vue.js.org/docs/
		'bootstrap-vue/nuxt',
		'@nuxtjs/dotenv',
		'@nuxtjs/feed',
		'@nuxtjs/style-resources',
		'nuxt-webfontloader',
		'@neneos/nuxt-animate.css',
	],
	styleResources: {
		scss: [
			'@/assets/css/utilities/_variables.scss',
			'@/assets/css/utilities/_fonts.scss',
			'@/assets/css/utilities/_animations.scss',
		],
	},
	webfontloader: {
		google: {
			families: ['Playfair Display', 'Montserrat:300,400,700', 'Zilla Slab'], //Loads Lato font with weights 400 and 700
		},
	},
	feed() {
		const baseUrlPost = CONSTANTS.WEBSITE_URL;
		const baseLinkFeedPost = '/feed/';
		const feedFormats = {
			rss: { type: 'rss2', file: 'index.xml' },
			json: { type: 'json1', file: 'feed.json' },
		};

		const { $content } = require('@nuxt/content');

		const createFeedArticles = async function (feed) {
			feed.options = {
				title: CONSTANTS.WEBSITE_TITLE,
				link: baseUrlPost,
				description: CONSTANTS.WEBSITE_DESCRIPTION,
				favicon: `${baseUrlPost}/favicon.ico`,
			};

			const fetchedVariable = ['title', 'description', 'date', 'slug', 'author'];

			const postList = await $content('posts')
				.only(fetchedVariable)
				.sortBy('date', 'desc')
				.fetch();

			postList.forEach((post) => {
				const url = baseUrlPost + ROUTES.POST.PATH(post.slug);

				feed.addItem({
					title: post.title,
					id: post.slug,
					link: url,
					date: new Date(post.date),
					description: post.description,
					content: post.description,
					author: post.author,
				});
			});
		};

		return Object.values(feedFormats).map(({ file, type }) => ({
			path: `${baseLinkFeedPost}/${file}`,
			type,
			create: (feed) => createFeedArticles(feed),
			cacheTime: 1000 * 60 * 15,
		}));
	},
	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	 ** Build configuration
	 */
	build: {},
};
