<template>
	<div>
		<HeroImage />
		<b-row align-h="center">
			<b-col md="12" class="post-list">
				<PostListContainer :postList="paginatedPost" :count="allPost.length" />
			</b-col>
			<b-col md="12">
				<Pagination aria="Post-list" :total-pages="totalPages" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import HeroImage from '~/components/HeroImage';
import PostListContainer from '~/components/PostListContainer';
import Pagination from '~/components/Pagination';
import getContent from '~/middleware/getContent';
import { CONSTANTS } from '~/configs';

const { PER_PAGE } = CONSTANTS;

export default {
	name: 'Page',
	components: {
		HeroImage,
		PostListContainer,
		Pagination,
	},
	data() {
		return {
			perPage: PER_PAGE,
			isLoading: false,
		};
	},
	async asyncData({ $content, params, error }) {
		const { page } = params;

		const { allPost, paginatedPost, totalPages } = await getContent($content, page, error);

		return { allPost, paginatedPost, totalPages };
	},
	methods: {
		toggleLoading: function () {
			this.isLoading = !this.isLoading;
		},
	},
};
</script>

<style lang="scss" scoped>
.post-list {
	margin-bottom: 32px;
}
</style>