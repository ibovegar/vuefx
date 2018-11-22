export const registerComponent = (Vue, options, component) => {
  let name = options && options.disablePrefix
    ? component.name.replace('Fx', '')
    : component.name

  Vue.component(name, component)
}
