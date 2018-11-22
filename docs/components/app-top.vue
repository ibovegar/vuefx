<template>
  <header class="app-top">
    <section class="left">
      <!--img :src="require('../assets/img/logo.png')" height="40px"/-->
      <Icon name="bug-outline" class="medium">Logo</Icon>
      <h2>VueFX</h2>
    </section>
    <section class="middle">
      <ul>
        <li><Icon name="github-circle"/></li>
        <li><a>Support <Icon name="chevron-down"/></a></li>
        <li><a>Details <Icon name="chevron-down"/></a></li>
      </ul>
    </section>
     <section class="right">
       <div class="wrapper">
         <Icon name="magnify" :size="20"/>
         Search...
       </div>
         <!--fx-select
             :min-width="200"
             :options="themes"
             theme="boxed"
             v-model="selectedTheme"
             /-->
    </section>
  </header>
</template>

<script>
export default {
  name: 'app-header',

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

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;

    .fx-icon[name="bug-outline"] {
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

    .fx-icon {
      color: var(--color--font-secondary);
    }

    .fx-icon + .fx-icon {
      margin-left: var(--spacing--small);
    }
  }

  .middle {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        margin-right: 50px;
        cursor: pointer;
        display: inline-block;
        color: var(--color--primary);

        .fx-icon {
          color: var(--color--font-2);
        }
      }
    }
  }

  .right {
    height: 100%;
    min-width: var(--width--app-right);
    margin-left: auto;
    padding-right: 20px;
    @mixin v-align-children;

    .wrapper {
      border-left: 1px solid var(--color--border-2);
      height: 70%;
      color: var(--color--font-6);
      @mixin v-align-children;
    }

    .fx-icon {
      color: var(--color--font-3);
      margin-left: 16px;
      margin-right: 10px;
    }

    .fx-select {
      height: 40px;
    }
  }
}
</style>
