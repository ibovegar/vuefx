<template>
  <section>
    <button @click="selectedItem = 'print'">Select print</button>
    <Dropdown
      v-model="selectedItem"
      fixed
      overlay
      auto-width
      >
      <button slot="trigger">Preferences</button>
      <DropdownItem value="open" icon-left><Icon name="folder-open" font5/>Open existing project</DropdownItem>
      <DropdownItem value="create"><Icon name="note-plus-outline" font5/>Create new project</DropdownItem>
      <DropdownItem separator/>
      <DropdownItem value="export"><Icon name="export" font5/>Export</DropdownItem>
      <DropdownItem value="save_all" disabled><Icon name="content-save" font5/>Save</DropdownItem>
      <DropdownItem value="save_all" disabled><Icon name="content-save-all" font6/>Save all</DropdownItem>
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
