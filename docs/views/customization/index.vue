<template>
  <div>
    <title-1 title="Customization">
      Customization is an important part of any ui-toolkits, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </title-1>
    <component-demo title="Example 1: custom sidebar" :component="Sidebar" :code="SidebarCode">
      The example below show how to customize a sidebar to stay dark even when the app is switched to  mode.
    </component-demo>
    <!--section>
      <pre>
        /* Override color for a specific component at a certain place (i.e. not global).
        * Note that scoped css is not possible. Instead you will need to manually scope
        * stuff with your own wrapper (e.g. .list-demo)).
        */
        .ks-list {
        [theme="dark"] .list-demo &, .list-demo [theme="dark"] & {
        color: orange;
        }

        [theme="light"] .list-demo &, .list-demo [theme="light"] & {
        color: green;
        }
      </pre>
    </section-->
  </div>
</template>

<script>
import Sidebar from './x-sidebar'
import SidebarRaw from '!raw-loader!./x-sidebar'

export default {
  data () {
    return {
      Sidebar,
      SidebarCode: this.$splitComponent(SidebarRaw)
    }
  }
}
</script>
