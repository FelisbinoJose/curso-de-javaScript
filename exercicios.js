//Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

const nomes = ['José', 'Luiz', 'Caio', 'Carol', 'Fabio'];

for (const nome of nomes) {
    //console.log(nome);
}

//Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira 
// com shift(). Mostre o array antes e depois.

const frutas = ['Maça', 'Banana', 'Pera'];

//console.log('Lista original:', frutas);

frutas.push('Melancia');

//console.log("Adicionado melancia a lista", frutas);

frutas.shift();

//console.log('Excluido o primeiro intem da lista:', frutas);

//Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

const cidades = ['Orleans', 'São Ludgero', 'Tubarão'];

let quantidadeDeCidades = cidades.length;

//console.log('Quantidade de intens na lista:', quantidadeDeCidades);

//Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.

const numeros = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let somaTotal = 0;

for (let i = 0; i < numeros.length; i++) {
    somaTotal += numeros[i];

}

//console.log("Soma total dos valores:", somaTotal);

//Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

const notas = [7, 7.0, 7.0, 7.0];

let somaDasNotas = 0;

for (const nota of notas) {
    somaDasNotas += nota;
}

const calculaMedia = (somaDasNotas) => {
    const media = somaDasNotas / 4;
    return media >= 7 ? "Aprovado" : 'Reprovado';
}

//sconsole.log(calculaMedia(somaDasNotas));

//Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

const nomeUsuarios = ['José', 'Luiz', 'Caio'];

nomeUsuarios.forEach((valor) => {
    //console.log('Olá', valor, "!");
});

//Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

const precoProdutos = [5.0, 10.0];

precoProdutos.map(preco => {
    const desconto = preco * 0.9;
    //console.log(
    'Preço original:', preco,
        'Preço com desconto:', desconto
    //    );
});

//Crie um array com idades.Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

const idades = [10, 12, 18];

const idadeMaiores = idades.filter((idade) => {

    return idade >= 18;
});

//console.log(idadeMaiores)

//Crie um array de preços e calcule o valor total da compra. Depois, aplique um cupom de 20% de desconto 
// e mostre o valor final.

const precos = [10.0, 4.0];
let precoTotal = 0;

for (let i = 0; i < precos.length; i++) {
    precoTotal += precos[i];
}

const desconto = 0.20;

//console.log('Preço total', precoTotal);
//console.log('Preço com desconto:', (precoTotal - desconto));

//Crie um array com 5 tarefas (strings). Use filter para mostrar apenas as tarefas que ainda não foram marcadas como concluídas (use uma convenção como "[x]" para concluídas).

const tarefas = ['Correr[x]', 'Escrever[x]', 'Pular', 'Dormir'];

const tarefasNaoConcluidas = tarefas.filter((tarefa) => {
    return !tarefa.includes('[x]')
})

console.log(tarefasNaoConcluidas);



