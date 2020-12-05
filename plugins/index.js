import Vue from 'vue';
import Fragment from 'vue-fragment';
import '@fortawesome/fontawesome/styles.css';
import fontawesome from '@fortawesome/fontawesome';
import { faEnvelope, faRss, faCaretLeft, faCaretRight } from '@fortawesome/fontawesome-free-solid';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import Vuex from 'vuex';

// set up plugin
Vue.use(Vuex);
Vue.use(Fragment.Plugin);

// setup font awesome
fontawesome.config = {
	autoAddCss: false,
};

fontawesome.library.add(faEnvelope, faTwitter, faRss, faCaretLeft, faCaretRight);
