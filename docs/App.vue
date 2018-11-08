<template>
  <div id="app"><!--:theme="selectedTheme"-->
    <app-top/>
    <div class="content-wrapper">
      <app-left/>
      <main class="app-center">
        <router-view></router-view>
      </main>
      <app-right/>
    </div>
  </div>
</template>

<script>
import AppLeft from './components/app-left'
import AppTop from './components/app-top'
import AppRight from './components/app-right'

export default {
  name: 'app',

  components: { AppLeft, AppRight, AppTop },

  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  --width--app-left: 16%;
  --width--app-right: 12%;

  height: 100vh;

  .content-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .app-center {
    flex: 1;
    padding: 0 200px;
    padding-top: 60px;
  }
}
</style>
