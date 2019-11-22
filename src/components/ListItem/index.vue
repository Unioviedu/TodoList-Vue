<template src="./template.html"></template>

<script>
import MDIcon from 'vue-material/dist/components'

export default {
  name: 'ListItem',

  components: {
    MDIcon
  },

  props: {
    id: Number,
    title: String,
    description: String,
    done: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    editTask: function () {
      this.$router.push({ name: 'task', query: { id: this.id } })
    },
    deleteTask: function () {
      this.$emit('deleteTask', { id: this.id })
    }
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
