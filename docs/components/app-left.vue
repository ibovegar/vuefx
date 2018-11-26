<template>
  <aside class="app-left">
    <Vmenu v-model="selectedNavItem" vue-router>
      <VmenuCategory value="/quick_start" label="Quick start" expanded>
        <VmenuTopic value="/installation" label="Installation"/>
        <VmenuTopic value="/usage" label="Usage & other"/>
      </VmenuCategory>
      <VmenuCategory value="/themes" label="Themes"/>
      <VmenuCategory value="/colors" label="Colors"/>
      <VmenuCategory value="/customization" label="Customization" expanded>
        <VmenuTopic value="/tabs" label="Tabs"/>
        <VmenuTopic value="/badge" label="Badge"/>
        <VmenuTopic value="/button" label="Button"/>
      </VmenuCategory>
      <VmenuCategory value="/transition" label="Transitions"/>
      <VmenuCategory value="/typograpy" label="Typograpy"/>
      <VmenuCategory value="/layout" label="Layout"/>
      <VmenuCategory value="/icons" label="Icons"/>
      <VmenuCategory label="Components">
        <VmenuTopic value="/badge" label="Badge"/>
        <VmenuTopic value="/chips" label="Chips"/>
        <VmenuTopic value="/dropdown" label="Dropdown"/>
        <VmenuTopic value="/popover" label="Popover"/>
        <VmenuTopic value="/select" label="Select"/>
        <VmenuTopic value="/tabs" label="Tabs"/>
        <VmenuTopic value="/tooltip" label="Tooltip"/>
        <VmenuTopic value="/vmenu" label="Vmenu"/>
      </VmenuCategory>
    </Vmenu>
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
  display: none;

  @media (min-width: 1600px) {
    display: block;
  }

  .fx-vmenu {
    //padding-left: var(--spacing--large);
    //padding-right: var(--spacing--large);
    padding-top: var(--spacing--huge);
    flex: 1;
  }
}
</style>
