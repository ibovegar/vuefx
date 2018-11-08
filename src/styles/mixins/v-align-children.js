/**
 * V-ALIGN-CHILDREN
 * Vertical or horizontal alignment of all child elements within a container (parent)
 *
 * .container { @mixin v-align-children }
 */

module.exports = (mixin) => {
  return {
    'display': 'flex',
    'align-items': 'center',
    'line-height': '0' // set line-height: 1 @ child to prevent collapse
  }
}
