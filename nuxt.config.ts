// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"],
			},
		],
		"@nuxtjs/color-mode",
	],
	imports: {
		dirs: ["stores"],
	},
	colorMode: {
		classPrefix: "",
		classSuffix: "",
	},
	css: ["@/assets/css/main.css"],
	/* autoImports: ['defineStore', 'acceptHMRUpdate'], */
	runtimeConfig: {
		mongo: {
			IP: process.env.MONGO_IP,
			DB: process.env.MONGO_DB_NAME,
			PORT: process.env.MONGO_PORT,
			USER: process.env.MONGO_USER,
			PASS: process.env.MONGO_PASS,
		},
		SEED: process.env.SEED,
		PASS_TOKEN: process.env.PASS_TOKEN,
		NODE_ENV: process.env.NODE_ENV,
	},
});
