export default {
  computed: {
    colorStyles: function () {
      let styles = {}

      if (this.fill) {
        styles['--color--fill'] = `var(--color--${this.fill})`
      }

      if (this.border) {
        styles['--color--border'] = `var(--color--${this.border})`
      }

      if (this.font) {
        styles['--color--font'] = `var(--color--${this.font})`
      }

      return styles
    }
  },
  props: {
    fill: String,
    border: String,
    font: String
  }

  // mounted () {
  //   console.log(this.$el, this, this.$el.style)
  //   this.$el.style =
  //   if (style === array) style.push(colorStyles)
  //   else if (style === string) stylle ?
  //   else style = colorStyles
  //
  // }
}
