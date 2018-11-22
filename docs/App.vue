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
  components: { AppLeft, AppRight, AppTop }
}
</script>

<style>
#app {
  --width--app-left: 16%;
  --width--app-right: 12%;

  height: 100vh;

  .content-wrapper {
    display: flex;
  }

  .app-center {
    flex: 1;
    min-width: 0;
    padding: 0 10px;

    @media (min-width: 1600px) {
      padding: 0 140px;
      padding-top: 80px;
    }
  }
}
</style>
