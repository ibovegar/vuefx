<template>
  <div class="app-right">
    <div class="toc">
      <!--div class="title">CONTENT</div-->
      <div class="toc_1">Usage</div>
      <div class="toc_1">Interface</div>
      <div class="toc_2">Dropdown</div>
      <div class="toc_2">Dropdown item</div>
      <div class="toc_1">Examples</div>
      <div class="toc_2">Single</div>
      <div class="toc_2 selected">Multiple</div>
      <div class="toc_2">Themes</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-right',

  data () {
    return {
    }
  }
}
</script>

<style>
.app-right {
  width: var(--width--app-right);
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding-top: var(--spacing--large);

  .toc {
    color: var(--color--font-1);
    margin-right: var(--spacing--huge);
    @mixin font-size 13;

    &_1, &_2, .title {
      padding: 6px 0;
      box-shadow: inset 1px 0 0 var(--color--border-2);
    }

    .title {
      padding-left: 20px;
    }

    &_1 {
      padding-left: 20px;
    }

    &_2 {
      padding-left: 30px;
      color: var(--color--font-2);
    }

    .selected {
      font-weight: var(--font-weight--medium);
      box-shadow: inset 2px 0 0 var(--color--primary);
      color: var(--color--primary);
    }
  }
}
</style>
