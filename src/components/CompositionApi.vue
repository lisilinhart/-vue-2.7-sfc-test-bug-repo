<template>
  <div>{{ msg }} - {{ label }}</div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    msg: {
      type: String,
      default: ''
    },
  },
  setup() {
    const label = ref('init')

    return {
      label
    }
  },

  beforeMount() {
    this.label = 'mounted'
  },
}
</script>
