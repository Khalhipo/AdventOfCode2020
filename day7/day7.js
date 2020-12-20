//Part 1
function countColors(colors){
    let libColors = getLibColors(colors);
    return getParents(libColors, "shiny gold").length;
    //return libColors;
}


function getParents(libColors,color){
    var parents = [];
    libColors.forEach(function(valor, clave) {
        if(valor.filter(el=>el == color).toString() == color){
            parents.push(clave);
        }
});

    var totalParents = [];

    for(let parent of parents){
        totalParents.push(parent);
    }
    
    for(let parent of parents){
            totalParents.push(getParents(libColors,parent).toString());
    }

    var salida = totalParents.join(",").split(",").filter(el=> el!="");

    const result = salida.reduce((acc,item)=>{
      if(!acc.includes(item)){
      	acc.push(item);
      }
      return acc;
    },[])

    return result;

}




function getLibColors(colors){
    //let libColors = [];
    let libColors = new Map();

    for (let i in colors){
        var color = getTreeColor(colors[i]);
        libColors.set(color.color,color.children);

    }
    return libColors;
}


function getTreeColor(color){
    let children = [];
    let treeColor = {};

    colorSplit = color.split("contain");

    treeColor.color = colorSplit[0].split(" ")[0] + " " + colorSplit[0].split(" ")[1];

    if(colorSplit[1].split(" ").length == 4){
        treeColor.children = [];
        return treeColor;
    }

    for(let kid of colorSplit[1].split(",")){
        let kidColor = kid.split(" ")[2] + " " + kid.split(" ")[3];
        children.push(kidColor);
    }
    treeColor.children = children;

    return treeColor;
}


console.log(countColors(colors));

//Part 2
function countBags(colors){
    let libColors = getLibColors2(colors);
    return getNumBagsDirect(libColors, "shiny gold");
}

function getNumBagsDirect(libColors,color){
    var childrenDirect = libColors.get(color);
    var numChildren = 0;

   for(let child of childrenDirect){
      numChildren += parseInt(child[1]) + parseInt(child[1]) * parseInt(getNumBagsDirect(libColors,child[0]));
       
   }
      
    return numChildren; 
}


function getLibColors2(colors){
    //let libColors = [];
    let libColors = new Map();

    for (let i in colors){
        var color = getTreeColor2(colors[i]);
        libColors.set(color.color,color.children);

    }
    return libColors;
}


function getTreeColor2(color){
    let children = new Map();
    let treeColor = {};

    colorSplit = color.split("contain");

    treeColor.color = colorSplit[0].split(" ")[0] + " " + colorSplit[0].split(" ")[1];

    if(colorSplit[1].split(" ").length == 4){
        treeColor.children = children;
        return treeColor;
    }

    for(let kid of colorSplit[1].split(",")){
        let kidColor = kid.split(" ")[2] + " " + kid.split(" ")[3];
        children.set(kidColor,kid.split(" ")[1]);
    }
    treeColor.children = children;

    return treeColor;
}


//console.log(countBags(colors));