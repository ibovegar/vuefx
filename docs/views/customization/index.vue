<template>
  <div>
    <title-1 title="Customization">
      Customization is an important part of any ui-toolkits, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </title-1>
    <component-demo title="Example 1: custom sidebar" :component="Sidebar" :code="SidebarCode">
      The example below show how to customize a sidebar to stay dark even when the app is switched to  mode.
    </component-demo>
    Component styles are customized by changing the css custom properties within a certain component
    css scope. Imagine that a power puff girl is about to make a web app and is aiming for a pink color scheme.
    If she wishes to change the fx-chip's default background color to dark pink she would have to
    modify the following css rule:

    .fx-chip {
      --color--fill: dark-pink;
    }

    This override can be placed within the app entry ID css tag (e.g. #app) or imported as an
    external file using webpack's postcss-import plugin and placed within the :root scope. A typical
    config file would look like this:

    :root {
      --color--primary: blue;
    }

    .fx-select {
      --color--fill: var(--color--primary);
    }

    .fx-whatever {
      ...
    }

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
