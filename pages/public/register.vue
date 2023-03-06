<template>
	<div class="contenedor_login">
		<div class="flex-initial ">
			<div class="container">
				<div
					class="w-full rounded shadow-xl border-opacity-5 border m-auto bg-indigo-100 p-5 dark:bg-dark-1"
				>
					<!-- header -->
						<p class="text-center text-xl text-orange-500">REGISTRO DE USUARIO</p>
					<!-- form -->
					<div>
						<div>
							<rotate-loader :loading="formPerson.loading" :color="'#013a2a'" />
						</div>
						<div :class="{'registred':formPerson.form._id}" class="md:flex border md:p-4 order-last">
							<div class="md:m-4 w-full md:min-w-fit">
								<div class="flex m-1 items-center">
									<inputVue
										class="w-full"
										icon="identification"
										type="text"
										label="Cedula"
										placeholder="Cedula"
										name="identity"
										v-model="formPerson.form.identity"
										:rules="[
											(v) => !!v || 'Cedula es requerida',
											(v) => (v && v.length >= 10) || 'Cedula debe tener 10 digitos',
										]"
									/>
									<div class="md:flex ">
										<buttonVue
											@click="formPerson.resetForm()"
											title="Limpiar"
											class="h-auto flex my-1"
											type="button"
											color="yellow"
										>
											<icon-vue name="arrow-path"></icon-vue>
										</buttonVue>
										<buttonVue
											title="VALIDAR IDENTIDAD"
											@click="formPerson.validIdentity()"
											class="h-auto flex my-1 mx-1"
											type="button"
										>
											<icon-vue name="search"></icon-vue> <span class="hidden md:block">VALIDAR</span>
										</buttonVue>
									</div>
								</div>
								<div class="md:flex m-1 text-center  text-sm">
									<span>
										{{ formPerson.form.lastname+' '+formPerson.form.name }}
									</span>
								</div>
								<div class="md:flex m-1">
									<inputVue
										class="w-full"
										icon="document-text"
										type="text"
										label="Nombres"
										placeholder="nombres"
										name="name"
										v-model="formPerson.form.name"
									/>
									<inputVue
										class="w-full"
										icon="document-text"
										type="text"
										label="Apellidos"
										placeholder="Apellidos"
										name="lastname"
										v-model="formPerson.form.lastname"
									/>
								</div>	
								<div v-if="formPerson.form.full_name" class="text-center">
									<span>{{ formPerson.form.full_name }}</span>
								</div>
								<div class="md:flex m-1">
									<inputVue
										class="w-full"
										icon="calendar"
										type="date"
										label="F.Nacimiento"
										placeholder="F.Nacimiento"
										name="birthdate"
										v-model="formPerson.form.birthdate"
									/>
									<inputVue
										class="w-full"
										icon="envelope"
										type="email"
										label="Correo"
										placeholder="Correo"
										name="email"
										v-model="formPerson.form.email"
									/>
								</div>
							</div>
							<div class="md:m-4 w-full 	">
								<div class="flex">
									<inputVue
										class="w-full m-1"
										icon="user-circle"
										type="text"
										label="Nombre de Usuario"
										placeholder="NOMBRE DE USUARIO"
										:disable="formPerson.form._id"
										name="username"
										v-model="formPerson.form.user.name"
									/>
									<div class="w-full" v-if="formPerson.form._id">
										<label for="changePassCheck">Cambiar Clave</label>
										<input type="checkbox" id="changePassCheck" v-model="changePass">
									</div>
								</div>
								<div class="flex" v-if="!formPerson.form._id || changePass">
									<inputVue
										class="w-full m-1"
										icon="key"
										type="password"
										label="Clave con la que accesa"
										placeholder="CLAVE "
										name="password"
										v-model="formPerson.form.user.password"
									/>
								</div>
							</div>
						</div>
						<div class="flex justify-around">
							<span class="rounded-md shadow-sm">
								<button
									@click="formPerson.register()"
									v-if="!formPerson.form._id"
									class="inline-flex items-center bg-green-900 border border-gray-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-6 rounded"
									type="button"
								>
									REGISTRAR
								</button>
								<buttonVue
									@click="formPerson.update()"
									v-else
									color="yellow"
									type="button"
								>
								    <icon-vue name="arrow-path-rounded-square"></icon-vue>
									ACTUALIZAR DATOS
								</buttonVue>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const formPerson=useFormPerson();
const changePass=ref(false);
</script>
<style lang="postcss">
.contenedor_login {
	display: flex;
	align-items: center;
	@apply h-screen w-screen justify-center;
}
.registred input{
	@apply text-yellow-600 !important;
}
</style>
