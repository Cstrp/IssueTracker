<template>
  <header class="mt-2">
    <div class="container mx-auto flex flex-row items-center">
      <div class="w-1/2 flex gap-3 items-center">
        <div class="w-full max-w-[30px]">
          <lazy-icons-app-logo/>
        </div>
        <span class="title text-2xl font-semibold"> Issue Tracker </span>
      </div>

      <div class="grow"/>

      <div class="flex flex-row gap-7">
        <button @click="changeMode">
          <lazy-icons-dark-icon v-if="lightMode"/>
          <lazy-icons-light-icon v-else/>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useColorMode} from "#imports";

const $colorMode = useColorMode();
const lightMode = computed(() => $colorMode.preference === 'light')
const changeMode = () => {
  $colorMode.preference === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light';
}
</script>

<style scoped lang="scss">
.title {
  font-family: "VT323",serif;
  font-size: 2dvi;
}
</style>
