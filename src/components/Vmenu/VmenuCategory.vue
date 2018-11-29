<template>
  <li class="fx-vmenu-category">
    <div
      :class="{ 'is-selected': $parent.value === value }"
      @click="selectCategory"
      >
      <fx-icon
        v-if="$slots.default"
        :class="{ 'down' : isExpanded }"
        name="menu-right"
        />
      <span>{{ label }}</span>
    </div>
    <ul
      ref="topics"
      class="topics"
      >
      <slot/>
    </ul>
  </li>
</template>

<script>
import Expandable from '@/mixins/expandable.js'
import Icon from '../Icon/Icon'

export default {
  name: 'FxVmenuCategory',

  mixins: [ Expandable ],

  components: {
    [Icon.name]: Icon
  },

  props: {
    value: String,
    label: String
  },

  data () {
    return {
      isExpanded: false
    }
  },

  methods: {
    selectCategory: function () {
      if (this.value && this.value.length) {
        this.$parent.selectItem(this.value)
      }

      if (this.$slots.default) {
        this.isExpanded
          ? this.collapseSection(this.$refs.topics)
          : this.expandSection(this.$refs.topics)

        this.isExpanded = !this.isExpanded
      }
    }
  },

  mounted () {
    if (this.$attrs.hasOwnProperty('expanded')) {
      this.isExpanded = true
    }
    else {
      this.collapseSection(this.$refs.topics, true)
    }
  }
}
</script>

<style>
.fx-vmenu-category {
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: var(--spacing--large);
    padding-right: var(--spacing--small);

    &:hover {
      background-color: var(--color--fill-5);
    }
    .fx-icon {
      order: 1;
      margin-left: auto;
      transition: all 0.5s var(--transition--ease-in-out);
    }
  }

  .topics {
    height: auto;
    transition: height 0.3s var(--transition--ease-in-out);
    overflow: hidden;
  }

  .is-selected {
    color: var(--color--primary);
    font-weight: var(--font-weight--medium);
  }
}
</style>
