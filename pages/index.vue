<template>
  <div class="mt-5">
    <div class="leading-7">

      <AppDescription/>

    </div>

    <div class="flex flex-col gap-7">

      <SearchPannel/>

      <SearchResult/>

    </div>
  </div>
</template>
<script setup lang="ts">
import SearchResult from "~/components/SearchResult.vue";
</script>
