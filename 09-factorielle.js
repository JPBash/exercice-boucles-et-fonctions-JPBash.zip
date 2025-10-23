function factorielle(n) {
  if (typeof n !== 'number' || isNaN(n) || n < 0 || !Number.isInteger(n)) return 0;
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
console.log(factorielle(5)); // 120 
}
