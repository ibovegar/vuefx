<template>
  <div class="view-usage">
    <h1>Usage</h1>
    <section>
      Prerequisite: Vue is already installed
    </section>
    <br>
    <section>
      Import TBD and stylesheet
      <p><pre>
          import TBD from 'TBD'
          import 'TBD/dist/kspt-ui.css'
          Vue.use(TBD)
      </pre></p>

      This installs the entire set of UI components. Do the following if you only
      need to cherrypick parts of the toolkit (i.e. enable dead code elimination)

      <p><pre>
        import { Input, Checkbox, Menu } from 'TBD'
        Vue.use(Input)
        Vue.use(Checkbox)
        Vue.use(Menu)
      </pre></p>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
