<template>
  <fx-dropdown
    class="fx-select"
    :class="rootClasses"
    :value="value"
    :multiple="multiple"
    :transition="transition"
    :close-on-click="!multiple"
    :auto-width="autoWidth"
    :show-checkbox="showCheckbox"
    :fixed="fixed"
    :style="[{ minHeight: height + 'px', width: width + 'px'}, colorStyles]"
    overlay
    @input="$emit('input', $event)"
    @show="showPopper = true"
    @hide="showPopper = false"
    >
    <form
      slot="trigger"
      @click="$refs.input.focus()"
      >
      <input
        ref="input"
        :placeholder="inputPlaceholder"
        :value="inputValue"
        readonly
        @focus="isFocused = true"
        @blur="isFocused = false"
        />
      <label v-if="showLabel">{{ label }}</label>
      <span class="focus-border"><i></i></span>
      <fx-chip-group v-if="showChips" :draggable="dragChips" :gutter="4">
        <fx-chip
          v-for="value in value" :key="value"
          :value="value"
          background="fill-6"
          close
          @input="deselectItem(value)"
          >
          {{ getDisplayName(value) }}
        </fx-chip>
      </fx-chip-group>
      <fx-icon name="menu-down" :class="{ 'flip-v': showPopper }"/>
      </form>
    <fx-dropdown-item v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </fx-dropdown-item>
  </fx-dropdown>
</template>

<script>
import ColorMixin from '@/mixins/colors.js'
import Dropdown from '../Dropdown/Dropdown'
import DropdownItem from '../Dropdown/DropdownItem'
import Chip from '../Chips/Chip'
import ChipGroup from '../Chips/ChipGroup'
import Icon from '../Icon/Icon'

export default {
  name: 'FxSelect',

  mixins: [ ColorMixin ],

  components: {
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [Chip.name]: Chip,
    [ChipGroup.name]: ChipGroup,
    [Icon.name]: Icon
  },

  data () {
    return {
      showPopper: false,
      isFocused: false
    }
  },

  props: {
    label: String,
    multiple: Boolean,
    disabled: Boolean,
    hideLabel: Boolean,
    hideLabelFocused: Boolean,
    transition: String,
    fixed: Boolean,
    height: Number,
    width: Number,
    autoWidth: Boolean,
    showCheckbox: Boolean,
    dragChips: Boolean,
    value: [String, Array],
    appendToBody: Boolean,
    boundariesElement: String,
    options: { type: Array, default: () => [] },
    boxed: Boolean
  },

  watch: {
    /* Update v-model if a currently selected option is removed */
    options: function (opt) {
      const updateModel = this.multiple
        ? this.value.filter(sel => opt.map(o => o.value).includes(sel))
        : opt.map(o => o.value).includes(this.value) ? this.value : ''

      this.$emit('input', updateModel)
    }
  },

  computed: {
    rootClasses: function () {
      return {
        'is-material': !this.boxed,
        'is-boxed': this.boxed,
        'is-disabled': this.disabled,
        'is-focused': this.isFocused,
        'is-selected': this.value && this.value.length,
        'is-chips': this.showChips
      }
    },
    showLabel: function () {
      return !this.boxed && !this.hideLabel && !this.hideLabelFocus
    },
    showChips: function () {
      return this.multiple && this.value && this.value.length > 0
    },
    inputValue: function () {
      return this.showChips ? null : this.getDisplayName(this.value)
    },
    inputPlaceholder: function () {
      return !this.boxed || this.showChips ? null : this.label
    }
  },

  methods: {
    deselectItem: function (value) {
      this.$emit('input', this.value.filter(e => e !== value))
    },
    getDisplayName: function (value) {
      return this.value && this.value.length ? this.options.find(o => o.value === value).name : ''
    }
  }
}
</script>

<style>
.fx-select {
  --style--font: var(--color--font-1);
  --style--background: transparent;
  --style--border: var(--color--border-5);
  --style--color: var(--color--primary);

  min-height: var(--fx-select--height);
  color: var(--style--font);
  background-color: var(--style--background);
  width: 100%;

  form {
    position: relative;
    font-weight: var(--font-weight--regular);
    min-height: inherit;
    display: flex;
    align-items: center;
  }

  input {
    border: none;
    background-color: transparent;
    flex: 1 0 auto;
    width: 0;
    cursor: pointer;
    color: var(--style--font);
  }

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s var(--easing--inf-outs);
    cursor: pointer;
  }

  ::placeholder {
    color: var(--style--font);
    opacity: 1;
  }

  .fx-chip-group {
    width: calc(100% - 26px);
    padding: 4px 0;
  }

  .fx-icon {
    margin-left: auto;
    transition: transform 0.4s ease;
    cursor: pointer;
  }

  &.is-chips input {
    padding: 0;
    flex: none;
  }

  &.is-disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &.is-focused {
    form { background-color: var(--color--fill-6) }
    &.is-material { form { &:before, &:after { width: 50% !important }}}
    &.is-boxed { form { border-color: var(--color--primary) !important }}
  }

  &.is-focused, &.is-selected {
    label {
      cursor: default;
      top: -6px;
      color: var(--style--color);
      @mixin font-size 12;
    }
  }

  &.is-boxed {
    form {
      border-radius: var(--border-radius--small);
      border: 1px solid var(--style--border);
      transition: border-color 0.2s ease;
      &:hover { border-color: var(--color--border-6) }
    }

    input { text-indent: var(--spacing--small) }
  }

  &.is-material {
    form {
      box-shadow: inset 0 -1px 0 0 var(--style--border);
      &:hover { box-shadow: inset 0 -2px 0 0 var(--style--border) }

      &:before, &:after {
        content:'';
        height: 2px;
        width: 0;
        bottom: 0;
        position: absolute;
        transition: width 0.5s var(--easing--inf-outs);
        background-color: var(--style--color);
      }
      &:before { left: 50% }
      &:after { right: 50% }
    }
  }
}
</style>
