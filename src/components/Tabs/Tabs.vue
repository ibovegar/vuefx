<template>
  <div class="fx-tabs">
    <nav :class="navClasses" :style="{ height: height + 'px' }">
      <div class="stroke" ref="stroke" :style="[strokeHeight, strokeColor]"></div>
      <span
        v-for="tab in tabs"
        :key="tab"
        :class="{ 'is-selected': tab === value }"
        @click="onClick(tab, $event)"
        >
        {{ tab }}
      </span>
    </nav>
    <fx-animate-height class="content" :style="backgroundColor">
      <transition-group tag="div" class="slide" :name="transitionName">
        <div
          v-for="tab in tabs"
          v-if="tab === value"
          :key="tab"
          >
          <slot :name="tab"/>
        </div>
      </transition-group>
    </fx-animate-height>
  </div>
</template>

<script>
export default {
  name: 'fx-tabs',

  data () {
    return {
      isUpdated: true,
      transitionName: ''
    }
  },

  props: {
    value: String,
    height: { type: Number, default: 40 },
    textBold: Boolean,
    textSecondary: Boolean,
    stroke: { type: Number, default: 3 },
    color: String,
    background: String
  },

  computed: {
    tabs: function () {
      return Object.keys(this.$slots)
    },
    backgroundColor: function () {
      return this.background ? { '--fx-tabs--background-color': `var(--color--${this.background})` } : null
    },
    strokeHeight: function () {
      return { height: this.stroke + 'px' }
    },
    strokeColor: function () {
      return this.color ? { '--fx-tabs--stroke-color': `var(--color--${this.color})` } : null
    },
    navClasses: function () {
      return {
        'is-bold': this.textBold,
        'is-text-secondary': this.textSecondary
      }
    }
  },

  methods: {
    onClick: function (tab, e) {
      this.transitionName = this.tabs.indexOf(tab) > this.tabs.indexOf(this.value)
        ? 'slide-left'
        : 'slide-right'

      this.$emit('input', tab)
      this.setPosition(e.target)
    },
    setPosition: function (elm) {
      this.$refs.stroke.style.left = elm.offsetLeft + 'px'
      this.$refs.stroke.style.width = elm.offsetWidth + 'px'
    }
  },

  mounted () {
    if (this.tabs && this.tabs.length) {
      this.setPosition(this.$el.querySelector('.is-selected'))
    }
  }
}
</script>

<style>
.fx-tabs {
  overflow: hidden;
  @mixin font-size 14;

  nav {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: inset 0 -1px 0 0 var(--color--border-1);
    color: var(--color--font-1);
    font-weight: var(--font-weight--regular);

    &.is-bold { font-weight: var(--font-weight--medium) !important }
    &.is-text-secondary { color: var(--color--font-secondary) !important }

    .stroke {
      position: absolute;
      left: 0px;
      bottom: 0px;
      transition-duration: 0.15s;
      transition-timing-function: var(--easing--inf-outs);
      background-color: var(--fx-tabs--stroke-color);
    }

    span {
      position: relative;
      transition-duration: 0.6s;
      cursor: pointer;
      padding: 0 var(--spacing--small);
    }

    span + span {
      margin-left: var(--spacing--small);
    }
  }

  .content {
    background-color: var(--fx-tabs--background-color);
  }

  .slide {
    position: relative;

    div {
      overflow: hidden;
      width: 100%;
    }

    &-left-enter-active, &-left-leave-active,
    &-right-enter-active, &-right-leave-active  {
      transition: .3s var(--easing--inf-outs);
    }

    &-left-enter-active, &-right-enter-active {
      position: relative;
    }

    &-left-leave-active, &-right-leave-active {
      position: absolute;
    }

    &-left-enter, &-right-leave-to {
      transform: translateX(100%);
    }

    &-left-leave-to, &-right-enter {
      transform: translateX(-100%);
    }
  }
}
</style>
