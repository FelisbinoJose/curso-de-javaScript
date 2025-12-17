const readLine = require('readline');



const leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log('Olá', nome)
    console.log("Bem vido ao nosso sistema!")

    leitor.question('Qual é a sua idade? ', (idade) => {

        if (idade > 18) {
            console.log("Uau! Você já pode tirar a sua CNH!");
        } else {
            console.log("Você ainda não pode tirar a sua CNH");
        }

        leitor.close()

    })


})