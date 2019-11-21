<template src="./template.html"></template>
<script>
import ListItem from '@/components/ListItem/index.vue'
import { mapActions, mapGetters } from 'vuex'

const initialData = [
  {
    id: 1,
    title: 'Tarea 1',
    description:
      'Esta es la tarea 1 creada para simular una lista de tareas con VUE',
    done: true
  },
  {
    id: 2,
    title: 'Tarea 2',
    description:
      'Esta es la tarea 2 creada para simular una lista de tareas con VUE'
  },
  {
    id: 3,
    title: 'Tarea 3',
    description:
      'Esta es la tarea 3 creada para simular una lista de tareas con VUE',
    done: true
  },
  {
    id: 4,
    title: 'Tarea 4',
    description:
      'Esta es la tarea 4 creada para simular una lista de tareas con VUE'
  }
]

export default {
  name: 'home',
  components: {
    ListItem
  },

  computed: {
    ...mapGetters('tasks', {
      tasks: 'getTasks'
    })
  },

  created () {
    if (this.tasks.length === 0) {
      console.log('Poniendo mascara')
      this.loadData({ tasks: initialData }).then(result => {
        console.log('Quitando mascara')
      })
    }
  },

  mounted () {
    if (this.$route.query.task) {
      this.tasks.push(this.$route.query.task)
    }
  },
  data () {
    return {}
  },
  methods: {
    anadirTarea (_this) {
      this.$router.push('/task')
    },
    ...mapActions('tasks', {
      loadData: 'loadTasks'
    })
  }
}
</script>
<style lang="scss" src="./style.scss"></style>
