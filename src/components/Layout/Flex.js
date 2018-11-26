export default {
  name: 'FxFlex',

  functional: true,

  props: {
    justifyContent: {
      default: null,
      validator: function (value) {
        return [
          'flex-end',
          'flex-start',
          'center',
          'space-between',
          'space-around'
        ].includes(value)
      }
    },
    alignItems: {
      default: null,
      validator: function (value) {
        return [
          'flex-start',
          'flex-end',
          'center',
          'baseline',
          'stretch'
        ].includes(value)
      }
    },
    dir: {
      default: null,
      validator: function (value) {
        return [
          'row',
          'row-reverse',
          'column',
          'column-reverse'
        ].includes(value)
      }
    },
    alignContent: {
      default: null,
      validator: function (value) {
        return [
          'flex-end',
          'flex-start',
          'center',
          'space-between',
          'space-around',
          'stretch'
        ].includes(value)
      }
    },
    tag: { type: String, default: 'div' },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    gutter: { Number, default: 0 },
    inline: Boolean,
    simple: Boolean,
    wrap: Boolean,
    wrapReverse: Boolean
  },

  render: (h, { props, data, children }) => {
    let styles = {
      flexDirection: props.dir,
      flexWrap: null,
      justifyContent: props.justifyContent,
      width: Number.isInteger(props.width) ? props.width + 'px' : props.width,
      height: Number.isInteger(props.height) ? props.height + 'px' : props.height,
      alignItems: props.alignItems,
      display: props.inline ? 'inline-flex' : 'flex',
      padding: props.gutter / 2 + 'px'
    }

    if (props.wrap) styles.flexWrap = 'wrap'
    if (props.wrapReverse) styles.flexWrap = 'wrap-reverse'

    data.staticStyle = { ...data.staticStyle, ...styles }
    data.staticClass = (` fx-flex ${data.staticClass || ''}`).trim()

    if (children) {
      for (let child of children) {
        child.data = child.data || {}

        let staticClass = child.data.staticClass || ''
        let styles = {}

        if (props.gutter) {
          styles.margin = props.gutter ? props.gutter / 2 + 'px' : null
        }

        if (child.data.attrs && !staticClass.includes('fx-flex-item')) {
          styles.order = child.data.attrs.order || null
          styles.alignSelf = child.data.attrs.self || null
          styles.flex = child.data.attrs.flex || null
        }
        child.data.staticStyle = { ...child.data.staticStyle, ...styles }
      }
    }
    return h(props.tag, data, children)
  }
}
