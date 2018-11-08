<template>
  <div class="title-3">
    <h3>{{ title }}</h3>
    <p v-if="$slots.default && $slots.default.length"><slot/></p>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.title-3 {
  padding-bottom: var(--spacing--large);

  h3 {
    margin: 0;
    font-weight: var(--font-weight--regular);
    @mixin font-size 18;
  }

  p {
    color: var(--color--font-3);
    margin-top: var(--spacing--small);
    line-height: 1.5;
    @mixin font-size 14;
  }
}
</style>
