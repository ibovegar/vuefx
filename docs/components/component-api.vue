<template>
  <div class="component-api">
    <title-2 title="Interface"/>
    <div
      class="box"
      v-for="component in api"
      :key="component.name"
      >
      <h3 v-if="component.name">{{ component.name }}</h3>
      <fx-tabs v-model="selected" background="flat">
        <template slot="Props" v-if="component.props && component.props.length">
          <api-table
            :data="component.props"
            :columns="['name', 'type', 'values', 'description', 'default']"
            />
        </template>
        <template slot="Slots" v-if="component.slots && component.slots.length">
          <api-table
            :data="component.slots"
            :columns="['name', 'description']"
            />
        </template>
        <template slot="Methods" v-if="component.methods && component.methods.length">
          <api-table
            :data="component.methods"
            :columns="['name', 'description', 'value']"
            />
        </template>
        <template slot="Events" v-if="component.events && component.events.length">
          <api-table
            :data="component.events"
            :columns="['name', 'description', 'value']"
            />
        </template>
      </fx-tabs>
    </div>
  </div>
</template>

<script>
import ApiTable from './component-api-table'

export default {
  components: { ApiTable },

  data () {
    return {
      selected: 'Props'
    }
  },

  props: {
    api: Array
  }
}
</script>

<style>
.component-api {
  .box {
    border-radius: var(--border-radius--medium);
    border: 1px solid var(--color--fill-8);
  }
}
</style>
