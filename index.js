console.log("Adicione um número para fazer a média e a mediana: ");
let maiornumero = 0;
let numUsuario;
const numeros = [];
let media;
let mediana;

process.stdin.on("data", function (data) {
  numUsuario = Number(data.toString().trim());
  numeros.push(numUsuario);
  numUsuario = 0;
  calculaMedia();
  if (numeros.length >= 2) {
    calculaMediana();
  }
  if (numeros.length >= 4) {
    calculaModa();
  }
  console.log(numeros);
});

function calculaMedia() {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
    media = soma / numeros.length;
  }
  console.log("média:", media);
}

function calculaMediana() {
  const sortNumeros = numeros.sort((a, b) => a - b);
  const medianaIdenx = Math.floor(sortNumeros.length / 2);
  mediana = sortNumeros[medianaIdenx];
  console.log("mediana: ", mediana);
  return mediana;
}

function calculaModa() {
  let moda;
  for (let i = 0; i < numeros.length; i++) {
   // for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i].length % 2 == 0) {
       moda = numeros[i];
      }
 //   }
  }
  console.log("moda: ", moda);
}
