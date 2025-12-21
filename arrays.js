const frutas = ['Uva', 'Banana', 'Maça'];

console.log(frutas);

/*console.log('Primeira fruta', frutas[0]);
console.log('Ultima fruta:', frutas[2]);

console.log('Total de frutas:', frutas.length);

frutas.push('Pera');

console.log('Total de frutas depois de adicionado a Pera:', frutas.length);
console.log('Ultima fruta:', frutas[frutas.length - 1])
*/

frutas.splice(2, 1);

console.log('Frutas depois de removida o ultimo intem:', frutas);