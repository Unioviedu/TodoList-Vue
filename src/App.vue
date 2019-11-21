<template>
  <div id="app">
    <md-toolbar class="md-primary">
      <h3 class="md-title">VUE TODO</h3>
    </md-toolbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.md-toolbar {
  height: calc(100vh * 0.05);
}

.view {
  height: calc(100vh * 0.95);
  max-height: calc(100vh * 0.95);
  overflow-y: hidden;
}

body {
  overflow-y: hidden;
}
</style>
