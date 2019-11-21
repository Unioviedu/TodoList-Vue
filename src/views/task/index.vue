<template src="./template.html"></template>
<script>
export default {
  name: 'task',

  data () {
    return {
      pageTitle: 'Nueva Tarea',
      buttonText: 'Añadir',
      description: '',
      creatingTask: true,
      title: ''
    }
  },
  beforeMount () {
    console.log('Vamos a editar la tarea con id: ', this.$route.query.id)
    if (this.$route.query.id) {
      this.pageTitle = 'Editar tarea'
      this.buttonText = 'Guardar'
      this.creatingTask = false
    }
  },
  components: {
  },
  methods: {
    anadirTarea: function (_this) {
      if (!this.creatingTask) {
        this.$router.push('/')
      } else {
        this.$router.push({
          name: 'home',
          query: {
            task: {
              title: this.title,
              description: this.description,
              id: Math.floor(Math.random() * 1000) + 1
            }
          }
        })
      }
    },
    showTitle () {
      console.log(this.title)
    }
  }
}
</script>
<style lang="scss" src="./style.scss"></style>
