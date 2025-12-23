const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 === 1;
});

console.log('Todos números:', numeros);
console.log('\nNumeros pares:', numerosPares);
console.log('\nNumeros pares:', numerosImpares);

const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
})

console.log('\nNumeros dobrados:', numerosDobrados);