
function calcularInss(salarioBruto){

    let tetoInss = 908.85;
    let valorDesconto;

    if(salarioBruto <= 1412){
        valorDesconto = (salarioBruto*0.075).toFixed(2)
       
    }else if(salarioBruto <= 2666.68){
        valorDesconto = (salarioBruto*0.09).toFixed(2);
        
    }else if(salarioBruto <= 4000.03){
        valorDesconto = (salarioBruto*0.12).toFixed(2);
    }else if(salarioBruto > 4000.04){
        valorDesconto = (salarioBruto*0.14).toFixed(2);
    } 

    if(valorDesconto > tetoInss){
        valorDesconto = tetoInss;
    }

    return valorDesconto
    
}

module.exports = calcularInss


