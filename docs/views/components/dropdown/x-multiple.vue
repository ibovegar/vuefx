<template>
  <section>
    <button @click="selectedItems = ['print']">Select print</button>
    <Dropdown
      v-model="selectedItems"
      focus-color
      >
      <button slot="trigger">Main menu</button>
      <DropdownItem value="save" close-popover>Save</DropdownItem>
      <DropdownItem separator/>
      <DropdownItem disabled value="save_all">Save all</DropdownItem>
      <DropdownItem value="preferences">Preferences</DropdownItem>
      <DropdownItem value="print">Print</DropdownItem>
      <DropdownItem separator/>
      <DropdownItem value="print_preview">Print preview</DropdownItem>
      <DropdownItem value="help"><Icon name="account-circle"/>User account</DropdownItem>
    </Dropdown>
    <p>
      Selected items: {{ selectedItems }}
    </p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      selectedItems: []
    }
  }
}
</script>

<style scoped>
.ks-icon {
  color: var(--color--border-darken);
  margin-right: 5px;
}
</style>
