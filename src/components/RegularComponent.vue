<template>
  <div>{{ msg }} - {{ label }}</div>
</template>

<script>
export default {
  name: 'RegularComponent',
  props: {
    msg: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      label: 'init'
    }
  },
  beforeMount() {
    this.label = 'mounted'
  },
}
</script>
