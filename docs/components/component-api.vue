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
          Lorem
          <!--ks-table :data-set="component.props" :bold="0" :faint="4"/-->
        </template>
        <template slot="Slots" v-if="component.slots && component.slots.length">
          Ipsum
          <!--ks-table :data-set="component.slots" :highlight="0"/-->
        </template>
        <template slot="Methods" v-if="component.methods && component.methods.length">
          Dolor
          <!--ks-table :data-set="component.methods" :highlight="0"/-->
        </template>
        <template slot="Events" v-if="component.events && component.events.length">
          Sit amet
          <!--ks-table :data-set="component.events" :highlight="0"/-->
        </template>
      </fx-tabs>
    </div>
  </div>
</template>

<script>
export default {
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
  .ks-table {
    margin-top: 20px;

    i {
      color: var(--color--font-1);
      background-color: var(--color--fill-1);
      padding: 1px 6px;
      border-radius: 3px;
      @mixin font-size 13;
    }
  }

  .box {
    border-radius: var(--border-radius--medium);
    border: 1px solid var(--color--fill-8);
  }
}
</style>
