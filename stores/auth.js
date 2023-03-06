import { defineStore } from "pinia";

import decode from "jwt-decode";

export const useAuthUserStore = defineStore("useAuthUserStore ", {
	state: () => ({
		nameToken: "token-dssd",
		loggedIn: false,
		user: null,
		token:null,
	}),
	actions: {
		async Logout(redirect=false) {
			/* alert('') */
			this.user = null;
			const token = useCookie("token");
			token.value = null;
			if(redirect)
				return await navigateTo("/login");
		},
		async verifyToken() {
			try {
				const token = useCookie("token");
				if (token.value == null) {
					 this.Logout();
					 return  false;
				}
				let us = decode(token.value).data;
				this.user = us;
				this.token = token.value;
				this.loggedIn = true;
				return true;
			} catch (err) {
				this.msjServer.show = true;
				this.msjServer.variant = "error";
				this.msjServer.message = err;
			}
		},
	},
	getters: {
		getToken() {
			return this.user.token;
		},
		getRoutesEst() {
			return this.routes;
		},
		isAuth() {
			return this.loggedIn;
		},
	},
});