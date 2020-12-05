<template>
	<header>
		<b-navbar toggleable="md" class="pt-0">
			<b-navbar-brand href="/" class="logo-container">
				<img src="@/assets/logo_primary.svg" />
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item @click.prevent v-for="r in route" :key="r.index">
						<nuxt-link :to="r.path" class="navigation">{{ r.name }}</nuxt-link>
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</header>
</template>

<script>
import { ROUTES, IMAGES } from '~/configs';
import titleCase from 'voca/title_case';

export default {
	name: 'Header',
	data: function () {
		return {
			route: [
				{
					name: titleCase(ROUTES.PAGE.name),
					path: ROUTES.PAGE.PATH(1),
				},
			],
		};
	},
	async fetch() {
		const section = await this.$content('section').only(['title', 'slug']).fetch();
		const _section = [];
		section.map((s) => {
			_section.push({
				name: s.title,
				path: ROUTES.SECTION.PATH(s.slug),
			});
		});

		this.route = [...this.route, ..._section];
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
	width: 100%;
	margin-bottom: 32px;

	[aria-label='Toggle navigation'] {
		border: none;
	}

	.navbar-nav {
		margin: auto 0;

		.nav-item {
			margin-left: 0;

			.nav-link {
				padding: 8px 16px !important;

				a {
					color: $fontColor;

					&:hover {
						text-decoration: none;
						border-bottom: none;
					}

					&.nuxt-link-exact-active {
						color: $primary;
						font-weight: bold;
					}
				}
			}
		}
	}

	.navbar-toggler {
		background-color: transparent;
		min-width: 0;
	}

	.logo-container {
		width: 72px;
		display: flex;
		height: 100%;
		background-color: white;
		// margin: 0 auto;
		img {
			height: 48px;
			margin: 8px auto;
		}

		&:hover {
			border: none;
			background-color: $accentLighter;
		}
	}
}

@media only screen and (max-width: 576px) {
	.navbar-nav {
		background-color: white;
		padding: 24px 0;
		border-bottom: 1px dashed $primary;
	}
}
</style>
