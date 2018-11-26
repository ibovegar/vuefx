import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function route (name, component) {
  return {
    path: `/${name}`,
    name: name,
    component: () => import(`./views/${component}`)
  }
}

export default new Router({
  routes: [
    /* Getting stated */
    route('usage', 'Usage'),
    route('installation', 'Installation'),
    /* Styles & Themes */
    route('typography', 'Typography'),
    route('colors', 'Colors'),
    route('icons', 'icons/index'),
    route('customization', 'customization/index'),
    route('transition', 'transition/index'),
    route('layout', 'layout/index'),
    /* UI Components */
    route('vmenu', 'components/v-menu/index'),
    route('popover', 'components/popover/index'),
    route('dropdown', 'components/dropdown/index'),
    route('badge', 'components/badge/index'),
    route('chips', 'components/chips/index'),
    route('select', 'components/select/index'),
    route('tabs', 'components/tabs/index')
  ]
})
