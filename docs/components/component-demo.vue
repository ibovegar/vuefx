<template>
  <div
    class="component-demo"
    :class="rootClasses"
    :theme="themeType[selectedTheme]"
    >
    <title-3 v-if="isExample" :title="title"><slot/></title-3>
    <title-2 v-else :title="title"><slot/></title-2>
    <div class="box">
      <ks-tabs v-model="selectedTab" @input="onTabChange" background="fill-4"> <!--color="primary"-->
        <component slot="Result" class="box__result" :is="component" ref="component"/>
        <code-preview v-if="code.template" slot="HTML" type="html" :code="code.template"/>
        <code-preview v-if="code.script" slot="JS" type="javascript" :code="code.script"/>
        <code-preview v-if="code.style" slot="CSS" type="css" :code="code.style"/>
      </ks-tabs>
      <div class="box__tools">
        <ks-dropdown
          v-model="selectedTheme"
          @input="selectedTheme = selectedTheme >= 2 ? 0 : selectedTheme + 1"
          auto-width
          focus-check
          close-on-click
          overlay
          >
          <ks-icon slot="trigger" name="invert-colors"/>
          <ks-dropdown-item value="default">Default</ks-dropdown-item>
          <ks-dropdown-item value="light">Light</ks-dropdown-item>
          <ks-dropdown-item value="dark">Dark</ks-dropdown-item>
        </ks-dropdown>
        <ks-dropdown auto-width close-on-click overlay>
          <ks-icon slot="trigger" name="dots-vertical"/>
          <ks-dropdown-item value="debug" :disabled="!enableDebugging" @click.native="toggleDebugger">
            <ks-icon name="bug-outline"/>&nbsp; Toggle debug mode
          </ks-dropdown-item>
          <ks-dropdown-item value="github">
            <ks-icon name="github-circle"/>&nbsp; Go to github page
          </ks-dropdown-item>
          <ks-dropdown-item value="codepen">
            <ks-icon name="codepen"/>&nbsp; Open in codepen
          </ks-dropdown-item>
        </ks-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
const themeType = Object.freeze({
  '0': 'default',
  '1': 'light',
  '2': 'dark'
})

export default {
  data () {
    return {
      selectedTab: 'Result',
      themeType: themeType,
      selectedTheme: 'light',
      isExample: false,
      debugElm: {}
    }
  },

  props: {
    title: String,
    component: [Object, Function],
    code: Object
  },

  computed: {
    themeSelectIcon: function () {
      switch (this.themeType[this.selectedTheme]) {
        case 'light': return 'eye'
        case 'dark': return 'eye-outline'
        case 'default': return 'eye-off'
      }
    },
    rootClasses: function () {
      return {
        'is-example': this.isExample
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

  .box {
    position: relative;

    &__tools {
      position: absolute;
      top: 8px;
      right: 0;

      .ks-icon {
        color: var(--color--font-1);
        cursor: pointer;
        width: 10px;
        border-radius: 100%;

        &:hover {
          color: var(--color--primary);
        }
      }
    }

    &__result {
      padding: var(--spacing--huge);
    }

    .ks-tabs {
      border-bottom-left-radius: var(--border-radius--medium);
      border-bottom-right-radius: var(--border-radius--medium);
    }
  }
}
</style>
