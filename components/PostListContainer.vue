<template>
	<fragment>
		<section v-for="(post, i) in postList" :key="i">
			<h3
				class="animated fadeInUp"
				v-if="
					i == 0 ||
					formatMonthAndYear(postList[i].date) !==
						formatMonthAndYear(postList[i - 1].date)
				"
			>
				{{ formatMonthAndYear(post.date) }}
			</h3>
			<ArticlePost :post="post" />
		</section>
		<!-- Pagination here -->
	</fragment>
</template>

<script>
import ArticlePost from '../components/ArticlePost';
import moment from 'moment';

export default {
	name: 'PostListContainer',
	components: {
		ArticlePost,
	},
	props: {
		postList: Array,
	},
	methods: {
		formatMonthAndYear(date) {
			return moment(date).locale('id').format('MMMM YYYY');
		},
	},
};
</script>

<style lang="scss" scoped>
section {
	h3 {
		margin-bottom: 24px;
	}

	&:not(:first-child) {
		h3 {
			margin-top: 48px;
		}
	}
}
</style>