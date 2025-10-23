function nombreDeVoyelles(phrase) {
  if (typeof phrase !== 'string') return 0;
  const voyelles = 'aeiouyAEIOUY';
  let compteur = 0;
  for (let char of phrase) {
    if (voyelles.includes(char)) compteur++;
  }
  return compteur;
  console.log(nombreDeVoyelles("Bonjour le monde")); // 5 
}

