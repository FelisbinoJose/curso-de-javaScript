//Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

function saudacao() {
    console.log('Olá! Seja bem-vindo ');
}

saudacao();

//Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

function apresentarPessoa(nome, idade) {
    console.log('Olá, meu é', nome, 'e tenho', idade, 'anos');
}

apresentarPessoa('José', 22);

//Crie uma função que receba peso e altura e retorne o valor do IMC. Mostre também uma frase com o resultado.

function valorIMC(peso, altura) {
    const imc = peso / (Math.pow(altura, 2));
    return imc;
}

console.log('Valor do imc:', valorIMC(65, 1.85).toFixed(2));

//Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

function verificarAprovacao(nota) {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(verificarAprovacao(7));

//Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. 
// Teste a função com diferentes valores

function ehPar(numero) {
    return numero % 2 == 0 ? true : false;
}

console.log(ehPar(3));

//Crie uma função que recebe dois números e retorna a soma deles.Exiba o resultado no console com uma frase completa.

function soma(numero1, numero2) {
    const resultado = numero1 + numero2;
    console.log('A soma de', numero1, '+', numero2, 'é igual a', resultado);
}

soma(10, 5);

//Reescreva o exercício da calculadora de troco usando uma função calcularTroco(compra, pagamento).

function compra(valorCompra) {
    return valorCompra;
}

function pagamento(valorPagamemento) {
    return valorPagamemento;
}

function calcularTroco(compra, pagamento) {
    return compra - pagamento;
}

console.log(calcularTroco(10, 5));

//Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.

const somaComArrow = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log(somaComArrow(2, 2));

//Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. 
// Teste passando uma função que imprime "Executando ação!".

function executarAcao(acao) {
    return acao;
}

function acao() {
    console.log("Executando ação");
}

executarAcao(acao());

//Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e 
// depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).

function fazerPergunta(pergunta, respostaCorreta) {

    let respostaUsuario = respostaCorreta;

    if (respostaUsuario === respostaCorreta) {

        console.log("Resposta correta!");

    } else {

        console.log("Resposta errada!");

    }

}

fazerPergunta("Qual é a capital do Brasil?", "Brasília"); 