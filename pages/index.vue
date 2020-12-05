<template>
	<b-row align-v="center" align-h="center">
		<b-spinner type="grow" label="Tunggu sebentar..." color="dark"></b-spinner>
	</b-row>
</template>

<script>
import { ROUTES } from '~/configs';

export default {
	middleware({ redirect }) {
		return redirect('301', ROUTES.PAGE.PATH('1'));
	},
};
</script>

<style lang="scss" scoped>
.row {
	height: 100vh;
	background-color: white;
}
</style>