<template>
  <div
    class="component-demo"
    :class="rootClasses"
    :theme="selectedTheme"
    >
    <title-3 v-if="isExample" :title="title"><slot/></title-3>
    <title-2 v-else :title="title"><slot/></title-2>
    <div class="box">
      <Tabs v-model="selectedTab" @input="onTabChange" background="fill-4">
        <component slot="Result" class="box__result" :is="component" ref="component"/>
        <code-preview v-if="code.template" slot="HTML" type="html" :code="code.template"/>
        <code-preview v-if="code.script" slot="JS" type="javascript" :code="code.script"/>
        <code-preview v-if="code.style" slot="CSS" type="css" :code="code.style"/>
      </Tabs>
      <div class="box__tools">
        <Dropdown
          v-model="selectedTheme"
          focus-bg
          auto-width
          close-on-click
          >
          <Icon slot="trigger" name="invert-colors"/>
          <DropdownItem value="default"><Icon name="eye-off"/>&nbsp; Default theme</DropdownItem>
          <DropdownItem value="light"><Icon name="eye-outline"/>&nbsp; Light theme</DropdownItem>
          <DropdownItem value="dark"><Icon name="eye"/>&nbsp; Dark theme</DropdownItem>
        </Dropdown>
        <Dropdown auto-width close-on-click>
          <Icon slot="trigger" name="dots-vertical"/>
          <DropdownItem value="debug" :disabled="!enableDebugging" @click.native="toggleDebugger">
            <Icon name="bug-outline"/>&nbsp; Toggle debug mode
          </DropdownItem>
          <DropdownItem value="github">
            <Icon name="github-circle"/>&nbsp; Go to github page
          </DropdownItem>
          <DropdownItem value="codepen">
            <Icon name="codepen"/>&nbsp; Open in codepen
          </DropdownItem>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedTab: 'Result',
      selectedTheme: 'light',
      isExample: false,
      debugElm: {}
    }
  },

  props: {
    title: String,
    component: [Object, Function],
    code: Object,
    noPadding: Boolean
  },

  computed: {
    rootClasses: function () {
      return {
        'is-example': this.isExample,
        'no-padding': this.noPadding
      }
    },
    enableDebugging: function () {
      return this.selectedTab === 'Result' && this.debugElm !== undefined
    }
  },

  methods: {
    onTabChange: function (tab) {
      if (tab === 'Result') this.getDebugElm()
    },
    toggleDebugger: function () {
      this.debugElm.open = !this.debugElm.open
    },
    getDebugElm: function () {
      this.$nextTick(() => {
        this.debugElm = this.$refs.component.$children.find(child => {
          return child.$options._componentTag === 'component-debug'
        })
      })
    }
  },

  mounted () {
    if (this.selectedTab === 'Result') this.getDebugElm()
    this.isExample = this.$parent.isExamples
  }
}
</script>

<style>
.component-demo {
  &.is-example {
    .box {
      margin-bottom: var(--spacing--huge);
    }
  }

  &.no-padding {
    .box__result {
      padding: 0;
    }
  }

  .box {
    position: relative;

    &__tools {
      position: absolute;
      top: 8px;
      right: 0;
      display: flex;

      .fx-icon {
        color: var(--color--font-2);
        cursor: pointer;
        border-top: 1px solid transparent;

        &:hover {
          color: var(--color--primary);
          border-color: var(--color--primary);
        }
      }
    }

    &__result {
      padding: var(--spacing--huge);
    }

    .fx-tabs {
      @mixin font-size 15;
      border-bottom-left-radius: var(--border-radius--medium);
      border-bottom-right-radius: var(--border-radius--medium);
    }
  }
}
</style>
