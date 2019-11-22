<template src="./template.html"></template>

<script>
  export default {
    name: 'ListItem',

    props: {
      title: String,
      description: String,
      done: {
        type: Boolean,
        default: false
      },
      id: Number
    },

    methods: {
      editTask() {
        this.$router.push({name: 'task', query: {id: this.id}})
      }
    }
  }
</script>

<style lang="scss" src="./styles.scss" scoped></style>
