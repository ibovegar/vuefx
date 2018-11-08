<template>
  <section>
    <fx-vmenu v-model="selectedItem">
      <fx-vmenu-category value="lorem ipsum dolor" label="lorem ipsum dolor" expanded>
        <fx-vmenu-topic value="consectetur adipiscing elit" label=" consectetur adipiscing elit"/>
        <fx-vmenu-topic value="sed do eiusmod tempor" label="sed do eiusmod tempor"/>
        <fx-vmenu-topic value="consectetur adipiscing elit" label=" consectetur adipiscing elit"/>
        <fx-vmenu-topic value="sed do eiusmod tempor" label="sed do eiusmod tempor"/>
      </fx-vmenu-category>
      <fx-vmenu-category value="ncididunt ut labore" label="ncididunt ut labore"/>
      <fx-vmenu-category value="exercitation ullamco laboris" label="exercitation ullamco laboris"/>
      <fx-vmenu-category value="reprehenderit in voluptate" label="reprehenderit in voluptate">
        <fx-vmenu-topic value="sint occaecat" label="sint occaecat"/>
        <fx-vmenu-topic value="culpa qui officia" label="culpa qui officia"/>
      </fx-vmenu-category>
    </fx-vmenu>
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
