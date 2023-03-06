import {
	inputVue,
	Modal,
	inputDateRange,
	selectVue,
	VButton,
	tab,
	tabs,
	Icons,
} from "cml-components";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";
import "cml-components/dist/style.css";
export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("inputVue", inputVue);
	nuxtApp.vueApp.component("RotateLoader", RotateLoader);
	nuxtApp.vueApp.component("tabsVue", tabs);
	nuxtApp.vueApp.component("tabVue", tab);
	nuxtApp.vueApp.component("selectVue", selectVue);
	nuxtApp.vueApp.component("card-modal", Modal);
	nuxtApp.vueApp.component("inputDateRangeVue", inputDateRange);
	nuxtApp.vueApp.component("icon-vue", Icons);
	nuxtApp.vueApp.component("buttonVue", VButton);
});