import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    nextId: 5
  },
  mutations: {
    setTasks (state, { tasks }) {
      state.tasks = tasks
    },
    addTask (state, { task }) {
      state.tasks.push(task)
      state.nextId++
    }
  },
  actions: {
    loadTasks ({ commit }, { tasks }) {
      commit('setTasks', { tasks })
    },
    addTask ({ commit, state }, { task }) {
      task.id = state.nextId
      commit('addTask', { task })
    }
  },
  getters: {
    getTasks: state => {
      return state.tasks
    },
    getTask: state => id => {
      return state.tasks.find(task => task.id === id)
    }
  },
  modules: {
  }
})
