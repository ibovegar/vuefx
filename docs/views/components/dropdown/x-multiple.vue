<template>
  <section>
    <button @click="selectedItems = ['print']">
      Select print
    </button>
    <fx-dropdown
      v-model="selectedItems"
      multiple
      focus-color
      focus-check
      >
      <button slot="trigger">Main menu</button>
      <fx-dropdown-item value="save" close-popover>Save</fx-dropdown-item>
      <fx-dropdown-item separator/>
      <fx-dropdown-item disabled value="save_all">Save all</fx-dropdown-item>
      <fx-dropdown-item value="preferences">Preferences</fx-dropdown-item>
      <fx-dropdown-item value="print">Print</fx-dropdown-item>
      <fx-dropdown-item separator/>
      <fx-dropdown-item value="print_preview">Print preview</fx-dropdown-item>
      <fx-dropdown-item value="help">
        <fx-icon name="account-circle"/>User account
      </fx-dropdown-item>
    </fx-dropdown>
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
