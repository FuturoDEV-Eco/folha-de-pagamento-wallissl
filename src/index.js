const calcularInss = require("./calculo_inss");
const calcularIr = require("./calculo_imposto_renda");
const salarioLiquido = require("./calculo_salario_liquido");
const readline = require('readline');

const fs = require('fs');
const PDFDocument = require('pdfkit');

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

// EX3
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

// EX4
/*  input.question("Informe o valor do salário Bruto para saber o saldo do seu salário liquido:", (salarioDigitado) => {
    let salarioBruto = salarioDigitado;
    let saldoLiquido = salarioLiquido(salarioBruto);

    console.log(`O valor do seu salário liquido é: R$${saldoLiquido.toFixed(2)}`)
})  */

// Ex5

let nome ="";
let cpf="";
let mesPagamento;
let salarioBruto;
let descontoVt = 0;

input.question("Informe o seu nome: " , (nomeDigitado) => {
    nome = nomeDigitado;

    input.question("inform o seu cpf: ", (cpfDigitado) => {
        cpf = cpfDigitado;

    input.question("Informe o mês do pagamento: " , (mesDigitado) => {
        mesPagamento = (mesDigitado);

    input.question("Informe o valor do salário bruto: " , (salarioDigitado) => {
            salarioBruto = (salarioDigitado);
    
    descontoVt = salarioBruto * 0.06

    console.log(`--- Folha de pagamento mês - ${mesPagamento} --- \nNome: ${nome} \nCPF: ${cpf} \nSalário Bruto: R$${salarioBruto}\nINSS: R$${calcularInss(salarioBruto)}\nImposto de Renda: R$${calcularIr((salarioBruto - calcularInss(salarioBruto)))}\nVale Transporte: R$${descontoVt}\nSalário Líquido: R$${salarioLiquido(salarioBruto)}\n`);

                input.question("Deseja gerar um PDF da folha de pagamento?\n1 - Sim\n2 - Não\n", (resposta) => {
                
                    switch(Number(resposta)){
                    
                        case 1:
                            const doc = new PDFDocument();
                            doc.pipe(fs.createWriteStream('./folhas_pagamento/folha_pagamento.pdf'));
                            doc.fontSize(12);

                            doc.text('--- Folha de Pagamento ---');
                            doc.text(`Data de Geração: ${new Date().toLocaleDateString()}`);
                            doc.text(`Nome: ${nome}`);
                            doc.text(`CPF: ${cpf}`);
                            doc.text(`--- ---`);
                            doc.text(`Salário Bruto: R$${salarioBruto}`);
                            doc.text(`--- ---`);
                            doc.text(`INSS: R$${calcularInss(salarioBruto)}`);
                            doc.text(`Imposto de Renda: R$${calcularIr(salarioBruto - calcularInss(salarioBruto))}`);
                            doc.text(`VT: R$${descontoVt}`);
                            doc.text(`--- ---`);
                            doc.text(`Salário Líquido: R$${salarioLiquido(salarioBruto)}`);
                            doc.end();

                            console.log('Folha de pagamento salva em folha_pagamento.pdf');
                            input.close();
                            break;
                        case 2:
                            input.close();
                            break;
                        default: 
                            input.close() 
                    }
                })
            });
        });
    });
});
