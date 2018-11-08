<template>
  <div>
    <component-demo title="Vmenu" :component="ExVmenu" :code="ExVmenuCode"/>
  </div>
</template>

<script>
import ExVmenu from './examples/ExVmenu'
import ExVmenuCode from '!raw-loader!./examples/ExVmenu'

export default {
  data () {
    return {
      ExVmenu,
      ExVmenuCode
    }
  }
}
</script>
