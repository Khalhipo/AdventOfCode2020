//Part 1
function calcularArboles(array_entrada){
    var contador = 0;
    var num_arboles = 0;
    for (var i = 1; i < array_entrada.length-1; i++) {
        var linea = array_entrada[i];
        contador += 3;
        if(contador > 30){
            contador -= 31;
        }
        if(linea[contador]=='#'){
            num_arboles++;
        }
     }
      return num_arboles;
}

//Part2
function totalArboles(array_entrada){
    var num_arboles_p1 = calcularArboles2(array_entrada, 1, 1);
    var num_arboles_p2 = calcularArboles2(array_entrada, 3, 1);
    var num_arboles_p3 = calcularArboles2(array_entrada, 5, 1);
    var num_arboles_p4 = calcularArboles2(array_entrada, 7, 1);
    var num_arboles_p5 = calcularArboles2(array_entrada, 1, 2);

    var total_arboles = num_arboles_p1*num_arboles_p2*num_arboles_p3*num_arboles_p4
    *num_arboles_p5;

    return total_arboles;
}


function calcularArboles2(array_entrada, right, down){
    var contador = 0;
    var num_arboles = 0;

    for (var i = down; i < array_entrada.length-1; i = i + down) { 
        contador += right;
        if(contador > 30){ 
            contador -= 31;  
        }
        //Hacer
        if(array_entrada[i][contador]=='#'){
            num_arboles++;
        }
     }
      return num_arboles;
}

