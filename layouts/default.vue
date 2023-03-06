
<script setup>
import {
	alertVue
} from "cml-components";
const useAlert = useAlertStore();
</script>

<template>
	<div>
		<header>
			<slot name="header"> </slot>
		</header>
		<main>
			<slot />
			<alertVue 
				v-if="useAlert.show" 
				@close="useAlert.close()" 
				:showing="useAlert.show" 
				:message="useAlert.message" 
				:title="useAlert.title" 
				:type="useAlert.variant"
				/>
		</main>
		<footer>
			<slot name="footer"> </slot>
		</footer>
	</div>
</template>
