import { CONSTANTS } from '../configs';

export default async ($content, page, error) => {
	const currentPage = parseInt(page);

	const allPost = await $content('posts').fetch();

	const totalPost = allPost.length;

	// use Math.ceil to round up to the nearest whole number
	const lastPage = Math.ceil(totalPost / CONSTANTS.PER_PAGE);

	// use the % (modulus) operator to get a whole remainder
	const lastPageCount = totalPost % CONSTANTS.PER_PAGE;

	const skipNumber = () => {
		if (currentPage === 1) {
			return 0;
		}
		if (currentPage === lastPage) {
			return totalPost - lastPageCount;
		}
		return (currentPage - 1) * CONSTANTS.PER_PAGE;
	};

	const paginatedPost = await $content('posts')
		.only(['title', 'description', 'date', 'slug'])
		.sortBy('date', 'desc')
		.limit(CONSTANTS.PER_PAGE)
		.skip(skipNumber())
		.fetch();

	if (currentPage === 0 || !paginatedPost.length) {
		return error({ statusCode: 404, message: 'No articles found!' });
	}

	return {
		allPost,
		paginatedPost,
		totalPages: lastPage,
	};
};
