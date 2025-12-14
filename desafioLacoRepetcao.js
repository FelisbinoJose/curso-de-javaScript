//Contar quantos números pares e impares tem 0 e 100

let totalNumeroPares = 0;
let totalNumerosImpares = 0;

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0) {
        totalNumeroPares++;
    } else {
        totalNumerosImpares++;
    }
}

console.log("Total de números pares:", totalNumeroPares);
console.log("Total de números impares", totalNumerosImpares);