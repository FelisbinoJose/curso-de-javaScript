function calcular(numero1, numero2, operacao) {

    return operacao(numero1, numero2);

}

function soma(num1, num2) {
    return num1 + num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}

const resultado = calcular(3, 8, soma);
console.log("Resultado da soma:", resultado);

const resultadoDivisao = calcular(32, 8, divisao);
console.log("Resultado da divisão:", resultadoDivisao);