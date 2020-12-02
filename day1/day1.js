//Función para buscar el par de números que sumen 2020 y devolver su multiplicación

function day1_par(array){
for(var i = 0 ; i<array.length-1;i++){
    for(var j =i+1 ; j<array.length;j++){
      if(parseInt(array[i]) + parseInt(array[j]) == 2020){
        return array[i]*array[j];
      }
    }
}
  return false;
}

//Función para buscar el trío de números que sumen 2020 y devolver su multiplicación
function day1_trio(array){
  for(var i = 0 ; i<array.length-1;i++){
    for(var j =i+1 ; j<array.length;j++){
      for(var k = j+1 ; k<array.length;k++){
              if(parseInt(array[i]) + parseInt(array[j]) + parseInt(array[k]) == 2020){
        return array[i]*array[j]*array[k];
      }
      }
    }
}
  return false;
}
