<template>
  <section>
    <ks-button @button-clicked="selectedItems = ['print']">Select print</ks-button>
    <ks-dropdown v-model="selectedItems" multiple focus-color focus-check>
      <ks-button slot="trigger">Main menu</ks-button>
      <ks-dropdown-item value="save" close-popover>Save</ks-dropdown-item>
      <ks-dropdown-item separator/>
      <ks-dropdown-item disabled value="save_all">Save all</ks-dropdown-item>
      <ks-dropdown-item value="preferences">Preferences</ks-dropdown-item>
      <ks-dropdown-item value="print">Print</ks-dropdown-item>
      <ks-dropdown-item separator/>
      <ks-dropdown-item value="print_preview">Print preview</ks-dropdown-item>
      <ks-dropdown-item value="help"><ks-icon><account-circle/></ks-icon>User account</ks-dropdown-item>
    </ks-dropdown>
    <p>
      Selected items: {{ selectedItems }}
    </p>
  </section>
</template>

<script>
import AccountCircle from '@/assets/icons/account-circle'

export default {
  components: { AccountCircle },

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
