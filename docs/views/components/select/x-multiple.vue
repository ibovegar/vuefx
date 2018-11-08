<template>
  <section>
    <component-debug :width="50">
      <fx-select
        label="Selected fruits"
        transition="slide-down"
        :options="types"
        :height="42"
        v-model="selectedTypes"
        multiple
        fixed
        focus-checkmark
        />
      <div slot="debug">
        <button @click="rename">Change name</button>
        <button @click="remove">Remove item</button>
        <button @click="add">Add item</button>
      </div>
    </component-debug>
  </section>
</template>

<script>
export default {
  data () {
    return {
      selectedTypes: [],
      types: [
        { name: 'Apple', value: 'fruit_1' },
        { name: 'Banana', value: 'fruit_2' },
        { name: 'Orange', value: 'fruit_3' },
        { name: 'Kiwi', value: 'fruit_4' }
      ]
    }
  },

  methods: {
    rename: function () {
      this.types[0].name = 'Pear'
    },
    add: function () {
      this.types.push({ name: 'Apricote', value: 'apricote' })
    },
    remove: function () {
      this.types.splice(0, 1)
    }
  }
}
</script>

<style scoped>

button {
  background: white;
  border: 0;
  outline: 0;
  width: 100%;
  height: 36px;
  padding-top: 2px;
  border-radius: 3px;
  text-transform: uppercase;
  @mixin elevation 1;
}
button + button {
  margin-top: 16px;
}
</style>
