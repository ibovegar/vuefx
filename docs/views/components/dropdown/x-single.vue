<template>
  <section>
    <fx-button @button-clicked="selectedItem = 'print'">
      Select print
    </fx-button>
    <fx-dropdown
      v-model="selectedItem"
      inherit-width
      focus-check
      close-on-click
      overlay
      >
      <fx-icon slot="trigger" class="main-menu" name="settings">
        Preferences
      </fx-icon>
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
