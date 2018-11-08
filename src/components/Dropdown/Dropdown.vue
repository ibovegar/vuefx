<template>
  <span
    class="fx-dropdown"
    v-click-outside="doClose"
    >
    <transition
      :name="transition"
      @after-leave="doDestroy"
      @leave="onLeave"
      >
      <span
        v-show="showPopper"
        ref="popper"
        class="popper"
        >
        <ul
          ref="list"
          v-if="$slots.default && $slots.default.length"
          >
          <slot/>
        </ul>
        <div v-else class="placeholder">Empty</div>
      </span>
    </transition>
    <slot name="trigger"/>
  </span>
</template>

<script>
import PopperMixin from '@/mixins/popper.js'
import ClickOutside from '@/directives/click-outside'
import { on, off } from '@/utils/helpers'

export default {
  name: 'fx-dropdown',

  directives: { ClickOutside },

  mixins: [ PopperMixin ],

  props: {
    value: [String, Array],
    disabled: Boolean,
    focusColor: Boolean,
    focusCheckmark: Boolean,
    showCheckbox: Boolean,
    multiple: Boolean,
    closeOnClick: Boolean,
    focusBackground: { type: Boolean, default: true },
    transition: {
      type: String,
      default: 'scale-top-left',
      validator: value => { return ['scale-top-left', 'slide-down'].includes(value) }
    }
  },

  data () {
    return {
      focusIndex: null,
      activeElement: null,
      intervalId: null
    }
  },

  computed: {
    dropdownItems: function () {
      return this.$slots.default
        .filter(item => !item.componentOptions.propsData.hasOwnProperty('disabled'))
        .map(item => item.componentOptions.propsData.value)
        .filter(item => item !== undefined)
    },
    focusedItem: function () {
      return this.dropdownItems[this.focusIndex]
    }
  },

  methods: {
    selectItem: function (value, e) {
      let model = this.multiple ? this.value : value
      if (e.hasAttribute('close-popover')) this.doClose()
      if (this.multiple) model.includes(value) ? model.splice(model.indexOf(value), 1) : model.push(value)
      this.$emit('input', model)
    },
    onLeave: function () {
      this.focusIndex = null
    },
    onArrowKey: function (dir) {
      if (this.focusIndex === null) {
        this.doShow()
        this.focusIndex = 0
      }
      else {
        if (dir === 'up' && this.focusIndex > 0) this.focusIndex--
        else if (dir === 'down' && this.focusIndex < this.dropdownItems.length - 1) this.focusIndex++
      }
    },
    onReferenceClick: function () {
      this.activeElement = document.activeElement
      if (!this.showPopper) this.doShow()
      if (this.focusIndex !== null) {
        this.selectItem(this.focusedItem, this.$slots.default[this.focusIndex].elm)
      }
    },
    onPopperClick: function (e) {
      this.activeElement.focus()
      if (this.showPopper && this.closeOnClick) this.doClose()
    },
    onKeyDown: function (e) {
      switch (e.key) {
        case 'ArrowUp': this.onArrowKey('up'); break
        case 'ArrowDown': this.onArrowKey('down'); break
        case 'Escape': this.doClose(); break
        case 'Enter': this.onReferenceClick(); break
        case 'Tab': this.doClose(); break
      }
    }
  },

  mounted () {
    this.doMount(this.$refs.popper, this.$slots.trigger[0].elm)

    this.referenceElm.addEventListener('keydown', function (e) {
      this.onKeyDown(e)
    }.bind(this), false)

    on(this.referenceElm, 'click', this.onReferenceClick)
    on(this.popper, 'click', this.onPopperClick)
  },

  beforeDestroy () {
    off(this.referenceElm, 'click', this.onReferenceClick)
    off(this.referenceElm, 'click', this.onPopperClick)
    this.referenceElm.removeEventListener('keydown', this.onKeyDown)
  }
}
</script>

<style>
.fx-dropdown {
  .popper {
    z-index: var(--z-index--popover);
    background: var(--color--fill-1);
    border-radius: var(--border-radius--small);
    padding: var(--spacing--small) 0;
    transform-style: preserve-3d;
    @mixin elevation 7;

    &:focus { outline: none }

    &[x-out-of-boundaries] {
      display: hidden;
      opacity: 0;
    }
  }

  .placeholder {
    padding: var(--spacing--medium);
    font-weight: var(--font-weight--regular);
    color: var(--color--font-1);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}
</style>
