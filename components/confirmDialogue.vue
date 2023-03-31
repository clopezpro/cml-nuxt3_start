<template>
    <card-modal
            :showing="visible"
            class="z-10"
			size="md"
            :cerrarFuera="false"
			:title="title"
		>
        <template #body>
                <div class="block m-0 p-4">
                    <p class="font-mono text-md dark:text-gray-400">
                        {{ message }}
                    </p>
				</div>
        </template> 
        <template #footer>
            <div class="flex justify-end">
                    <button
                        class="border flex m-1 border-blue-900 mt-1 text-green-600 px-4 py-1 text-sm uppercase tracking-wide font-bold rounded-lg"
                       @click="tell(true)"
                    >
                        DE ACUERDO <icon-vue name="check"></icon-vue>
                    </button>  
                    <button
                        class="border flex m-1 border-red-900 mt-1 text-red-600 px-4 py-1 text-sm uppercase tracking-wide font-bold rounded-lg"
                        @click="tell(false)"
                    >
                        NO <icon-vue name="x"></icon-vue>
                    </button>
			</div>
        </template> 
    </card-modal>
</template>
<script setup>
    const {visible,tell,title,message} =   useConfirm();
</script>
