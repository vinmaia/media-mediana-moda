//adiciona a mediana
console.log("Adicione um número para fazer a média e a mediana: ");
let numUsuario;
let numeros = [];
let media;
let mediana;

process.stdin.on("data", function (data) {
numUsuario = Number(data.toString().trim());
  numeros.push(numUsuario);
  numUsuario = 0;
  calculaMedia();
  if (numeros.length >= 2) {
    calculaMediana()
  }
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
    const sortNumeros = numeros.sort((a, b) => a - b) 
    const  medianaIdenx = Math.floor(sortNumeros.length / 2);
    mediana = sortNumeros[medianaIdenx]
    console.log("mediana" , mediana)
    return mediana;
}