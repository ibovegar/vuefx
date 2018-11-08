<template>
  <section>
    <ks-vmenu v-model="selectedItem">
      <ks-vmenu-category value="lorem ipsum dolor" label="lorem ipsum dolor" expanded>
        <ks-vmenu-topic value="consectetur adipiscing elit" label=" consectetur adipiscing elit"/>
        <ks-vmenu-topic value="sed do eiusmod tempor" label="sed do eiusmod tempor"/>
        <ks-vmenu-topic value="consectetur adipiscing elit" label=" consectetur adipiscing elit"/>
        <ks-vmenu-topic value="sed do eiusmod tempor" label="sed do eiusmod tempor"/>
      </ks-vmenu-category>
      <ks-vmenu-category value="ncididunt ut labore" label="ncididunt ut labore"/>
      <ks-vmenu-category value="exercitation ullamco laboris" label="exercitation ullamco laboris"/>
      <ks-vmenu-category value="reprehenderit in voluptate" label="reprehenderit in voluptate">
        <ks-vmenu-topic value="sint occaecat" label="sint occaecat"/>
        <ks-vmenu-topic value="culpa qui officia" label="culpa qui officia"/>
      </ks-vmenu-category>
    </ks-vmenu>
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
