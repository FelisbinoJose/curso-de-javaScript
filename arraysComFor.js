const frutas = ['Uva', 'Banana', 'Maça'];

console.log("Usando for comun");
for (let index = 0; index < frutas.length; index++) {
    console.log('Fruta do indice', index, frutas[index]);

}

console.log("\nUsando forEach");
frutas.forEach((valor, indice) => {
    console.log('Indice:', indice, valor);
});

console.log("\nUsando for of");
for (const fruita of frutas) {
    console.log('Fruta da vez:', fruita);
}