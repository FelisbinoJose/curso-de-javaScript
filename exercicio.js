//Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". 
// Caso contrário, mostre "Venda proibida para menores de 18 anos".

const idadeDaPessoa = 17;

idadeDaPessoa >= 18 ? console.log("Pode comprar bebida alcoólica") :
    console.log("Venda proibida para menores de 18 anos");

//Crie uma variável horaAtual. 
// Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".

const horaAtual = 10;

if (horaAtual >= 6 && horaAtual < 12) {
    console.log("Bom dia");
} else if (horaAtual >= 12 && horaAtual <= 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

//Crie uma variável nota entre 0 e 10.
//  Use if/else if/else para retornar: 
// A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).

const nota = 10;

if (nota > 10) {
    console.log("A");
} else if (nota == 8 || nota == 9) {
    console.log("B");
} else if (nota >= 6 && nota <= 7.9) {
    console.log("c");
} else if (nota >= 4 && nota <= 5.9) {
    console.log("D");
} else {
    console.log("E");
}

// Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.

const numero = 5;

numero % 2 == 0 ? console.log("Par") : console.log("Impar");

//Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".

const opcao = 1;

switch (opcao) {
    case 1:
        console.log("1 - cadastrar");
        break;
    case 2:
        console.log("2 - Listar");
        break;
    case 3:
        console.log("3 - Sair");
        break;
    default:
        console.log("Opção invalida");
        break;
}

//Crie uma variável email. Se estiver vazia (""),
//  mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".

const email = ""

if (email == " ") {
    console.log("Preencha o campo de e-mail");
} else {
    console.log("E-mail válido");
}

//Crie uma variável senha. Se tiver menos de 6 caracteres, mostre "Senha muito curta".
//Se tiver 6 ou mais, mostre "Senha válida".

const senha = "123";
const tamanhoCaracter = senha.length;

if (tamanhoCaracter >= 6) {
    console.log("Senha válida");
} else {
    console.log("Senha muito curta");
}

//Crie duas variáveis: saldoDisponivel e valorCompra. 
// Se o saldo for suficiente, mostre "Compra aprovada". 
// Caso contrário, "Saldo insuficiente".

const saldoDisponivel = 10;
const valorCompra = 5;

if (saldoDisponivel >= valorCompra) {
    console.log("Compra aprovada");
} else {
    console.log("Saldo insuficiente");
}

//Crie três variáveis: nome, email e idade. 
// Mostre "Formulário enviado com sucesso" apenas se todos os campos estiverem preenchidos e a idade for maior que 0.

const nome = "jose";
const emai = "jose@gmail.com";
const idade = 20;

if (idade > 0 && nome != "" && emai.includes("@")) {
    console.log("Formulario enviado com sucesso");
} else {
    console.log("Formulário invalido");
}