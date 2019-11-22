<template src="./template.html"></template>
<script>

import ListItem from '../../components/Listitem/index'

export default {
  name: 'home',
  components: {
    ListItem
  },
  methods: {
    anadirTarea (_this) {
      this.$router.push('/task')
    }
  }
}
</script>
<style lang="scss" src="./style.scss"></style>
