/**
 * V-ALIGN
 * Vertical align any element by using top: 50% with the combination of
 * translateY(-50%). This will push the element 50% down from its parent,
 * as well as pushing itself down 50% of its own height. This will cause
 * the element to vertically align.
 *
 * .logotype { @mixin vertical-align }
 * .logotype--absolute { @mixin vertical-align absolute }
 *
 */

module.exports = (mixin, position = 'relative') => {
  return {
    'position': position,
    'top': '50%',
    'transform': 'translateY(-50%)'
  }
}
