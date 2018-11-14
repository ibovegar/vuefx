/* MIT License

Copyright (c) 2017 donmbelembe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const POINTER_START_EVENTS = ['mousedown', 'touchstart']
const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
const POINTER_END_EVENTS = ['mouseup', 'touchend']

function addEventListeners (el, events, handler) {
  for (var i = 0, len = events.length; i < len; i++) {
    el.addEventListener(events[i], handler)
  }
}

function removeEventListeners (el, events, handler) {
  for (var i = 0, len = events.length; i < len; i++) {
    el.removeEventListener(events[i], handler)
  }
}

let init = function (el, binding, vnode) {
  var reset = function () {
    let lastClientX, lastClientY, pushed
    let isDragging = false

    el.md = function (e) {
      let pageX = e.pageX ? e.pageX : e.touches[0].pageX
      let pageY = e.pageY ? e.pageY : e.touches[0].pageY

      let hasNoChildDrag = binding.arg === 'nochilddrag'
      let hasFirstChildDrag = binding.arg === 'firstchilddrag'
      let isEl = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el
      let isFirstChild = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el.firstChild

      let start = (e) => {
        pushed = 1
        lastClientX = e.clientX ? e.clientX : e.touches[0].clientX
        lastClientY = e.clientY ? e.clientY : e.touches[0].clientY
        e.preventDefault()
      }

      if (hasNoChildDrag) {
        if (isEl) {
          start(e)
        }
      }
      else if (hasFirstChildDrag) {
        if (isEl || isFirstChild) {
          start(e)
        }
      }
      else {
        start(e)
      }
    }

    el.mu = function () {
      pushed = 0
      if (isDragging) {
        emitEvent(vnode, 'dragscrollend')
      }
      isDragging = false
    }

    el.mm = function (e) {
      let newScrollX, newScrollY
      let eventDetail = {}
      if (pushed) {
        if (!isDragging) {
          emitEvent(vnode, 'dragscrollstart')
        }
        isDragging = true
        if (binding.modifiers.x) {
          newScrollX = (-lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX))
          el.scrollLeft -= newScrollX
          if (el === document.body) {
            el.scrollLeft -= newScrollX
          }
          eventDetail.deltaX = -newScrollX
        }
        else if (binding.modifiers.y) {
          newScrollY = (-lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY))
          el.scrollTop -= newScrollY
          if (el === document.body) {
            el.scrollTop -= newScrollY
          }
          eventDetail.deltaY = -newScrollY
        }
        else {
          newScrollX = (-lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX))
          newScrollY = (-lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY))
          el.scrollLeft -= newScrollX
          el.scrollTop -= newScrollY
          if (el === document.body) {
            el.scrollLeft -= newScrollX
            el.scrollTop -= newScrollY
          }
          eventDetail.deltaX = -newScrollX
          eventDetail.deltaY = -newScrollY
        }
        emitEvent(vnode, 'dragscrollmove', eventDetail)
      }
    }

    addEventListeners(el, POINTER_START_EVENTS, el.md)

    addEventListeners(window, POINTER_END_EVENTS, el.mu)

    addEventListeners(window, POINTER_MOVE_EVENTS, el.mm)
  }
  // if value is undefined or true we will init
  if (binding.value === undefined || binding.value === true) {
    if (document.readyState === 'complete') {
      reset()
    }
    else {
      window.addEventListener('load', reset)
    }
  }
  else {
    // if value is false means we disable
    // if value is anything else log error
    if (binding.value) {
      console.error('The passed value should be either \'undefined\', \'true\' or \'false\'.')
    }

    // window.removeEventListener('load', reset)
    removeEventListeners(el, POINTER_START_EVENTS, el.md)
    removeEventListeners(window, POINTER_END_EVENTS, el.mu)
    removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm)
  }
}

let emitEvent = function (vnode, eventName, eventDetail) {
  // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.
  if (vnode.componentInstance) {
    vnode.componentInstance.$emit(eventName, eventDetail)
  }
  else {
    let event
    if (window.CustomEvent) {
      event = new window.CustomEvent(eventName, { detail: eventDetail })
    }
    else {
      // Deprecated fallback for IE
      event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventName, true, true, eventDetail)
    }
    vnode.elm.dispatchEvent(event)
  }
}

export default {
  bind: function (el, binding, vnode) {
    if (!binding.hasOwnProperty('value') || binding.value === true) {
      init(el, binding, vnode)
    }
  },
  update: function (el, binding, vnode, oldVnode) {
    if (binding.value !== binding.oldValue) {
      init(el, binding, vnode)
    }
  },
  unbind: function (el, binding, vnode) {
    removeEventListeners(el, POINTER_START_EVENTS, el.md)
    removeEventListeners(window, POINTER_END_EVENTS, el.mu)
    removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm)
  }
}
