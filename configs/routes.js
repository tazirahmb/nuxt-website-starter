const routes = {
	HOME: {
		NAME: 'HOME',
		PATH: '/',
	},
	PAGE: {
		NAME: 'article',
		PATH: (page) => `/article/${page}`,
	},
	POST: {
		NAME: 'article-slug',
		PATH: (slug) => `/article/${slug}`,
	},
	SECTION: {
		NAME: 'section',
		PATH: (section) => `/${section}`,
	},
};

export default routes;
