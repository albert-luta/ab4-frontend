import Vue from 'vue';

// Static global components for the landing page(Login)
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

Vue.component('BaseButton', BaseButton);
Vue.component('BaseInput', BaseInput);

// Dynamic global components for the rest of the pages
Vue.component('BasePopup', () =>
	import(/* webpackChunkName: "Map" */ '@/components/BasePopup.vue')
);
