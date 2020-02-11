export default function sanitizeInput(value) {
  return value
    .split('')
    .map(e => {
      if (e === '1' || e === '0') {
        return e;
      }
      return '';
    })
    .join('');
}
