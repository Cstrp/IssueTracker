<template>
  <div class="w-full relative block m-auto">

    <input class="w-full bg-transparent px-2 mt-5" type="text" v-model="searchFilter" @focus="showSuggestions" @blur="hideSuggestions"/>

    <ul v-show="open" class="absolute">
      <li v-for="(suggestion, idx) of filteredOptions" :key="idx"
          class="text-2xl hover:bg-[#e7ecf5] bg-transparent/70"
      >
        {{ suggestion }}
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";

const searchFilter = ref<string>('')
const open = ref<boolean>(false)

const props = defineProps({
  suggestions: {
    type: Array as PropType<string[]>,
    required: true,
  },
})

const filteredOptions = computed(() => {
  return props.suggestions?.filter((s) => {
    return s.toLowerCase().includes(searchFilter.value.toLowerCase())
  })
})

const showSuggestions = () => {
  if (!open.value) {
    searchFilter.value = ''
    open.value = true
  }
}

const hideSuggestions = () => {
  open.value = false
}

</script>

<style lang="scss" scoped>

</style>
