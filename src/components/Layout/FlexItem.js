export default {
  name: 'FxFlexItem',

  functional: true,

  props: {
    self: {
      default: null,
      validator: function (value) {
        return [
          'flex-end',
          'flex-start',
          'center',
          'auto',
          'baseline',
          'stretch'
        ].includes(value)
      }
    },
    tag: { type: String, default: 'div' },
    flex: { type: String, default: null },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    order: { type: [String, Number], default: null }
  },

  render: (createElement, { props, data, children }) => {
    let styles = {
      order: props.order,
      alignSelf: props.self,
      width: Number.isInteger(props.width) ? props.width + 'px' : props.width,
      height: Number.isInteger(props.height) ? props.height + 'px' : props.height,
      flex: props.flex
    }

    data.staticStyle = { ...data.staticStyle, ...styles }
    data.staticClass = (` fx-flex-item ${data.staticClass || ''}`).trim()

    return createElement(props.tag, data, children)
  }
}
