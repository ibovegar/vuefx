export default {
  name: 'fx-flex-item',

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
    flex: { type: String, default: null },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    order: { type: [String, Number], default: null }
  },

  render: (createElement, { props, data, children }) => {
    // console.log(data)

    // let tag = this.$parent.$options._componentTag

    // if (tag !== 'fx-flex' || tag !== 'Flex') {
    //   this.$destroy()
    //   throw new Error('fx-flex-item be be placed within a fx-flex wrapper')
    // }

    let styles = {
      order: props.order,
      alignSelf: props.self,
      width: Number.isInteger(props.width) ? props.width + 'px' : props.width,
      height: Number.isInteger(props.height) ? props.height + 'px' : props.height,
      // margin: this.$parent.gutter ? { margin: this.$parent.gutter / 2 + 'px' } : null,
      flex: props.flex
    }

    data.staticStyle = {...data.staticStyle, ...styles}
    data.staticClass = (` fx-flex-item ${data.staticClass || ''}`).trim()

    return createElement('div', data, children)
  }
}
