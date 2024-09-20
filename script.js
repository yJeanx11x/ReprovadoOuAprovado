// reprovado ou aprovado

function notas(n1, n2, n3) {
  const soma = (n1 + n2 + n3) / 2;
  if (soma >= 6) console.log("Aprovado");
  else console.log("reprovado");
  return soma;
}

console.log(notas(4, 3, 2));
