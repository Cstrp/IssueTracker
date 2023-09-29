<template>
  <div>
    Search Pannel
    <Autocomplete :suggestions="languages"/>
  </div>
</template>

<script setup lang="ts">
import Autocomplete from "~/components/UI/Autocomplete.vue";

const searchValues = ref({
  language: "",
  label: ""
})

const languages = ref<string[]>([])

const issues = ref([])
const isLoading = ref(false)
const {data} = await useLazyFetch("https://api.github.com/repos/microsoft/vscode/languages")

onMounted(() => {
  if (data.value) languages.value = Object.keys(data.value)
})
</script>

<style lang="scss" scoped>

</style>
