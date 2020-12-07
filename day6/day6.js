//Part 1
function sumQuestions(array_input_format){
    var totalQuestions = 0;
    var grupo = [];

    for(var i = 0; i<array_input_format.length;i++){
        grupo = array_input_format[i];
        totalQuestions += countQuestions(grupo); 
    }
    return totalQuestions;
}


function countQuestions(grupo){
    var questions = {};
    for(var i = 0; i<grupo.length; i++){
        for(var j = 0; j<grupo[i].length; j++){
            if(grupo[i][j]!=questions[grupo[i][j]]){   
            questions[grupo[i][j]]=grupo[i][j];
        }   
        }
    }
     return Object.keys(questions).length;
}

//console.log(sumQuestions(array_input_format));

//Part 2

function sumQuestions2(array_input_format){
    var totalQuestions = 0;
    var grupo = [];

    for(var i = 0; i<array_input_format.length;i++){
        grupo = array_input_format[i];
        totalQuestions += countQuestions2(grupo); 
    }
    return totalQuestions;
}

var ejemplo = ["abc"];
function countQuestions2(grupo){
    var num_questions_all = 0;
    var questions = {};
    var array_grupos = [];
    for(var i = 0; i<grupo.length; i++){
        for(var j = 0; j<grupo[i].length; j++){
            if(!questions[grupo[i][j]]){   
            questions[grupo[i][j]]= 1;
            if(questions[grupo[i][j]]==grupo.length){
                ++num_questions_all;
            } 

            } else {
            ++questions[grupo[i][j]];
            if(questions[grupo[i][j]]==grupo.length){
                ++num_questions_all;
            }  
            }   
        }
    }

     return num_questions_all;
}

//console.log(sumQuestions2(array_input_format));