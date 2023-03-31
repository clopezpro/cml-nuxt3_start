<template>
	<div class="contenedor_login">
		<div class="flex-initial w-full min-w-min max-w-md">
			<div class="container px-10">
				<div
					class="w-full rounded shadow-xl border-opacity-5 border m-auto bg-indigo-100 p-5 dark:bg-dark-1"
				>
					<!-- header -->
					<header>
						<p class="text-center text-xl text-orange-500">COTIZADOR LITE</p>
					</header>
					<!-- form -->
					<div v-show="!FormLogin.existUS.value">
						<div>
							<div class="text-center">
								<h2
									class="intro-x focus:bg-black font-bold text-2xl xl:text-3xl dark:text-gray-200"
								>
									Iniciar Sesion
								</h2>
							</div>
							<rotate-loader :loading="FormLogin.loading.value" :color="'#013a2a'" />
							<input
								class="w-full py-3 border-2 border-transparent rounded form-control leading-tight bg-gray-800"
								type="text"
								autocomplete="off"
								placeholder="NOMBRE DE USUARIO"
								:class="{ input_loading: FormLogin.loading }"
								name="username"
								v-model="FormLogin.form.user"
							/>
						</div>
						<div>
							<div>
								<label class="block" for="password"
									>Contraseña de {{ FormLogin.form.user }}</label
								>
								<input
									class="w-full p-2 mb-1 border-b-2 dark:bg-gray-800 border-gray-800 outline-none"
									type="password"
									autocomplete="current-password"
									v-model="FormLogin.form.password"
								/>
							</div>
							<div class="flex-1 text-center"></div>
							<div class="flex justify-around">
								<span class="rounded-md shadow-sm">
									<button
										class="inline-flex items-center bg-green-900 border border-gray-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-6 rounded"
										type="button"
										@click="FormLogin.validUser()"
									>
										INICIAR
									</button>
								</span>
							</div>
						</div>
					</div>
					<div v-show="FormLogin.form.otherData?.length>0">
						<div>
							<div class="text-center">
								<p class="text-xs ml-1 text-yellow-600">
									Este formulario se muestra porque tiene asignada mas de un puesto de trabajo,
									porfavor seleccione en el cual desea trabajar
								</p>
							</div>
							<div>
									<!-- <pre>{{emp }}</pre> -->
									<!-- <p>{{ emp.objetive.identity }} {{ emp.objetive.full_name }}</p> -->
									<!-- <div
										:class="{ 'bg-yellow-800 text-gray-800': tar._id == form.vehi }"
										v-for="(tar, key) in getEmp"
										:key="key"
										class="border rounded-md border-gray-600 w-full shadow-sm m-1 pl-3"
									>
										<input
											:value="tar.objetive._id"
											type="checkbox"
											v-model="form.obje"
											:id="tar._id"
										/>
										<label
											:class="{
												'text-yellow-800': form.obje[key] == tar.objetive._id ,
											}"
											class="text-md cursor-pointer w-full m-2 text-xs"
											:for="tar._id"
										>
											{{ tar.objetive.full_name }} {{ tar.objetive.identity }}
										</label>
									</div> -->
							</div>
						</div>
						<div class="rounded-md shadow-sm flex justify-center">
							<button
								class="bg-red-400 border border-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 mb-6 rounded"
								type="button"
								@click="FormLogin.resetForm()"
							>
								CANCELAR
							</button>
							<button
								class="bg-green-900 border border-gray-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-6 rounded"
								type="button"
							>
								CONTINUAR
							</button>
						</div>
					</div>
					<!-- footer -->
					<footer>
						<!-- <a class="text-green-800  hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
						<a class="text-green-800  hover:text-pink-700 text-sm float-right" href="#">Create Account</a> -->
					</footer>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
/* import { computed} from "vue";
import { useAuthUserStore } from "@/stores/auth.js"; */
/* import { onMounted } from 'vue'; */
	const FormLogin=useFormLogin();
    definePageMeta({
        title: 'Login',
        description: 'Logueate para acceder al sistema de Cotizacion',
        middleware: ['autenticated'],
        layout: "custom",
    })
</script>
<style lang="postcss">
* {
	box-sizing: border-box;
}
.contenedor_login {
	display: flex;
	justify-content: center;
	align-items: center;
	@apply h-screen;
}
</style>