<template>
  <div class="ks-vmenu">
    <ul>
      <slot/>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ks-vmenu',

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
.ks-vmenu {
  text-align: left;
  //font-weight: var(--font-weight--medium);
  color: var(--color--font-1);
  @mixin font-size 14;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      line-height: 40px;

      span {
        position: relative;
      }
    }
  }
}
</style>
