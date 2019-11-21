<template src="./template.html"></template>
<script>
export default {
  name: 'home',
  components: {
  },
  methods: {
    anadirTarea (_this) {
      this.$router.push('/task')
    }
  }
}
</script>
<style lang="scss" src="./style.scss"></style>
