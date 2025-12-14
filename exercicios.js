//Use um for para mostrar no console os números de 1 até 10, um por linha.

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

//Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.

let numero = 1;

for (let contador = 1; contador <= 100; contador++) {
    let resultado = numero + contador;
    console.log(numero, "+", contador, "=", resultado);
    numero = resultado;
}


//Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".

let contador = 10;


while (contador >= 0) {
    console.log(contador);
    contador--;
}

// Use do...while para simular a entrada de números. O programa deve continuar até que o usuário 
// digite 0. Ao final, mostre quantos números foram digitados.

let entradas = [5, 10, 3, 0];

let contador = 0;

let index = 0;

do {

    if (entradas[index] !== 0) {

        contador++;

    }

    index++;

} while (entradas[index - 1] !== 0);

console.log("Total de números digitados: " + contador);