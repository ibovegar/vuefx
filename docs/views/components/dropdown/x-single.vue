<template>
  <section>
    <button @click="selectedItem = 'print'">Select print</button>
    <Dropdown
      v-model="selectedItem"
      close-on-click
      overlay
      >
      <Icon slot="trigger" class="main-menu" name="settings">Preferences</Icon>
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
.main-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--color--font-secondary);
  border: 2px solid var(--color--border-darken);
  display: inline-flex;
  padding: var(--spacing--small) var(--spacing--medium);

  .ks-icon {
    margin-right: var(--spacing--small);
  }
}
</style>
