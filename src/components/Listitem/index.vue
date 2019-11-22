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

    data() {
      return {
        taskDone: false
      }
    },

    methods: {
      editTask() {
        this.$router.push({name: 'task', query: {id: this.id}})
      },
      deleteTask() {
        this.$emit('deleteTask', this.id)
      }
    },

    mounted () {
      this.taskDone = this.done;
    }
  }
</script>

<style lang="scss" src="./styles.scss" scoped></style>
