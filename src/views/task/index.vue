<template src="./template.html"></template>
<script>
  export default {
    name: 'task',
    components: {},

    data () {
      return {
        title: '',
        description: '',
        creatingTask: true,
        titleText: 'Añadir Tarea',
        buttonText: 'Añadir'
      }
    },

    mounted () {
      if (this.$route.query.id) {
        this.creatingTask = false
        this.titleText = 'Editar Tarea'
        this.buttonText = 'Guardar'
      }
    },

    methods: {
      addTask (_this) {
        if (this.creatingTask) {
          this.$router.push({
            name: 'home', query: {
              task: {
                title: this.title,
                description: this.description,
                id: Math.floor(Math.random() * 1000)
              }
            }
          })
        }
        else
          this.$router.push('/')
      }
    }
  }
</script>
<style lang="scss" src="./style.scss"></style>
