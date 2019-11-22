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
    }
  }
</script>

<style lang="scss" src="./styles.scss" scoped></style>
