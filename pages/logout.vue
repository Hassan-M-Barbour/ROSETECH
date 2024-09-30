<script setup lang="ts">
const hanko = useHanko()
function logout() {
  hanko!.user.logout()
}

definePageMeta({
layout:'blank'
})
</script>
<template>
  <button @click="logout">
      Log me out
  </button>
<br>
<br>
  <NuxtLink to="/">Back to Home</NuxtLink>
</template>
