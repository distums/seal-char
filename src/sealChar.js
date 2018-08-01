/**
 *
 * @param {String} char
 * @param {Function} shouldSeal
 * @param {String} source
 * @returns {String}
 */
export default function sealChar(maskChar, shouldSeal, source) {
  if (source == null) return '';
  return ('' + source)
    .split('')
    .map((char, index) => (shouldSeal(char, index, source) ? maskChar : char))
    .join('');
}
