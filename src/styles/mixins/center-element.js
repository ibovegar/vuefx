/**
 * CENTER-ELEMENT
 * Vertical and horizontal align a element by using top: 50%/ left: 50%
 * with the combination of translate(-50%, -50%).
 *
 * .logotype { @mixin center-element }
 * .logotype--absolute { @mixin center-element absolute }
 */

module.exports = (mixin, position = 'relative') => {
  return {
    'position': position,
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)'
  }
}
