function maxDeTrois(a, b, c) {
  if ([a, b, c].some(x => typeof x !== 'number' || isNaN(x))) return null;
  return Math.max(a, b, c);
console.log(maxDeTrois(10, 5, 8)); // 10
console.log(maxDeTrois(3, 7, 4)); // 7
console.log(maxDeTrois(4, 'a', 6)); // null   
}

