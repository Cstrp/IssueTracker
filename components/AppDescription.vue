<template>
  <div class="flex flex-col gap-10 ">
    <div class="flex flex-col gap-3 ">
      <p class=" custom_font">
        A modern web application built with
        <span :class="gradientText">Nuxt.js</span>
        and
        <span :class="gradientText">Tailwind CSS.</span>
      </p>
      <p :class="gradientText">
        It allows users to find and contribute to various open-source projects on GitHub with ease.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
const gradientText = 'text-transparent/40 bg-clip-text bg-gradient-to-r from-purple-300 to-green-400'
</script>

<style lang="scss" scoped>

</style>
