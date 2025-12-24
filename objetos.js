const pessoa = {
    nome: 'José',
    idade: 20,
    possuiCNH: false
}

pessoa.sobrenome = 'Felisbino';
pessoa.habitos = ['Correr', 'dormir'];

console.log(pessoa);

delete pessoa.possuiCNH;

console.log(pessoa);

pessoa.habitos.push('Ler');

console.log(pessoa);