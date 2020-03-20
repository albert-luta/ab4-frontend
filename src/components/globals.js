import Vue from 'vue';

// Static global components for the landing page(Login)
import BaseButton from './BaseButton.vue';
import BaseInput from './BaseInput.vue';

Vue.component('BaseButton', BaseButton);
Vue.component('BaseInput', BaseInput);

// Dynamic global components for the rest of the pages
Vue.component('BaseSearchForm', () => import(/* webpackChunkName: "Map" */ './BaseSearchForm.vue'));
