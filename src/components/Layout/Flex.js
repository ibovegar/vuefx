export default {
  name: 'FxFlex',

  functional: true,

  props: {
    wrap: {
      default: 'nowrap',
      validator: function (value) {
        return [
          'nowrap',
          'wrap',
          'wrap-reverse'
        ].includes(value)
      }
    },
    justifyContent: {
      default: 'flex-start',
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
      default: 'stretch',
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
    direction: {
      default: 'row',
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
      default: 'stretch',
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
    simple: Boolean
  },

  render: (h, { props, data, children }) => {
    let styles = {
      flexDirection: props.direction,
      flexWrap: props.wrap,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
      display: props.inline ? 'inline-flex' : 'flex',
      padding: props.gutter / 2 + 'px'
    }

    data.staticStyle = { ...data.staticStyle, ...styles }
    data.staticClass = (` fx-flex ${data.staticClass || ''}`).trim()

    if (children) {
      for (let child of children) {
        if (child.data && child.data.attrs) {
          let styles = {
            order: child.data.attrs.order || null,
            alignSelf: child.data.attrs.self || null,
            margin: props.gutter ? props.gutter / 2 + 'px' : null,
            flex: child.data.attrs.flex || null
          }

          child.data.staticStyle = { ...child.data.staticStyle, ...styles }
        }
      }
    }
    return h(props.tag, data, children)
  }
}
