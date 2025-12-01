//1. Verificação de maioridade
//Crie uma variável idade e verifique se a pessoa é maior de idade (18 anos ou mais). Mostre no console uma mensagem adequada.
const idade = 15;
const maiorDeIdade = idade >= 18;

console.log('É maior de idade?', maiorDeIdade);

//2. Situação do aluno
//Crie duas variáveis com notas de um aluno. Calcule a média. Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".
const notaUm = 7.0;
const notaDois = 7.0;
const media = (notaUm + notaDois) / 2;

if (media >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//3. Simulação de troco
//Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.
const valorCompra = 35.90;
const valorPago = 50;
const troco = valorPago - valorCompra;

console.log('Troco:', troco);

//4. Validação de senha
//Crie duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.
const senhaUm = "123";
const senhaDois = "123";
const saoIguais = senhaUm === senhaDois

console.log('São iguais?', saoIguais);

//5. Controle de faltas
//Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.
const totalAulas = 80;
const falta = 25;
const porcentagemAula = totalAulas * 0.25;

const concluao = porcentagemAula > falta;

console.log("As faltas ultrapassam 25% das aulas? ", concluao);

//6. Verificação de login
//Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.

const temLogin = true;
const temSenha = false;

const temAcesso = temLogin && temSenha;

console.log('Possui acesso?', temAcesso);

//7. Valor negado
//Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.
const disponivel = false;

console.log('Disponível:', !disponivel);

//8. Condições compostas
//Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.
const numeroUm = 10;
const numeroDois = 2;

const numeroPar = numeroUm % 2 == 0 && numeroDois % 2 == 0;
const numeroIguail = numeroUm == numeroDois;

console.log(numeroIguail, numeroPar)

//9. Calculadora de porcentagem
//Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."
const n1 = 120;
const porcentagem = 0.15;
const resultado = n1 * porcentagem;

console.log('15% de 120 é igual a ', resultado);

//10. Ordem de operações
//Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.

const expressao = 2 + 3 * 5;

console.log('Resultado', expressao);

// A multiplicação foi realizada antes da soma, pois na ordem matematica a multiplicação vem primeiro que a soma. Ao menos que use os parentes para separa a soma.