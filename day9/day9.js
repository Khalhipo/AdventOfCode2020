//Part 1
function firstNumberIncorrect(array_input){
let preamble = array_input.slice(0,25);

for(var i = 25; i<array_input.length; i++){
	if(!numOk(preamble, array_input[i])){
		return array_input[i];
	}
	preamble.shift();
	preamble.push(array_input[i]);
}
}

function numOk(array, num){
for(var i = 0 ; i<array.length-1;i++){
    for(var j =i+1 ; j<array.length;j++){
      if(parseInt(array[i]) + parseInt(array[j]) == num && array[i] != array[j]){
        return true;
      }
    }
}
return false;
}

//console.log(firstNumberIncorrect(array_input));

//Part 2
function encryptionWeakness(array_input){
    const valor_objetivo = 1038347917;
	var suma = 0;
	var contiguousSetPos = [];

    for(var i = 0 ; i< array_input.length; i++){
	var pos = array_input[i];

	suma += parseInt(pos);
	contiguousSetPos.push(i);
	
	if(valor_objetivo - suma == 0){
		return sumaMaxMin(contiguousSetPos);

	} else if(valor_objetivo - suma < 0){
		suma = 0;
		i = contiguousSetPos[1] - 1;
		contiguousSetPos = [];
	}

}
}

function sumaMaxMin(contiguousSetPos){
	var contiguousSetValues = [];
	var min = Number.MAX_SAFE_INTEGER;
	var max = 0;
   for(let pos of contiguousSetPos){
   	contiguousSetValues.push(array_input[pos]);
   }
    
    for(let value of contiguousSetValues){
    	if(value<min){
    		min = value;
    	}
    	if(value>max){
    		max = value;
    	}
    }
    console.log(contiguousSetValues);
    console.log("min: " + min + " max: " + max);
   	return parseInt(min) + parseInt(max);

}
console.log(principal2(array_input));