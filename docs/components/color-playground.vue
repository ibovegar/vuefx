<template>
  <div class="color-playground">
    <span class="left">
      <Select v-model="currentFill" :height="40" label="Fill color" :options="fill"/>
      <Select v-model="currentBorder" :height="40" label="Border color" :options="border"/>
      <Select v-model="currentFont" :height="40" label="Font color" :options="font"/>
    </span>
    <span class="right">
      <div :style="cssProps">Lorem ipsum dolor sit amet.</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'color-playground',

  props: {
    fill: Array,
    border: Array,
    font: Array
  },

  data () {
    return {
      currentFill: '',
      currentBorder: '',
      currentFont: ''
    }
  },

  computed: {
    cssProps: function () {
      return {
        '--playground-fill': this.currentFill,
        '--playground-border': this.currentBorder,
        '--playground-font': this.currentFont
      }
    }
  }
}
</script>

<style>
.color-playground {
  display: flex;
  flex-direction: row;
  border-radius: var(--border-radius--medium);
  border: 1px solid var(--color--border-2);

  .left {
    border-right: 1px solid var(--color--border-2);
    width: 30%;
    padding: 20px 40px;

    .fx-select {
      margin: 25px 0;
    }
  }

  .right {
    padding: 50px;
    flex: 1;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius--medium);
      background-color: var(--playground-fill);
      border: 1px solid var(--playground-border);
      color: var(--playground-font);
    }
  }
}
</style>
