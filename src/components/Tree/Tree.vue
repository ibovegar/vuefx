<template>
  <div
    class="ks-tree"
    :class="{ 'ks-tree--clickable': this.clickable }"
    >
    <ul>
      <li
        class="ks-tree__category"
        v-for="(value, key) of value" :key="key"
        >
        <div
          :class="{ 'is-selected': selected === key }"
          @click="toggle(key)"
          >
          <ks-icon
            v-if="value.topics.length > 0"
            :class="{ 'ks-icon--down' : value.isExpanded }"
            >
            <menu-right/>
          </ks-icon>
          <span>{{ value.label }}</span>
        </div>
        <ul
          class="ks-tree__topics"
          :ref="key"
          >
          <li
            v-for="topic of value.topics"
            :key="topic + key"
            @click="$emit('topic-clicked', topic)"
            >
            {{ value.topics.length === 0 ? emptyLabel : topic }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuRight from '@/assets/icons/menu-right'
import Expandable from '@/mixins/expandable.js'

export default {
  name: 'ks-tree',

  components: { MenuRight },

  mixins: [ Expandable ],

  props: {
    /* Array of objects. Supports only one level (i.e. no recursion) of child elements.
     *  key1: {
     *    label: "Lorem ipsum", // Category display name
     *    topics: ['topic1', 'topic2', ...] // Topic display names
     *    isExpanded: Boolean // Expanded by default
     *  }
     */
    value: { type: Object, required: true },
    emptyLabel: { type: String, default: 'Empty' }, // Display placeholder when there are no topics
    clickable: { type: Boolean, default: false }
  },

  data () {
    return {
      selected: ''
    }
  },

  methods: {
    toggle: function (key) {
      if (this.value[key].topics.length > 0 && this.emptyLabel.length > 0) {
        this.value[key].isExpanded
          ? this.collapseSection(this.$refs[key][0])
          : this.expandSection(this.$refs[key][0])

        /* Update isExpanded. This triggers a watch */
        this.value[key].isExpanded = !this.value[key].isExpanded
      }
      this.selected = key
    }
  },

  mounted () {
    for (let key of Object.keys(this.value)) {
      if (!this.value[key].isExpanded) {
        this.collapseSection(this.$refs[key][0], true)
      }
    }
  }
}
</script>

<style>
.ks-tree {
  text-align: left;
  color: var(--color--font-primary);
  @mixin font-size 14;

  &__category {
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-weight: var(--font-weight--regular);

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .ks-icon {
      order: 0;
      transition: all 200ms ease-in-out;
      cursor: pointer;
    }
  }

  &__topics {
    overflow: hidden;
    height: auto;
    transition: height 0.3s cubic-bezier(.55,0,.1,1);
    font-weight: var(--font-weight--medium);

    li {
      padding-left: var(--spacing--huge);
    }
  }

  &--clickable {
    cursor: pointer;
    color: var(--color--link);
  }

  &--clickable &__topics li:hover {
    color: var(--color--link-hover);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      line-height: 31px;

      span {
        position: relative;
      }
    }
  }
}
</style>
