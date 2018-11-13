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
    :style="[{ height: height + 'px' }, colorStyles]"
    @input="$emit('input', $event)"
    @show="showPopper = true"
    @hide="showPopper = false"
    overlay
    >
    <form slot="trigger" @click="$refs.input.focus()">
      <input
        ref="input"
        :placeholder="inputPlaceholder"
        :value="inputValue"
        @focus="isFocused = true"
        @blur="isFocused = false"
        readonly
        />
      <label v-if="showLabel">{{ label }}</label>
      <span class="focus-border"><i></i></span>
      <fx-chip-group v-if="showChips">
        <fx-chip
          v-for="value in value" :key="value"
          :value="value"
          background="fill-6"
          @input="deselectItem(value)"
          close
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

export default {
  name: 'fx-select',

  mixins: [ ColorMixin ],

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
    autoWidth: Boolean,
    showCheckbox: Boolean,
    value: [String, Array],
    appendToBody: Boolean,
    boundariesElement: String,
    options: { type: Array, required: true, default: () => [] },
    theme: {
      type: String,
      default: 'material',
      validator: value => { return ['material', 'boxed'].includes(value) }
    }
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
        'is-material': this.theme === 'material',
        'is-boxed': this.theme === 'boxed',
        'is-disabled': this.disabled,
        'is-focused': this.isFocused,
        'is-selected': this.value && this.value.length,
        'is-chips': this.showChips
      }
    },
    showLabel: function () {
      return this.theme === 'material' && !this.hideLabel && !this.hideLabelFocus
    },
    showChips: function () {
      return this.multiple && this.value && this.value.length > 0
    },
    inputValue: function () {
      return this.showChips ? null : this.getDisplayName(this.value)
    },
    inputPlaceholder: function () {
      return this.theme === 'material' || this.showChips ? null : this.label
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

  width: 100%;
  display: block;
  min-height: var(--fx-select--height);
  color: var(--style--font);
  background-color: var(--style--background);

  form {
    position: relative;
    font-weight: var(--font-weight--regular);
    min-height: inherit;
    width: 100%;
    display: flex;
    align-items: center;
  }

  input {
    border: none;
    background-color: transparent;
    flex: 1 0 auto;
    width: 0;
    height: inherit;
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
    height: 100%;
    padding: 5px 0;
    width: calc(100% - 26px);
    cursor: pointer;
    .fx-chip { height: auto }
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
