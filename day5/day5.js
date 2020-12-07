//Parte 1
function calcularIdMax(array_input){
    var id_max = 0;
    for(var i = 0; i<array_input.length;i++){
        var seat = array_input[i];
          if(id_max<calcularId(seat)){
              id_max = calcularId(seat);
          }
    }
    return id_max;
}

function calcularId(seat){
    var fila = 0;
    var columna = 0;
    var min_fila = 0;
    var max_fila = 127;
    var min_columna = 0;
    var max_columna = 7;

    for(var i = 0; i < seat.length;i++){
       var letra = seat[i];
    
       if(max_fila == min_fila+1 || max_columna == (min_columna+1)){
           if(letra=='F'){
               fila = min_fila;
           } else if(letra=='B') {
               fila = max_fila;
           } else if(letra == 'R'){
               columna = max_columna;
           } else if(letra == 'L'){
               columna = min_columna;
           }
       }   
       
       if(letra == 'F'){
       max_fila = Math.trunc((min_fila + max_fila) / 2);
       }  
       if(letra == 'B'){
       min_fila = Math.trunc((min_fila + max_fila) / 2) + 1;
       }
       if(letra == 'R'){
       min_columna = Math.trunc((min_columna + max_columna) / 2) + 1;
       }
       if(letra == 'L'){
       max_columna = Math.trunc((min_columna + max_columna) / 2);
       }
    }
    console.log("fila: " + fila + " columna: " + columna);
    return fila * 8 + columna;
}

console.log(calcularIdMax(array_input));


//Parte 2
function calcularIdMio(array_input){
    var id_mia;
    var array_id = [];
    var array_id_sort = [];
     
    for(var i = 0; i<array_input.length;i++){
        var seat = array_input[i];
        array_id.push(calcularId2(seat));
    }
    
    function comparar (a,b){ return a - b; }
    array_id_sort = array_id.sort(comparar);
    
    for(var i = 1; i<array_id_sort.length-1; i++){
        
       if((array_id_sort[i]!=(array_id_sort[i-1])+1) ||
       (array_id_sort[i]!=array_id_sort[i+1]-1)){
            id_mia = array_id_sort[i-1]+1;
       } 
        
    }
    return id_mia;
}

function calcularId2(seat){
    var fila = 0;
    var columna = 0;
    var min_fila = 0;
    var max_fila = 127;
    var min_columna = 0;
    var max_columna = 7;

    for(var i = 0; i < seat.length;i++){
       var letra = seat[i];
    
       if(max_fila == min_fila+1 || max_columna == (min_columna+1)){
           if(letra=='F'){
               fila = min_fila;
           } else if(letra=='B') {
               fila = max_fila;
           } else if(letra == 'R'){
               columna = max_columna;
           } else if(letra == 'L'){
               columna = min_columna;
           }
       }   
       
       if(letra == 'F'){
       max_fila = Math.trunc((min_fila + max_fila) / 2);
       }  
       if(letra == 'B'){
       min_fila = Math.trunc((min_fila + max_fila) / 2) + 1;
       }
       if(letra == 'R'){
       min_columna = Math.trunc((min_columna + max_columna) / 2) + 1;
       }
       if(letra == 'L'){
       max_columna = Math.trunc((min_columna + max_columna) / 2);
       }
    }
    return fila * 8 + columna;
}

console.log(calcularIdMio(array_input));