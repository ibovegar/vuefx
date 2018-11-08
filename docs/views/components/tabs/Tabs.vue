<template>
  <div>
    <component-demo title="Tabs" :component="ExTabs" :code="ExTabsCode">
      Lorem ipsum dolor sit amet
    </component-demo>
  </div>
</template>

<script>
import ExTabs from './examples/ExTabs'
import ExTabsCode from '!raw-loader!./examples/ExTabs'

export default {
  data () {
    return {
      ExTabs,
      ExTabsCode
    }
  }
}
</script>
