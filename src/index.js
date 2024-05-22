const calcularInss = require("./calculo_inss");
const calcularIr = require("./calculo_imposto_renda");
const salarioLiquido = require("./calculo_salario_liquido");
const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// EX2
/* input.question("Informe o valor do salário, para saber a alíquota a ser paga:", (salarioDigitado) => {
    
    let salarioBruto = parseFloat(salarioDigitado);
    let valorDesconto = calcularInss(salarioBruto);

    console.log(`O valor do desconto é: R$${valorDesconto}`);
}); */

//EX3
/* input.question("Informe o valor do salário Bruto para saber a alíquota referente ao Imposto de renda:", (salarioDigitado) => {
    let salarioBruto = salarioDigitado
    let valorDesconto = calcularIr(salarioBruto);

    if(typeof valorDesconto === "string"){
    console.log(`${valorDesconto}`)
    }else{
        console.log(`O valor do desconto é: R$${valorDesconto.toFixed(2)}`)
    }
})
 */

//EX4
input.question("Informe o valor do salário Bruto para saber o saldo do seu salário liquido:", (salarioDigitado) => {
    let salarioBruto = salarioDigitado;
    let saldoLiquido = salarioLiquido(salarioBruto);

    console.log(`O valor do seu salário liquido é: R$${saldoLiquido.toFixed(2)}`)
})
