<template>
  <header class="app-top">
    <!--img :src="require('../assets/img/logo.png')" height="40px"/-->
    <ks-icon name="bug-outline" class="ks-icon--large">Logo</ks-icon>
    <h2>VueFX</h2>
    <!--a>Support <ks-icon name="chevron-down"/></a>
    <a>Support <ks-icon name="chevron-down"/></a>
    <ks-icon name="github-circle"/-->
     <section class="right">
      <ks-select
        :min-width="200"
        :options="themes"
        theme="boxed"
        v-model="selectedTheme"
        />
    </section>
  </header>
</template>

<script>
import IGithubCircle from '@/assets/icons/github-circle'
import IInvertColors from '@/assets/icons/invert-colors'
import IChevronDown from '@/assets/icons/chevron-down'

export default {
  name: 'app-header',

  components: { IInvertColors, IGithubCircle, IChevronDown },

  data () {
    return {
      selectedTheme: 'light',
      themes: [
        { name: 'Default Theme', value: 'default' },
        { name: 'Light Theme', value: 'light' },
        { name: 'Dark Theme', value: 'dark' }
      ]
    }
  }
}
</script>

<style>
.app-top {
  height: 80px;
  border-bottom: 1px solid var(--color--border-2);
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  align-items: center;

  .ks-icon[name="bug-outline"] {
    color: var(--color--secondary);
  }

  h2 {
    font-weight: var(--font-weight--medium);
    color: var(--color--font);
    margin: 0;
    padding: 0;
    margin-left: var(--spacing--small);
    @mixin font-size 26px;
  }

  a {
    margin: 0 20px;
    color: var(--color--primary);
  }

  .ks-icon {
    color: var(--color--font-secondary);
  }

  .ks-icon + .ks-icon {
    margin-left: var(--spacing--small);
  }

  .right {
    height: 100%;
    margin-left: auto;
    @mixin v-align-children;

    .ks-select {
      height: 40px;
    }
  }
}
</style>
