import Popper from 'popper.js'

export default {
  props: {
    disabled: Boolean,
    content: String,
    boundariesSelector: String,
    boundariesElement: [Element, String],
    referenceSelector: String,
    appendToBody: Boolean,
    autoWidth: Boolean,
    overlay: Boolean,
    fixed: Boolean,
    forceShow: { type: Boolean, default: false },
    options: { type: Object, default () { return {} } },
    position: { type: String, default: 'bottom' },
    offset: { type: Number, default: null }
  },

  data () {
    return {
      trigger: null,
      referenceElm: null,
      popperJS: null,
      showPopper: false,
      currentPlacement: '',
      popperOptions: {
        placement: this.position,
        positionFixed: this.fixed,
        modifiers: {
          'widthModifier': {
            enabled: !this.autoWidth,
            order: 803,
            fn: (data) => {
              data.offsets.popper.left = data.offsets.reference.left
              data.offsets.popper.right = data.offsets.reference.right
              data.offsets.popper.width = data.styles.width = Math.round(data.offsets.reference.width) + 1
              return data
            }
          },
          'offsetModifier': {
            enabled: this.offset && this.offset > 0,
            order: 802,
            fn: (data) => {
              if (this.position === 'top' || this.position === 'bottom') {
                data.offsets.popper.top += this.offset
              }
              else if (this.position === 'left' || this.position === 'right') {
                data.offsets.popper.left += this.offset
              }
              return data
            }
          },
          'overlayModifier': {
            enabled: this.overlay,
            order: 801,
            fn: (data) => {
              if (data.placement === 'top') {
                data.offsets.popper.top += this.referenceElm.offsetHeight
              }
              else if (data.placement === 'bottom') {
                data.offsets.popper.top -= this.referenceElm.offsetHeight
              }
              return data
            }
          }
        }
      }
    }
  },

  watch: {
    showPopper: function (value) {
      if (value) this.updatePopper()
    },
    forceShow: {
      handler: function (value) {
        this[value ? 'doShow' : 'doClose']()
      },
      immediate: true
    },
    disabled: function (value) {
      if (!value) this.showPopper = false
    }
  },

  methods: {
    doShow: function (e) {
      this.showPopper = true
      this.$emit('show')
    },
    doClose: function (e) {
      if (!this.forceShow) {
        this.showPopper = false
        this.$emit('hide')
      }
    },
    doDestroy: function () {
      if (this.showPopper) return
      if (this.popperJS) {
        this.popperJS.destroy()
        this.popperJS = null
      }
      if (this.appendedToBody) {
        this.appendedToBody = false
        document.body.removeChild(this.popper.parentElement)
      }
    },
    doMount: function (popperRef, trigger) {
      this.popper = popperRef
      this.trigger = trigger
      this.referenceElm = document.querySelector(this.referenceSelector) || this.trigger
    },
    createPopper: function () {
      this.$nextTick(() => {
        if (this.appendToBody && !this.appendedToBody) {
          console.log('body')
          this.appendedToBody = true
          document.body.appendChild(this.popper.parentElement)
        }

        if (this.popperJS && this.popperJS.destroy) this.popperJS.destroy()

        if (this.boundariesSelector || this.boundariesElement) {
          if (this.boundariesSelector) {
            this.boundariesElement = document.querySelector(this.boundariesSelector)
          }
          this.popperOptions.modifiers.preventOverflow = { boundariesElement: this.boundariesElement }
        }

        this.popperOptions.modifiers.computeStyle = { gpuAcceleration: false }

        this.popperOptions.onCreate = () => {
          this.$nextTick(this.updatePopper)
        }

        this.popperJS = new Popper(this.referenceElm, this.popper, this.popperOptions)
      })
    },
    destroyPopper: function () {
      this.showPopper = false
      this.doDestroy()
    },
    updatePopper: function () {
      this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper()
    }
  },
  created () {
    this.appendedToBody = false
    this.popperOptions = Object.assign(this.popperOptions, this.options)
  },
  destroyed () {
    this.destroyPopper()
  }
}
