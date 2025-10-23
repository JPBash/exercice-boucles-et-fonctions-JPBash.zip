function multiplication(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return null;
  }
  return a * b;
console.log(multiplication(5, 10)); // 50
console.log(multiplication(7, 'a')); // null   
}
