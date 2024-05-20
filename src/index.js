const calcularInss = require("./calculo_inss")

const readline = require('readline');

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

input.question("Informe o valor do salário, para saber a alíquota a ser paga:", (salarioDigitado) => {
    let salarioBrutoo = parseFloat(salarioDigitado);
    console.log(calcularInss(salarioBrutoo));
    input.close();
} )