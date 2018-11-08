<template>
  <aside class="app-left">
    <fx-vmenu v-model="selectedNavItem" vue-router>
      <fx-vmenu-category value="/quick_start" label="Quick start" expanded>
        <fx-vmenu-topic value="/installation" label="Installation"/>
        <fx-vmenu-topic value="/usage" label="Usage & other"/>
      </fx-vmenu-category>
      <fx-vmenu-category value="/themes" label="Themes"/>
      <fx-vmenu-category value="/colors" label="Colors"/>
      <fx-vmenu-category value="/customization" label="Customization" expanded>
        <fx-vmenu-topic value="/tabs" label="Tabs"/>
        <fx-vmenu-topic value="/badge" label="Badge"/>
        <fx-vmenu-topic value="/button" label="Button"/>
      </fx-vmenu-category>
      <fx-vmenu-category value="/typograpy" label="Typograpy"/>
      <fx-vmenu-category value="/typograpy" label="Application layout"/>
      <fx-vmenu-category value="/icons" label="Icons"/>
      <fx-vmenu-category label="Components">
        <fx-vmenu-topic value="/badge" label="Badge"/>
        <fx-vmenu-topic value="/chips" label="Chips"/>
        <fx-vmenu-topic value="/dropdown" label="Dropdown"/>
        <fx-vmenu-topic value="/popover" label="Popover"/>
        <fx-vmenu-topic value="/select" label="Select"/>
        <fx-vmenu-topic value="/tabs" label="Tabs"/>
        <fx-vmenu-topic value="/tooltip" label="Tooltip"/>
        <fx-vmenu-topic value="/vmenu" label="Vmenu"/>
      </fx-vmenu-category>
    </fx-vmenu>
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

  .fx-vmenu {
    //padding-left: var(--spacing--large);
    //padding-right: var(--spacing--large);
    padding-top: var(--spacing--huge);
    flex: 1;
  }
}
</style>
