import { reactive, ref } from "vue";
export const useFormLogin = () => {
    const useAlert = useAlertStore();
	const existUS = ref(false);
	const loading = ref(false); 
	const form = reactive({
		user: null,
		password: null,
		otherData: [],
	});
	const validUser = async () => {
		if (!form.user) {
			useAlert.setAlert({
				show: true,
				title: "Login",
				variant: "error",
				message: "No ingreso un usuario",
			});
			return false;
		}
        if (!form.password) {
			useAlert.setAlert({
				show: true,
				title: "Login",
				variant: "error",
				message: "No ingreso una clave de acceso",
			});
			return false;
		}
		try {
             loading.value=true;   
			const { data, error } = await useFetch("/api/auth/login/verify",
				{
					body: form,
					method: "POST",
				}
			);
			if(error.value){   
				throw error.value.data?.message || error.value.message;
			}
            loading.value=false;    
			if (data.value.result == 0) {
				throw data.value.error;
			}
			form.otherData = data.value.otherData;
			existUS.value = true;
			if(form.otherData.length<=1){
				return login();
			}
			/* resetForm(); */
		} catch (error) {
			loading.value = false;
			console.log(error)
			useAlert.setAlert({
				show: true,
				title: "Validacion en Servidor",
				variant: "error",
				message: error,
			});
		}
	};
	const login=async ()=>{
		try {
				loading.value=true;   
				let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
				const { data, error } = await useFetch("/api/auth/login/access", {
					body: { zone, ...form },
					method: "POST",
				});
				if(error){   
					throw error.value.data?.message || error.value.message;
				}
				loading.value=false;    
				if (data.value.result == 0) {
					throw data.value.error;
				}
				const token = useCookie("token");
				console.log(token.value);
			/* resetForm(); */
		} catch (error) {
			loading.value = false;
			useAlert.setAlert({
				show: true,
				title: "Validacion en Servidor",
				variant: "error",
				message: error,
			});
		}
	}
    const resetForm=()=>{
        form.user=null
        form.password=null
        form.objetives=[]
    }
    return {
        validUser,
        form,
        loading,
        resetForm,
        existUS,
		login
    }
};
