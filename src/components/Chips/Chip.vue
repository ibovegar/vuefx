<template>
  <div
    class="fx-chip"
    :class="rootClasses"
    :style="[colorStyles, rootStyles]"
    ><!--custom.root>
    <span> :style="custom.label"-->
      <slot/>
    <!--/span-->
    <fx-icon
      v-if="close"
      name="close"
      @click.native.stop="$emit('input', value)"
      /><!--:style="custom.icon"-->
  </div>
</template>

<script>
import ColorMixin from '@/mixins/colors.js'
import Icon from '../Icon'

export default {
  name: 'FxChip',

  mixins: [ ColorMixin ],

  components: {
    [Icon.name]: Icon
  },

  props: {
    value: String,
    close: Boolean,
    raised: Boolean,
    height: Number
  },

  data () {
    return {
      gutter: 0
      // custom: {
      //   root: {},
      //   avatar: {},
      //   icon: {},
      //   deleteIcon: {},
      //   label: {}
      // }
    }
  },

  computed: {
    rootClasses: function () {
      return {
        'is-raised': this.raised
      }
    },
    rootStyles: function () {
      return {
        minHeight: this.height + 'px',
        margin: this.gutter / 2 + 'px'
      }
    }
  },

  created () {
    if (this.$parent.$options._componentTag === 'fx-chip-group') {
      this.gutter = this.$parent._data.$_gutter
    }
  }
}
</script>

<style>
.fx-chip {
  --style--font: var(--color--font-1);
  --style--background: var(--color--fill-7);
  --style--border: transparent;
  --style--color: var(--color--primary);
  --height: 34px;

  flex-direction: row;
  display: inline-flex;
  align-items: center;
  border-radius: 500px;
  border: 1px solid var(--style--border);
  min-height: var(--height);
  padding: 0 var(--spacing--medium);
  color: var(--style--font);
  background-color: var(--style--background);
  flex-shrink: 0;

  &.is-raised {
    @mixin elevation 2;
  }

  .fx-icon[name="close"] {
    cursor: pointer;
    margin-left: 8px;
    margin-right: -6px;
    color: var(--style--font);
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
