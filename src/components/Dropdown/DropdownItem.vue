<template>
  <li
    class="fx-dropdown-item"
    :class="[rootClasses, selectedClass]"
    :style="rootStyles"
    @click="$parent.selectItem(value, $event.target)"
    >
    <!--fx-checkbox
      v-if="$parent.showCheckbox"
      v-model="isSelected"
      passive
      >
      <slot/>
    </fx-checkbox-->
    <!--template v-else-->
      <slot/>
    <!--/template-->
    <Icon
      v-if="isSelected && $parent.focusCheck"
      class="checkmark"
      name="checkmark"
      />
  </li>
</template>

<script>
export default {
  name: 'FxDropdownItem',

  props: {
    value: { type: String, default: null },
    separator: Boolean,
    disabled: Boolean,
    height: Number
  },

  computed: {
    isSelected: function () {
      return this.$parent.multiple
        ? this.$parent.value.includes(this.value)
        : this.value === this.$parent.value
    },
    rootClasses: function () {
      return {
        'is-separator': this.separator,
        'is-disabled': this.$parent.disabled || this.disabled,
        'has-focus': this.$parent.focusedItem === this.value
      }
    },
    rootStyles: function () {
      return {
        height: this.height + 'px'
      }
    },
    selectedClass: function () {
      if (!this.isSelected) return
      return {
        'focus-background': this.$parent.focusBg,
        'focus-color': this.$parent.focusColor,
        'focus-checkmark': this.$parent.focusCheck
      }
    }
  }
}
</script>

<style>
.fx-dropdown-item {
  padding: 0 var(--spacing--medium);
  height: 50px;
  font-weight: var(--font-weight--regular);
  color: var(--color--font-1);
  cursor: pointer;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: background-color 0.15s, color 0.15s;

  &:hover, &:focus {
    background-color: var(--color--fill-4);
    outline: none;
  }

  &.has-focus { background-color: var(--color--fill-3) }

  &.is-separator {
    background-color: var(--color--fill-6);
    height: 1px;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  &.focus-background {
    background-color: var(--color--fill-5);
  }

  &.focus-color {
    color: var(--color--primary);
  }

  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .checkmark {
    margin-left: auto;
    color: var(--color--font-1);
  }
}
</style>
