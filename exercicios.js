//Crie um objeto com seu nome, idade e profissão.

const eu = {
    nome: 'José',
    idade: 18,
    profissao: 'Jogador',

    saudacao() {
        console.log(`Olá, eu sou ${this.nome}`);
    }
};



//console.log(eu);

//Acesse e exiba o valor da propriedade "nome" no console.

//console.log(eu['nome']);

//Modifique a propriedade "idade" com um novo valor.

eu.idade = 20

//console.log(eu['idade']);

//Adicione ao objeto uma nova propriedade chamada "cidade".

eu.cidade = 'São Paulo';

//console.log(eu);

//Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados.

function frase(eu) {
    console.log('Esses seus dados:');
    console.log(eu);
}

//Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.

const listaDePessoas = [
    { nome: 'Caio', idade: 15 },
    { nome: 'Alice', idade: 20 },
    { nome: 'Yuri', idade: 22 }
];

//Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

for (const pessoa of listaDePessoas) {
    if (pessoa.idade >= 18) {
        //console.log(pessoa.nome);
    }
}

// Crie um objeto com um método chamado "saudacao" que imprime "Olá, eu sou [nome]".

eu.saudacao();

//Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício

for (const chave in eu) {
    console.log('Chave:', eu[chave]);
}

//Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).

const produto = {
    preco: 10.0,
    quantidade: 2,

    valorTotalCompra() {
        return this.preco * this.quantidade;
    }
}

console.log(produto.valorTotalCompra());
