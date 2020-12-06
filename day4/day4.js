var array_input = document.getElementsByTagName('pre')[0].textContent.split("\n\n");
var num_passport_ok = 0;

//Part 1
function validatePassport(array_input){
    for(var i = 0; i<array_input.length;i++){
    var passport = input_format(array_input[i]);
    if(passportOk(passport)){
        num_passport_ok++;
        }   
    }
return num_passport_ok;
}


function passportOk(passport){
    if(passport.length < 7){
        return false;
    }

    if(passport.length == 7){
       var cid = passport.filter((el)=> el == 'cid');
       if(cid.length == 1){
          return false;
       } 
      
    }

    return true; 
}


function input_format(array_input){
   var input_split = array_input.split(":");
   var input_ready = input_split.map((el)=> el.substring(el.length-3, el.length));
    input_ready.pop();

    return input_ready; 
}

//console.log(validatePassport(array_input));

//Part 2
var passport_array_p = array_input.map(el=>el.replaceAll("\n"," ").split(" "));
var passport_array = passport_array_p.map(el=>
el.map(el=>el.split(":")));

var mapa_regex = {
"byr":"\\b(19[2-8][0-9]|199[0-9]|200[0-2])\\b",
"iyr":"\\b(201[0-9]|2020)\\b",
"eyr":"\\b(202[0-9]|2030)\\b",
"hgt":"\\b(1[5-8][0-9]|19[0-3])(cm)|(59|6[0-9]|7[0-6])(in)\\b",
"hcl":"#[a-f0-9]{6}",
"ecl":"amb|blu|brn|gry|grn|hzl|oth",
"pid":"\\b([0-9]){9}\\b"
}

function validatePassport2(passport_array){
    for(var i = 0; i<array_input.length;i++){
    var passport = passport_array[i];
    if(passportOk2(passport)){
        num_passport_ok++;
        }   
    }
return num_passport_ok;
}


function passportOk2(passport){
    if(passport.length < 7){
        return false;
    }

    if(passport.length == 7){
       var cid = passport.filter((el)=> el[0] == 'cid');
       if(cid.length == 1){
          return false;
       }
     }
     //Validar los datos 
     for(var i = 0; i<passport.length; i++){
         var codigo = passport[i];
          if(!testRegex(mapa_regex[codigo[0]],codigo[1])){
             return false;
          }
     }
    

    return true; 
}

function testRegex(reg, valor){
    var regex = new RegExp(reg);

    return regex.test(valor);
}

console.log(validatePassport2(passport_array)-1);