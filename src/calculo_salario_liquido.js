const calcularInss = require("./calculo_inss");
const calcularIr = require("./calculo_imposto_renda");

function salarioLiquido(salarioBruto){

    let descontoVt = (salarioBruto * 0.06);

    let descontoInss = (salarioBruto - calcularInss(salarioBruto));
    
    if(descontoInss > 2112 ){
        let descontoIR = (descontoInss - calcularIr(descontoInss));
        let totalDesconto = (descontoIR - descontoVt);
        return totalDesconto;
    }else{
        let totalDesconto = (descontoInss - descontoVt)
        return totalDesconto
    }
    

}

module.exports = salarioLiquido