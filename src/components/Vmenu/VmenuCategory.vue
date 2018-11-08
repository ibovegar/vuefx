<template>
  <li class="ks-vmenu-category">
    <div
      :class="{ 'is-selected': $parent.value === value }"
      @click="selectCategory"
      >
      <ks-icon
        v-if="$slots.default"
        :class="{ 'ks-icon--down' : isExpanded }"
        name="chevron-right"
        />
      <span>{{ label }}</span>
    </div>
    <ul
      ref="topics"
      class="ks-vmenu-category__topics"
      >
      <slot/>
    </ul>
  </li>
</template>

<script>
import Expandable from '@/mixins/expandable.js'

export default {
  name: 'ks-vmenu-category',

  mixins: [ Expandable ],

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
.ks-vmenu-category {
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: var(--spacing--medium);
    padding-right: var(--spacing--small);

    &:hover {
      background-color: var(--color--fill-0);
    }

    .ks-icon {
      order: 1;
      margin-left: auto;
      transition: all 0.5s var(--transition--ease-in-out);
    }
  }

  &__topics {
    height: auto;
    transition: height 0.3s var(--transition--ease-in-out);
    overflow: hidden;
  }

  .is-selected {
    border-left: 2px solid var(--color--primary) !important;
    color: var(--color--primary);
    font-weight: var(--font-weight--medium);
  }
}
</style>
