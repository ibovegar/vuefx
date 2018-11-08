/**
 * USAGE:
 * <div id="app">
 *   <div class="test" v-click-outside="outside" @click="inside">Test</div>
 *   <!--<div class="test" v-click-outside.bubble="outside" @click="inside">Test</div>-->
 *   Add the .bubble modifier to the directive to make clicks inside bubble up.
 *   <pre>
 *   {{$data}}
 *   </pre>
 * </div>
 */
export default {
  bind: function (el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[Vue-click-outside:] provided expression '${binding.expression}' has to be a function`
      if (compName) warn += `Found in component '${compName}'`
      console.error(warn)
    }
    // Define Handler and cache it on the element
    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = handler

    // add Event Listeners
    document.addEventListener('click', handler)
  },
  unbind: function (el, binding) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  }
}
