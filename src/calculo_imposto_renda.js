
function calcularIr(salarioBruto){
  
    let valorDesconto;

    if(salarioBruto <= 2112){
        valorDesconto = 'isento';
    }else if(salarioBruto <= 2826.65){
        valorDesconto = (salarioBruto * 0.075);
    }else if(salarioBruto <= 3751.05){
        valorDesconto = (salarioBruto * 0.15);
    }else if(salarioBruto <= 4664.68){
        valorDesconto = (salarioBruto * 0.225);
    }else{
        valorDesconto = (salarioBruto * 0.275);
    }

    return(valorDesconto);

}

module.exports = calcularIr