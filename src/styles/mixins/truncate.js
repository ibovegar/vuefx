/**
 * TRUNCATE
 * Text truncation with ellipsis
 *
 * USAGE:
 *   p { @include truncate(200px) }
 */

module.exports = (mixin, boundary = '100%') => {
  return {
    'max-width': boundary,
    'white-space': 'nowrap',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis'
  }
}
