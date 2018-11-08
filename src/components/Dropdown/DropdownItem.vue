<template>
  <li
    class="ks-dropdown-item"
    :class="[rootClasses, selectedClass]"
    @click="$parent.selectItem(value, $event.target)"
    >
    <ks-checkbox
      v-if="$parent.showCheckbox"
      v-model="isSelected"
      passive>
      <slot/>
    </ks-checkbox>
    <template v-else>
      <slot/>
    </template>
    <ks-icon
      v-if="isSelected && $parent.focusCheckmark"
      class="checkmark ks-icon--tiny"
      name="checkmark"
      />
  </li>
</template>

<script>
export default {
  name: 'ks-dropdown-item',

  props: {
    value: { type: String, default: null },
    separator: Boolean,
    disabled: Boolean
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
    selectedClass: function () {
      if (!this.isSelected) return
      return {
        'focus-background': this.$parent.focusBackground,
        'focus-color': this.$parent.focusColor,
        'focus-checkmark': this.$parent.focusCheckmark
      }
    }
  }
}
</script>

<style>
.ks-dropdown-item {
  padding: var(--spacing--medium);
  font-weight: var(--font-weight--regular);
  cursor: pointer;
  text-align: left;
  cursor: pointer;
  color: var(--color--font);
  white-space: nowrap;
  margin: 1px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  @mixin font-size 14;

  &:hover, &:focus {
    background-color: var(--color--fill-3);
    outline: none;
  }

  &.has-focus {
    background-color: var(--color--fill-3);
  }

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
