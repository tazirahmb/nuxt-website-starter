<template>
	<footer>
		<b-container v-if="footerData !== null">
			<b-row align-h="center">
				<b-col md="12">
					<nuxt-content :document="footerData" id="about" />
					<p id="copy">&copy; Z R O K U, {{ thisYear }}</p>
					<div class="socmed">
						<a v-for="data in footerData.social" :key="data.name" :href="data.link">
							<fa class="icon" :icon="data.icon"></fa>
						</a>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import moment from 'moment';

export default {
	name: 'footer',
	data: function () {
		return {
			footerData: null,
			thisYear: moment().format('YYYY'),
		};
	},
	components: {
		fa: FontAwesomeIcon,
	},
	async fetch() {
		this.footerData = await this.$content('footer').fetch();
	},
};
</script>

<style lang="scss" scoped>
footer {
	background-color: $accentLighter;
	padding-top: 32px;

	*::selection {
		background-color: $primaryLighter;
		color: white;
	}

	*::-moz-selection {
		background-color: $primaryLighter;
		color: white;
	}

	.socmed,
	p {
		display: inline-block;
	}

	#about {
		display: block;
		margin-bottom: 32px;
		width: 75%;
		width: 75%;
	}

	#copy {
		border-radius: 4px 4px 0 0;
		padding: 8px;
		padding-bottom: 16px;
		margin: 0;
		background-color: $primary;
		color: white;
		font-weight: bold;
		float: right;
	}
	.socmed {
		margin-top: 4px;

		a {
			.icon {
				margin: 0 8px;
				color: $primary;
			}

			&:hover {
				border: 4px solid $primary;
				border-radius: 4px;
				background-color: $primary;

				.icon {
					color: $accentLighter;
				}
			}
		}
	}
}
@media only screen and (orientation: portrait) {
	.col-md-12 {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: vertical;
		-moz-box-orient: vertical;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		/* optional */
		-webkit-box-align: start;
		-moz-box-align: start;
		-ms-flex-align: start;
		-webkit-align-items: flex-start;
		align-items: flex-start;
	}

	.socmed,
	p {
		display: block !important;
		text-align: center;
		margin-top: 8px;
		margin-bottom: 0;
	}

	#about {
		width: 100% !important;
	}

	#copy {
		padding: 8px !important;
		padding-bottom: 16px !important;
		width: 100%;

		// change order
		-webkit-box-ordinal-group: 2;
		-moz-box-ordinal-group: 2;
		-ms-flex-order: 2;
		-webkit-order: 2;
		order: 2;
	}

	.socmed {
		width: 100%;
		margin-bottom: 16px;

		// change order
		-webkit-box-ordinal-group: 1;
		-moz-box-ordinal-group: 1;
		-ms-flex-order: 1;
		-webkit-order: 1;
		order: 1;
	}
}
</style>