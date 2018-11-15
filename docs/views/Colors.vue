<template>
  <div class="colors-demo">
    <title-1 title="The color system">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.
    </title-1>
    <title-2 title="Color palettes">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </title-2>
    <color-palette :fill="fill" :border="border" :font="font"/>
    <title-3 title="Palette playground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </title-3>
    <color-playground :fill="fill" :border="border" :font="font"/>
    <title-2 title="Arbitrary colors">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </title-2>
    <div class="color-boxes">
      <span
        v-for="color in arbitrary"
        :style="{ backgroundColor: color.value }"
        :key="color.name"
        >
        <h1>{{ color.name | pretty }}</h1>
      </span>
    </div>
    <title-2 title="Color playground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </title-2>
  </div>
</template>

<script>
import ColorPlayground from 'docs/components/color-playground'
import ColorPalette from 'docs/components/color-palette'

export default {
  name: 'colors',

  components: { ColorPlayground, ColorPalette },

  data () {
    return {
      fill: [],
      border: [],
      font: [],
      arbitrary: []
    }
  },

  filters: {
    pretty: function (value) {
      return value.replace('--color--', '')
    }
  },

  created () {
    const styles = getComputedStyle(document.documentElement)
    const colorNames = Object.values(styles).filter(k => ~k.indexOf('--color--'))
    const colorObjs = []

    for (const color of colorNames) {
      colorObjs.push({ name: color, value: styles.getPropertyValue(color) })
    }

    this.fill = colorObjs.filter(obj => obj.name.includes('fill'))
    this.border = colorObjs.filter(obj => obj.name.includes('border'))
    this.font = colorObjs.filter(obj => obj.name.includes('font'))
    this.arbitrary.push(colorObjs.find(obj => obj.name.includes('--color--primary')))
    this.arbitrary.push(colorObjs.find(obj => obj.name.includes('--color--secondary')))
    this.arbitrary.push(colorObjs.find(obj => obj.name.includes('--color--accent')))
    this.arbitrary.push(colorObjs.find(obj => obj.name.includes('--color--success')))
    this.arbitrary.push(colorObjs.find(obj => obj.name.includes('--color--info')))
    this.arbitrary.push(colorObjs.find(obj => obj.name.includes('--color--warning')))
    this.arbitrary.push(colorObjs.find(obj => obj.name.includes('--color--alert')))
  }
}
</script>

<style>
.colors-demo {
  .color-boxes {
    display: flex;
    flex-direction: row;
    height: 130px;
    padding: 40px;
    background-color: var(--color--fill-3);
    border-radius: var(--border-radius--medium);
    color: var(--color--font-i);

    span {
      border-radius: 5px;
      flex-grow: 1;
      flex-basis: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      @mixin elevation 3;

      h1 {
        @mixin font-size 14;
      }
    }

    span + span { margin-left: 30px }
  }
}
</style>
