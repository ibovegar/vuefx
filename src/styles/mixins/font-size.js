/**
 * FONT-SIZE
 * Convert pixel value to a rem value with a pixel fallback.
 *
 * p { @mixin font-size 16 }
 */

module.exports = (mixin, size) => {
  size = size.replace('px', '')
  return {
    /*eslint-disable */
    'font-size': size + 'px',
    'font-size': (size / 16) + 'rem'
    /* eslint-enable */
  }
}
