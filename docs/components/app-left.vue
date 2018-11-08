<template>
  <aside class="app-left">
    <ks-vmenu v-model="selectedNavItem" vue-router>
      <ks-vmenu-category value="/quick_start" label="Quick start" expanded>
        <ks-vmenu-topic value="/installation" label="Installation"/>
        <ks-vmenu-topic value="/usage" label="Usage & other"/>
      </ks-vmenu-category>
      <ks-vmenu-category value="/themes" label="Themes"/>
      <ks-vmenu-category value="/colors" label="Colors"/>
      <ks-vmenu-category value="/customization" label="Customization" expanded>
        <ks-vmenu-topic value="/tabs" label="Tabs"/>
        <ks-vmenu-topic value="/badge" label="Badge"/>
        <ks-vmenu-topic value="/button" label="Button"/>
      </ks-vmenu-category>
      <ks-vmenu-category value="/typograpy" label="Typograpy"/>
      <ks-vmenu-category value="/typograpy" label="Application layout"/>
      <ks-vmenu-category value="/icons" label="Icons"/>
      <ks-vmenu-category label="Components">
        <ks-vmenu-topic value="/badge" label="Badge"/>
        <ks-vmenu-topic value="/chips" label="Chips"/>
        <ks-vmenu-topic value="/dropdown" label="Dropdown"/>
        <ks-vmenu-topic value="/popover" label="Popover"/>
        <ks-vmenu-topic value="/select" label="Select"/>
        <ks-vmenu-topic value="/tabs" label="Tabs"/>
        <ks-vmenu-topic value="/tree" label="Tree"/>
        <ks-vmenu-topic value="/tooltip" label="Tooltip"/>
        <ks-vmenu-topic value="/vmenu" label="Vmenu"/>
      </ks-vmenu-category>
    </ks-vmenu>
  </aside>
</template>

<script>
export default {
  name: 'app-left',

  data () {
    return {
      selectedNavItem: '/installation'
    }
  }
}
</script>

<style>
.app-left {
  width: var(--width--app-left);
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  background-color: var(--color--fill-2);
  border-right: 1px solid var(--color--border-2);

  .ks-vmenu {
    padding-left: var(--spacing--large);
    padding-right: var(--spacing--large);
    padding-top: var(--spacing--huge);
    flex: 1;
    @mixin font-size 13;
  }
}
</style>
