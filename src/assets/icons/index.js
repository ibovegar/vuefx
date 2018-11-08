import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  false,
  // Only include .vue files
  /.vue$/
)

export default {
  install (Vue) {
    requireComponent.keys().forEach(fileName => {
      // Get the component config
      const componentConfig = requireComponent(fileName)
      // Get the PascalCase version of the component name
      let componentName = upperFirst(
        camelCase(
          fileName
          // Remove the "./_" from the beginning
            .replace(/^\.\/_/, '')
          // Remove the file extension from the end
            .replace(/\.\w+$/, '')
        )
      )
      // Namespace icons with a i- prefix
      componentName = 'I' + componentName

      // Globally register component
      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}
