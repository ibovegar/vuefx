<template>
  <li
    class="ks-vmenu-topic"
    :class="{ 'is-selected': $parent.$parent.value === value }"
    @click="$parent.$parent.selectItem(value)"
    >
    {{ label }}
  </li>
</template>

<script>
export default {
  name: 'ks-vmenu-topic',

  props: {
    value: String,
    label: String
  }
}
</script>

<style>
.ks-vmenu-topic {
  border-left: 2px solid var(--color--border-2);
  margin-left: var(--spacing--medium);
  padding-left: var(--spacing--medium);
  opacity: 0.7;

  &:hover {
    background-color: var(--color--fill);
  }
}
</style>
