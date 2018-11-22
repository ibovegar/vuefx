<template>
  <section>
    <Vmenu v-model="selectedItem">
      <VmenuCategory value="lorem ipsum dolor" label="lorem ipsum dolor" expanded>
        <VmenuTopic value="consectetur adipiscing elit" label=" consectetur adipiscing elit"/>
        <VmenuTopic value="sed do eiusmod tempor" label="sed do eiusmod tempor"/>
        <VmenuTopic value="consectetur adipiscing elit" label=" consectetur adipiscing elit"/>
        <VmenuTopic value="sed do eiusmod tempor" label="sed do eiusmod tempor"/>
      </VmenuCategory>
      <VmenuCategory value="ncididunt ut labore" label="ncididunt ut labore"/>
      <VmenuCategory value="exercitation ullamco laboris" label="exercitation ullamco laboris"/>
      <VmenuCategory value="reprehenderit in voluptate" label="reprehenderit in voluptate">
        <VmenuTopic value="sint occaecat" label="sint occaecat"/>
        <VmenuTopic value="culpa qui officia" label="culpa qui officia"/>
      </VmenuCategory>
    </Vmenu>
  </section>
</template>

<script>
export default {
  data () {
    return {
      selectedItem: 'lorem ipsum dolor'
    }
  }
}
</script>
