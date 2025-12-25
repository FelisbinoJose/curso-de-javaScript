//Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.

const pessoa = {
    nome: 'José',
    idade: 36,
    email: 'jose36@hotmail.com'
}

const { nome, idade, email } = pessoa;

console.log('Nome:', nome);
console.log('Idade:', idade);
console.log('Email:', email);

//Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.

const linguagens = ['Java', 'Python', 'JavaScript'];

const [primeira, segunda, terceira] = linguagens;

console.log('Primeira:', primeira);
console.log('Segunda:', segunda);
console.log('Primeira:', terceira);

//Crie uma função que receba um número qualquer de argumentos e retorne a soma de todos. Use o operador rest (...).

function somaTodos(...numeros) {
    let valorTotal = 0;

    for (const numero of numeros) {
        soma += numero;
    }

    return soma;
}

//Crie dois arrays de frutas e combine-os usando o operador spread.

const frutas1 = ['Maçã', 'Banana', 'Uva'];

const frutas2 = ['Laranja', 'Manga', 'Abacaxi'];

const todasAsFrutas = [...frutas1, ...frutas2];

console.log(todasAsFrutas);

//Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

const objetoNome = {
    nome: 'José'
};

const objetoIdade = {
    idade: 18
};

const pessoaJuntaNomeIdades = {
    ...objetoNome,
    ...objetoIdade
};

console.log(pessoaJuntaNomeIdades);

//Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor 

function saudacao({ nome }) {
    if (nome != null) {
        console.log('Olá', nome);
    } else {
        console.log('Olá! Visitante!');

    }

}

saudacao(frutas1);

//Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

const agora = new Date('2025-12-25T09:21:00.000Z');

console.log(agora);

//Crie uma função simples chamada somar(a, b) e exporte-a como módulo 
//(modo CommonJS ou ES Modules, dependendo do ambiente).

import { soma2 } from "./exercicio/soma.js";

const resultado = soma2(2, 2);

//console.log('Resultado:', resultado);

//Crie uma classe Livro com propriedades titulo e autor. Crie dois objetos dessa classe.
//Adicione um método descrever() à classe Livro que retorna uma string com as informações do livro.


class Livro {

    constructor(titulo, autor) {

        this.titulo = titulo;

        this.autor = autor;

    }



    descrever() {

        return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;

    }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");

const livro2 = new Livro("1984", "George Orwell");

console.log(livro1.descrever());

console.log(livro2.descrever());






