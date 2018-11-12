export default {
  computed: {
    colorStyles: function () {
      let styles = {}

      if (this.fxBackground) styles['--style--background'] = `var(--color--${this.fxBackground})`
      if (this.fxBorder) styles['--style--border'] = `var(--color--${this.fxBorder})`
      if (this.fxFont) styles['--style--font'] = `var(--color--${this.fxFont})`
      if (this.fxColor) styles['--style--color'] = `var(--color--${this.fxColor})`

      if (this.fxStyles) {
        for (let key of Object.keys(this.fxStyles)) {
          styles[`--style--${key}`] = `var(--color--${this.fxStyles[key]})`
        }
      }

      return styles
    }
  },
  props: {
    fxBackground: String,
    fxBorder: String,
    fxFont: String,
    fxColor: String,
    fxStyles: Object
  }
}
