<template>
  <div class="title-2">
    <h2>{{ title }}<span>#</span></h2>
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
.title-2 {
  padding: var(--spacing--huge) 0;

  h2 {
    margin: 0;
    font-weight: var(--font-weight--regular);
    color: var(--color--font-1);
    @mixin font-size 28;
  }

  p {
    line-height: 1.5;
    color: var(--color--font-3);
    margin: 0;
    padding-top: var(--spacing--medium);
    @mixin font-size 16;
   }

  span {
    margin-left: 8px;
    color: var(--color--font-5);
    cursor: pointer;
    @mixin font-size 24;

    &:hover {
      color: var(--color--font-2);
    }
  }
}
</style>
