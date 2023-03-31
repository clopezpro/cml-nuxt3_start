import { readonly, ref } from "vue";
const visible = ref(false);
const message = ref(null);
const title = ref(null);
let resolveFn = null;
export const useConfirm = ()=> {
	const ask = (data = { message: null, title: null }) => {
		return new Promise((resolve) => {
			visible.value = true;
			message.value = data.message;
			title.value = data.title;
			resolveFn = resolve;
		});
	};
	const tell = (value) => {
		visible.value = false;
		resolveFn(value);
	};
	return {
		visible: readonly(visible),
		title,
		message,
		ask,
		tell,
	};
}
