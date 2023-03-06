import { reactive } from "vue";
import dayjs from "dayjs";

export const useFormPerson = () => {
	const useAlert=useAlertStore();
	const form = reactive({
		_id:null,
		full_name:null,
		name: "",
		lastname: "",
		birthdate: "",
		typeIdentity: "CI",
		email: "",
		identity: "",
		user:{
			name:"",
			password:"",
			role:"USER",
		}
	});
	const loading=ref(false);

	const resetForm = () => {
		form._id = null;
		form.name = "";
		form.lastname = "";
		form.birthdate = "";
		form.email = "";
		form.identity = "";
		form.full_name = null;
		form.user.name='';
		form.user.password='';
		form.user.role='USER';
			
	};

	const register=async ()=>{
		try {
			loading.value = true;
			const { data } = await useAsyncData("register",
			()=>{return $fetch("/api/auth/registerPerson", {
				method: "POST",
				body: form,
			});}
			);
			console.log(data.value);
			loading.value = false;
			if(data)
			if (data.value.result != 1) {
				//error de db o mensaje de servidor no modificar nada
				throw data.value.error;
			}
			useAlert.setAlert({
				show: true,
				title:"Registro",
				variant: "success",
				message: "Registro Exitoso",
			});
			/* resetForm(); */
		} catch (error) {
			useAlert.setAlert({
				show: true,
				title: "Registro",
				variant: "error",
				message: error,
			});
		}
	}
	const update=async ()=>{
		try {
			loading.value = true;
			const { data } = await useAsyncData("update", () => {
				return $fetch("/api/auth/registerPerson", {
					method: "POST",
					body: form,
				});
			});
			console.log(data.value);
			loading.value = false;
			if (data)
				if (data.value.result != 1) {
					//error de db o mensaje de servidor no modificar nada
					throw data.value.error;
				}
			useAlert.setAlert({
				show: true,
				title: "Actualizacion",
				variant: "success",
				message: "Actualizacion Exitosa",
			});
			/* resetForm(); */
		} catch (error) {
			useAlert.setAlert({
				show: true,
				title: "Actualizacion",
				variant: "error",
				message: error,
			});
		}
	}
	const validIdentity = async () => {
		if (form.identity.length < 10 && form.typeIdentity == "CI") {
			useAlert.setAlert({
				show: true,
				title:"Validacion de Identidad",
				variant: "error",
				message: "La cedula debe tener 10 digitos",
			});
			return false;
		}
		if(form.identity.length < 13 && form.typeIdentity == "RUC"){
			return false;
		}
		if(isNaN(form.identity)){
			return false;
		}
		try {
			loading.value = true;
			const { data } = await useAsyncData("valid",
			()=>{
				return $fetch("/api/auth/validPerson", {
					method: "POST",
					body: {
						identity: form.identity,
					},
				});
			}
			);
			
			loading.value = false;
			if (data.value.result == 0) {
				//error de db o mensaje de servidor no modificar nada
				throw data.value.error;
			}
			resetForm();
			if(data.value.result==2){
				//ya existe en la base de datos
				const birthdate = dayjs(data.value.birthdate).format("YYYY-MM-DD");
				


				form._id=data.value._id;
				form.full_name = data.value.full_name;
				form.name=data.value.name;
				form.lastname=data.value.lastname;
				form.birthdate = birthdate;
				form.identity = data.value.identity;
				form.email = data.value.email;
				form.user.name=data.value.user.name;
				return;
			}

			
			form.identity = data.value.identificacion;
			form.full_name = data.value.razon_social;
			form.birthdate = data.value.fecha_nacimiento;
			form.email = data.value.correo;

		} catch (error) {
			useAlert.setAlert({
				show: true,
				title: "Validacion en Servidor",
				variant: "error",
				message: error,
			});
		}
	

		
	};


	return {
		form,
		loading,
		resetForm,
		validIdentity,
		register,
		update,
	};
};
