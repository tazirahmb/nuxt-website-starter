<template>
	<b-pagination-nav
		:base-url="baseUrl"
		:number-of-pages="totalPages"
		use-router
		:aria-controls="aria"
		first-number
		last-number
		:hide-ellipsis="true"
		pills
		align="center"
	></b-pagination-nav>
</template>

<script>
import { ROUTES, IMAGES } from '~/configs';

export default {
	name: 'Pagination',
	data: function () {
		return {
			page: this.currentPage,
			baseUrl: ROUTES.PAGE.PATH(''),
		};
	},
	props: {
		currentPage: Number,
		totalPages: Number,
		aria: String,
		handlePageClick: Function,
	},
};
</script>

<style lang="scss">
.pagination {
	// ul

	.page-item {
		// li
		margin: 0 0 0 8px;

		&.active .page-link {
			background-color: $primary;
			color: white;
		}

		&.disabled:not([role='separator']) .page-link {
			color: transparent;
		}

		.page-link {
			border: none;
			color: $primary;
			// a
			&:hover {
				background-color: $accentLighter;
				color: $fontColor;
				text-decoration: none;
				border-bottom: none;
			}
		}
	}
}
</style>