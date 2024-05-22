const calcularInss = require("./calculo_inss")

const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

input.question("Informe o valor do salário, para saber a alíquota a ser paga:", (salarioDigitado) => {
    
    let salarioBruto = parseFloat(salarioDigitado);
    let valorDesconto = calcularInss(salarioBruto);

    console.log(`O valor do desconto é: R$${valorDesconto}`);
});
