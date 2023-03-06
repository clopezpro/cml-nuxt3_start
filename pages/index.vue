<script setup>
   const Auth=useAuthUserStore();
    definePageMeta({
        title: 'Home',
        description: 'This is the home page',
        middleware: ['auth'],
         layout: "custom",
    })
</script>
<template>
  <div>
    <button @click="Auth.Logout">
        CHAO
    </button>
    <pre>
      {{ Auth.user }}
    </pre>
  </div>


</template>
