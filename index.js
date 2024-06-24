console.log("Adicione um número para fazer a média: ");
let numeros = [];
let media;
process.stdin.on("data", function (data) {
  let numero = Number(data.toString().trim());

  numeros.push(numero);
  calculaMedia();
});

function calculaMedia() {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
    media = soma / numeros.length;
}
console.log("média:", media);
console.log("Adicione mais um número para fazer a média: ");
}
