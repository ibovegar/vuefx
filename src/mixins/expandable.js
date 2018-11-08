export default {
  methods: {
    collapseSection: function (element, disableAnimation) {
      let sectionHeight = element.scrollHeight
      let elementTransition = element.style.transition

      /* temporarily disable all css transitions */
      element.style.transition = ''

      if (disableAnimation) {
        element.style.height = 0 + 'px'
      }
      else {
        /* on the next frame (as soon as the previous style change has taken effect),
         * explicitly set the element's height to its current pixel height, so we
         * aren't transitioning out of 'auto'
         */
        requestAnimationFrame(function () {
          element.style.height = sectionHeight + 'px'
          element.style.transition = elementTransition

          /* on the next frame (as soon as the previous style change has taken effect),
           * have the element transition to height: 0
           */
          requestAnimationFrame(function () {
            element.style.height = 0 + 'px'
          })
        })
      }
    },

    expandSection: function (element) {
      let sectionHeight = element.scrollHeight

      /* have the element transition to the height of its inner content */
      element.style.height = sectionHeight + 'px'

      /* when the next css transition finishes
       * (which should be the one we just triggered)
       */
      element.addEventListener('transitionend', function myListener (e) {
        /* remove this event listener so it only gets triggered once */
        element.removeEventListener('transitionend', myListener)

        /* remove "height" from the element's inline styles,
         * so it can return to its initial value
         */
        element.style.height = null
      })
    }
  }
}
