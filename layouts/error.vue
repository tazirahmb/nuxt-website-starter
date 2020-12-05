<template>
	<transition name="fade" mode="out-in">
		<div id="notFound">
			<div class="placebo">
				<h1 v-if="error.statusCode === 404">page not found</h1>
				<h1 v-else>An error occured</h1>
				<nuxt-link to="/">Kembali ke halaman awal</nuxt-link>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: ['error'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#notFound {
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	background: blue;
	width: 100%;
	height: 100%;
}
.placebo {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: auto;
	height: 400px;
	margin: auto;
	text-align: center;
	background-color: #fff;
	padding: 100px 0;
}

.placebo h1 {
	color: var(--fontColor);
}
</style>
