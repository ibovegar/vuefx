<template>
  <Tabs v-model="selectedPalette">
    <article slot="Background">
      <span
        v-for="color in fill"
        :style="{ backgroundColor: color.value }"
        :key="color.name"
        >
        <h1>{{ color.name }}</h1>
      </span>
    </article>
    <article slot="Borders">
      <span
        v-for="color in border"
        :style="{ backgroundColor: color.value }"
        :key="color.name"
        >
        <h1>{{ color.name }}</h1>
      </span>
    </article>
    <article slot="Font">
      <span
        :style="{ backgroundColor: color.value }"
        :key="color.name"
        v-for="color in font"
        >
        <h1>{{ color.name }}</h1>
      </span>
    </article>
  </Tabs>
</template>

<script>
export default {
  name: 'color-palette',

  props: {
    fill: Array,
    border: Array,
    font: Array
  },

  data () {
    return {
      selectedPalette: 'Background'
    }
  }
}
</script>

<style scoped>
.fx-tabs {
  border-radius: var(--border-radius--medium);
  background-color: var(--color--fill-3);
}

article {
  height: 80px;
  color: var(--color--font-4);
  display: flex;
  flex-direction: row;

  span {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      @mixin font-size 14;
    }
  }
}
</style>
