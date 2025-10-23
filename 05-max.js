function max(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return null;
  }
  return a > b ? a : b;
console.log(max(10, 5)); // 10
console.log(max(3, 7)); // 7
console.log(max(4, 'a')); // null
}
