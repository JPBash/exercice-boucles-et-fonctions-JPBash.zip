function estImpair(n) {
  if (typeof n !== 'number' || isNaN(n)) return null;
  return n % 2 !== 0;
console.log(estImpair(3)); // true
console.log(estImpair(4)); // false
console.log(estImpair('a')); // null
}
