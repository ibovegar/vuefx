<template>
  <section>
    <ks-button @button-clicked="selectedItem = 'print'">Select print</ks-button>
    <ks-dropdown v-model="selectedItem" inherit-width focus-check close-on-click overlay>
      <div class="main-menu" slot="trigger">
        <ks-icon><i-settings/></ks-icon>
        Preferences
      </div>
      <ks-dropdown-item value="save"><ks-icon><account-circle/></ks-icon>Save</ks-dropdown-item>
      <ks-dropdown-item separator/>
      <ks-dropdown-item disabled value="save_all">Save all</ks-dropdown-item>
      <ks-dropdown-item value="preferences"><ks-checkbox>Preferences</ks-checkbox></ks-dropdown-item>
      <ks-dropdown-item value="print">Print</ks-dropdown-item>
      <ks-dropdown-item separator/>
      <ks-dropdown-item value="print_preview">Print preview</ks-dropdown-item>
      <ks-dropdown-item value="help">Help</ks-dropdown-item>
    </ks-dropdown>
    Clicked item: {{ selectedItem }}
  </section>
</template>

<script>
import ISettings from '@/assets/icons/settings'

export default {
  components: { ISettings },

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
