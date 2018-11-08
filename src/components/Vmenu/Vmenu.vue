<template>
  <div class="fx-vmenu">
    <ul>
      <slot/>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'fx-vmenu',

  props: {
    value: String
  },

  data () {
    return {
      expandedItems: [],
      vueRouter: false
    }
  },

  methods: {
    selectItem: function (item) {
      this.$emit('input', item)

      if (this.vueRouter) this.$router.push({ path: item })
    }
  },

  mounted () {
    if (this.$attrs.hasOwnProperty('vue-router')) {
      this.vueRouter = true
    }
  }
}
</script>

<style>
.fx-vmenu {
  text-align: left;
  color: var(--color--font-2);
  padding-left: var(--spacing--large);
  padding-right: var(--spacing--small);
  @mixin font-size 14;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      line-height: 40px;
      cursor: pointer;

      span {
        position: relative;
      }
    }
  }
}
</style>
