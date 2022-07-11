<script setup>
import { ref, onBeforeMount, defineProps } from '@vue/composition-api'

defineProps({
  msg: {
    type: String,
    default: ''
  },
})

const label = ref('Init')

onBeforeMount(() => {
  label.value = 'mounted'
})
</script>


<template>
  <div>{{ msg }} - {{ label }}</div>
</template>
