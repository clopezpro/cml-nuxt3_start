
export const useAlertStore = defineStore("useAlert ", {
	state: () => ({
		show: false,
        title:null,
		variant: "info",
		message: null,
	}),
	actions: {
		setAlert(data) {
			this.title = data.title || 'Alert';
			this.show = data.show || false;
			this.variant = data.variant || "info";
			this.message = data.message || null;
		},
        close(){
            this.show=false;
            this.title = "Alert";
            this.variant='info';
            this.message='';
            
        }
	},
});
// 				this.setAlert(snackbar);    