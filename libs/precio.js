const commaNumber = require('comma-number');

export default function precio(precio) {
  return `\$${commaNumber(Math.round(precio), '.')}`;
}
