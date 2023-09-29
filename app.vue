<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
</script>
