const readLine = require('readline');

const leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

leitor.question(
    '1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n> ',
    (resposta1) => {

        if (resposta1 === 'b') acertos++;

        leitor.question(
            '2) Qual dessas é uma estrutura de repetição?\n(a) Loopar()\n(b) repeat\n(c) for\n> ',
            (resposta2) => {

                if (resposta2 === 'c') acertos++;

                leitor.question(
                    '3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "text0"\n> ',
                    (resposta3) => {

                        if (resposta3 === 'b') acertos++;

                        switch (acertos) {
                            case 3:
                                console.log('Parabéns! Você acertou todas 🎉');
                                break;
                            case 2:
                                console.log('Muito bom! Continue assim 👍');
                                break;
                            case 1:
                                console.log('Bom começo! Continue praticando 🙂');
                                break;
                            default:
                                console.log('Não desista! Pratique mais 💪');
                        }

                        leitor.close();
                    }
                );
            }
        );
    }
);
