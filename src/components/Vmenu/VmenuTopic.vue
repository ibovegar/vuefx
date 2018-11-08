<template>
  <li
    class="fx-vmenu-topic"
    :class="{ 'is-selected': $parent.$parent.value === value }"
    @click="$parent.$parent.selectItem(value)"
    >
    {{ label }}
  </li>
</template>

<script>
export default {
  name: 'fx-vmenu-topic',

  props: {
    value: String,
    label: String
  }
}
</script>

<style>
.fx-vmenu-topic {
  border-left: 2px solid var(--color--border-3);
  margin-left: var(--spacing--large);
  padding-left: var(--spacing--medium);

  &.is-selected {
    border-left: 2px solid var(--color--primary) !important;
  }

  &:hover {
    background-color: var(--color--fill-4);
  }
}
</style>
