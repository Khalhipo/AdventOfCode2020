//Part 1

function calcularAccTotal(array_input){
    var acc = 0;
    var posicionesVisitadas = [];
    for(var i = 0; i<array_input.length; i++){
    var orden = array_input[i];

    if(posicionesVisitadas.includes(i)){
        return acc;
    } else {
        posicionesVisitadas.push(i);
    }

    if(orden.split(" ")[0]=='acc'){
        acc = acc + obtenerAcumulador(orden);
    }

    if(orden.split(" ")[0]=='jmp'){
        i = i + obtenerAcumulador(orden)-1;
    }
}
}


function obtenerAcumulador(orden){
        var valor = orden.split(" ")[1][0]=='+'
        ?orden.split(" ")[1].substring(1)
        :orden.split(" ")[1].substring(0);

        return parseInt(valor);
}

console.log(calcularAccTotal(array_input));

//Part 2
function calcularAccTotal2(array_input){
    var acc = 0;

var cont = 0;

    for(var i = 0; i<array_input.length; i++){
    var orden = array_input[i];

    if(orden.split(" ")[0]=='acc'){
        acc = acc + obtenerAcumulador(orden);
        console.log("acc: " + acc);
    }

    if(orden.split(" ")[0]=='jmp'){
        if(!probarCambio(i,orden)){
          i = i + obtenerAcumulador(orden)-1;  
        }  
    }

    if(orden.split(" ")[0]=='nop'){
        if(probarCambio(i,orden)){
           i = i + obtenerAcumulador(orden)-1; 
        }
    }
    
}
    return acc;
}

function probarCambio(i, inst){
    var acc = 0;
    var cont = 0;
    var array_input_cambio = array_input.slice();
    var posicionesVisitadas = [];
    var ordenFormat = inst.split(" ")[0]=='nop'?inst.replaceAll("nop","jmp"):inst.replaceAll("jmp","nop");

    array_input_cambio[i] = ordenFormat;

    for(var i = 0; i<array_input_cambio.length; i++){
    var orden = array_input_cambio[i];


    if(posicionesVisitadas.includes(i)){
        return false;
    } else {
        posicionesVisitadas.push(i);
    }

    if(orden.split(" ")[0]=='acc'){
        acc = acc + obtenerAcumulador(orden);
    }

    if(orden.split(" ")[0]=='jmp'){
          i = i + obtenerAcumulador(orden)-1;    
    }
}
    return true;
}


//console.log(calcularAccTotal2(array_input));