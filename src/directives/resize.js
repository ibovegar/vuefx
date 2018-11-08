import _throttle from 'lodash/throttle'
import ResizeObserver from 'resize-observer-polyfill'

export const Resize = {
  inserted (el, conds) {
    if (typeof process === 'undefined' || !process.server) {
      const handleResize = _throttle(entries => {
        console.log('resize')
      }, 200)

      const observer = new ResizeObserver(handleResize)
      observer.observe(el)
    }
  }
}
