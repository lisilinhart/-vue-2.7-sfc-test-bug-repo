<script setup>
import { ref, onBeforeMount, defineProps } from 'vue'

defineProps({
  msg: {
    type: String,
    default: ''
  },
})

const label = ref('init')

onBeforeMount(() => {
  label.value = 'mounted'
})
</script>


<template>
  <div>{{ msg }} - {{ label }}</div>
</template>
