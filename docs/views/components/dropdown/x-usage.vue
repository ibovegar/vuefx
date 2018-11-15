<template>
  <section>
    <button @click="selectedItem = 'print'">
      Select print
    </button>
    <fx-dropdown
      v-model="selectedItem"
      inherit-width
      focus-check
      close-on-click
      fixed
      >
      <button slot="trigger">Preferences</button>
      <fx-dropdown-item value="save">
        <fx-icon name="account-circle"/>
      </fx-dropdown-item>
      <fx-dropdown-item separator/>
      <fx-dropdown-item disabled value="save_all">Save all</fx-dropdown-item>
      <fx-dropdown-item value="preferences">Preferences</fx-dropdown-item>
      <fx-dropdown-item value="print">Print</fx-dropdown-item>
      <fx-dropdown-item separator/>
      <fx-dropdown-item value="print_preview">Print preview</fx-dropdown-item>
      <fx-dropdown-item value="help">Help</fx-dropdown-item>
    </fx-dropdown>
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
