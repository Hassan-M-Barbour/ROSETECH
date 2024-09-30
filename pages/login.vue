<!-- <script setup lang="ts">
definePageMeta({
    auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  },
})
</script>

<template>
<Login />
</template> -->

<script setup lang="ts">
function afterLogin() {
 navigateTo("/dashboard");
}

definePageMeta({
  layout: 'blank'
})
</script>
<style>
body{
  text-align: -webkit-center;
}
</style>
<template>

  <hanko-auth />
  <hanko-events @onSessionCreated="afterLogin()" />
</template>
