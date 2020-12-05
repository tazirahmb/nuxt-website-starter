<template>
	<div id="app">
		<!-- <loading v-bind:isLoading="isLoading" /> -->
		<b-container>
			<b-row align-h="center" id="main-content">
				<b-col md="10" class="pb-5">
					<Header />
					<nuxt />
				</b-col>
			</b-row>
		</b-container>
		<Footer />
	</div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
	name: 'app',
	components: {
		Header,
		Footer,
	},
	scrollToTop: true,
};
</script>

<style lang="scss" scoped>
#main-content {
	background-color: white;
}
</style>