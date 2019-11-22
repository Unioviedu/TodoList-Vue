<template src="./template.html"></template>
<script>

  import ListItem from '../../components/Listitem/index'

  export default {
    name: 'home',
    components: {
      ListItem
    },

    mounted() {
      if(this.$route.query.task){
        this.tasks.push(this.$route.query.task)
      }
    },

    data () {
      return {
        tasks: [
          {
            id: 1,
            title: 'Tarea 1',
            description: 'Esta es la tarea 1 creada para simular una lista de tareas con VUE'
          },
          {
            id: 2,
            title: 'Tarea 2',
            description: 'Esta es la tarea 2 creada para simular una lista de tareas con VUE'
          },
          {
            id: 3,
            title: 'Tarea 3',
            description: 'Esta es la tarea 3 creada para simular una lista de tareas con VUE'
          },
          {
            id: 4,
            title: 'Tarea 4',
            description: 'Esta es la tarea 4 creada para simular una lista de tareas con VUE'
          }
        ]
      }
    },

    methods: {
      anadirTarea (_this) {
        this.$router.push('/task')
      },
      deleteTask (id) {
        for( let i = 0; i < this.tasks.length; i++){
          if ( this.tasks[i].id === id) {
            this.tasks.splice(i, 1);
          }
        }
      }
    }
  }
</script>
<style lang="scss" src="./style.scss"></style>
