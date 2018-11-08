<template>
  <div class="code-preview">
    <pre v-highlightjs><code :class="type">{{ code }}</code></pre>
  </div>
</template>

<script>
export default {
  props: {
    code: String,
    type: {
      type: String,
      default: 'html'
    }
  }
}
</script>

<style>
.code-preview {
  padding: 20px;
  padding-top: 0;
  border-bottom-right-radius: var(--border-radius--medium);
  border-radius: var(--border-radius--small);
  overflow: auto;

  pre, code {
    @mixin font-size 14;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    background-color: transparent;
  }
}
</style>
