import { createInterface } from 'readline';
import { soma, subtracao } from './calculadora.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite o primeiro número:\n>', (numero) => {

    leitor.question('Digite a operação:\n\n+: soma\n\n:subtração\n\n>', (operacao) => {

        leitor.question('Digite o segundo número:\n\n>', (numero2) => {

            const num1 = Number(numero);
            const num2 = Number(numero2);

            let resultado = null;

            if (operacao == '+') {
                resultado = soma(num1, num2);
            } else if (operacao == '-') {
                resultado = subtracao(num1, num2);
            } else {
                console.log('Operação inválida');

            }

            if (resultado != null) {
                console.log('\nO resultado da opeeração é:', resultado);

            }



            leitor.close();
        })

    })
})