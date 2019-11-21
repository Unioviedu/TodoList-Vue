<template src="./template.html"></template>
<script>
import { mapActions } from 'vuex'

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
    let id = this.$route.query.id
    console.log('Vamos a editar la tarea con id: ', id)
    if (id) {
      this.pageTitle = 'Editar tarea'
      this.buttonText = 'Guardar'
      this.creatingTask = false

      let { title, description } = this.$store.getters.getTask(id)
      this.title = title
      this.description = description
    }
  },
  components: {
  },
  methods: {
    anadirTarea: function (_this) {
      let task = {
        title: this.title,
        description: this.description
      }

      if (!this.creatingTask) {
        this.editTask({ task })
      } else {
        this.addTask({ task })
      }

      this.$router.push('/')
    },
    showTitle () {
      console.log(this.title)
    },
    ...mapActions([
      'addTask', 'editTask'
    ])
  }
}
</script>
<style lang="scss" src="./style.scss"></style>
