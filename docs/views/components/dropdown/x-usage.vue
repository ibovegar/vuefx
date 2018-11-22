<template>
  <section>
    <button @click="selectedItem = 'print'">Select print</button>
    <Dropdown
      v-model="selectedItem"
      auto-width
      focus-check
      close-on-click
      fixed
      >
      <button slot="trigger">Preferences</button>
      <DropdownItem value="save"><Icon name="account-circle"/></DropdownItem>
      <DropdownItem separator/>
      <DropdownItem disabled value="save_all">Save all</DropdownItem>
      <DropdownItem value="preferences">Preferences</DropdownItem>
      <DropdownItem value="print">Print</DropdownItem>
      <DropdownItem separator/>
      <DropdownItem value="print_preview">Print preview</DropdownItem>
      <DropdownItem value="help">Help</DropdownItem>
    </Dropdown>
    Clicked item: {{ selectedItem }}
  </section>
</template>

<script>
export default {
  data () {
    return {
      selectedItem: ''
    }
  }
}
</script>

<style scoped>
.ks-icon {
  margin-right: var(--spacing--small);
}
</style>
