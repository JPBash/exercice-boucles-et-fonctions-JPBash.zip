function somme(n) {
  if (typeof n !== 'number' || isNaN(n) || n < 1 || !Number.isInteger(n)) return 0;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
console.log(somme(5)); // 15  
}
