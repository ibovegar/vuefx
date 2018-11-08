<template>
  <div class="title-1">
    <h1>{{ title }}</h1>
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

<style>
.title-1 {
  border-bottom: 1px solid var(--color--border-2);

  h1 {
    margin: 0;
    font-weight: var(--font-weight--regular);
    color: var(--color--font-1);
    @mixin font-size 40;
   }

  p {
    color: var(--color--font-3);
    line-height: 1.6;
    margin-bottom: var(--spacing--huge);
    margin-top: var(--spacing--medium);
    font-weight: var(--font-weight--regular);
    @mixin font-size 17.2;
  }
}
</style>
