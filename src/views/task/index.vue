<template src="./template.html"></template>
<script>
  export default {
    name: 'task',
    components: {},

    data () {
      return {
        title: '',
        description: '',
        creatingTask: false,
        titleText: 'Añadir Tarea',
        buttonText: 'Añadir'
      }
    },

    mounted () {
      if (this.$route.query.id) {
        this.creatingTask = true
        this.titleText = 'Editar Tarea'
        this.buttonText = 'Guardar'
      }
    },

    methods: {
      addTask (_this) {
        this.$router.push({
          name: '/', query: {
            task: {
              title: this.title,
              description: this.description,
              id: Math.floor(Math.random() * 1000)
            }
          }
        })
      }
    }
  }
</script>
<style lang="scss" src="./style.scss"></style>
