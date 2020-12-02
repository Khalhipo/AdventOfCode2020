var num_pass_ok = 0;
var contador = 0;

//Part 1

function recuperarPasswords(array_input){
   for(var i = 0; i<array_input.length-1;i++){
    var input_formatted = format_input(array_input[i]);
    var password = input_formatted['password'];
    for(var j = 0; j<password.length;j++){
        if(password[j]==input_formatted['letra']){
            contador++;
        }
    }
    if(contador>=input_formatted['min'] && contador<=input_formatted['max']){
        num_pass_ok++;
    }
    contador = 0;
}
return num_pass_ok; 

}


function format_input(array_input){
    var array_datos_input = [];
    
    var guion = array_input.indexOf('-');
    var espacio = array_input.indexOf(' ');

    var min = array_input.substring(0,guion);
    var max = array_input.substring(guion+1,espacio);

    var dospuntos = array_input.indexOf(':');
    var letra = array_input.substring(dospuntos-1, dospuntos);

    var password = array_input.substring(dospuntos+2);

    array_datos_input['min']=min;
    array_datos_input['max']=max;
    array_datos_input['letra']=letra;
    array_datos_input['password']=password;

    return array_datos_input;
}


//Part 2

function recuperarPasswords2(array_input){
   for(var i = 0; i<array_input.length-1;i++){
    var input_formatted = format_input2(array_input[i]);
    var password = input_formatted['password'];
        if(password[input_formatted['pos1']]==input_formatted['letra']){
            contador++;
        }
        if(password[input_formatted['pos2']]==input_formatted['letra']){
            contador++;
        }
    if(contador == 1){
        num_pass_ok++;
        array_input_ok.push(input_formatted);

    }
    contador = 0;
}
return num_pass_ok;

}


function format_input2(array_input){
    var array_datos_input = [];
    
    var guion = array_input.indexOf('-');
    var espacio = array_input.indexOf(' ');

    var pos1 = array_input.substring(0,guion);
    var pos2 = array_input.substring(guion+1,espacio);

    var dospuntos = array_input.indexOf(':');
    var letra = array_input.substring(dospuntos-1, dospuntos);

    var password = array_input.substring(dospuntos+2);

    array_datos_input['pos1']=parseInt(pos1)-1;
    array_datos_input['pos2']=parseInt(pos2)-1;
    array_datos_input['letra']=letra;
    array_datos_input['password']=password;

    return array_datos_input;
}
