function tailleString (str) {
   var result = str.length;
   return result;
}
   //Remplacer le premier e de la chaine par un espace

function remplaceCar (str, leE, espa) {
    return str.replace(leE, espa); 
}


//Concatener les deux chaines de caractères'

function concatString (str) {
   var result2 = str.concat('super');
   return result2;
}

//afficher 5eme caractere
function afficherCar(str){
   	var result3 = str.substring(4,5);
   	return result3;
       }
//afficher jusqu'au neuvieme caractere  
function afficherNCar(str){
   	var result4 = str.substring(0,9);
   	return result4;
       }
//mise en majuscule
function majusculeString(str){
       	var result5 = str.toUpperCase();
       	return result5;
       }

//enlever espace avant et apres string
function SupprEspaceString(str){
	var result6 = str.trim();
	return result6;
    }

//Afficher true si le parametre d'entrée de la fonction est de type string'
function IsString(str){
	if (typeof str === 'string'){
	 return true;
  }
  else {
    return false;
  }
}


// extension d'un fichier 
function AfficherExtensionString (str){
return str.substr(str.lastIndexOf('jpg'));
}


// compter nombre d'espace dans une chaine
function NombreEspaceString(str){
return str.split(' ').length-1;
}



function InverseString (str){
return str.split('').reverse().join('');
}


//minusculeString
function minusculeString(str){
  return str.toLowerCase();
}

//Comptez le nombre de caractères différents dans la chaine
function countDistinctCar(str){
  var result = str.split("").filter(function(str, i, x) {
    return x.indexOf(str) === i;
  });
  return result.length;
  }



//'Calculer la puissance d\'un nombre par rapport à un autre (x à la puissance y)'
function calculPuissance(x,y){
return Math.pow(x,y);
}

//Afficher la valeur absolue d\'un nombre'
function valeurAbsolue(n){
  return Math.abs(n);
}


//Afficher les valeurs absolues de plusieurs nombres
function valeurAbsolueArray(tab){
  return tab.map(valeurAbsolue);
}

//Calculer la surface d\'un cercle (Pi * R carré) en fonction de son rayon. L\'arondir à l\'entier le plus proche'
function sufaceCercle(rayon) {
return Math.round(rayon * rayon * Math.PI);
}

// Calculer l\'hypthènuse d\'un triangle rectangle'

function hypothenuse(a,b){
return Math.sqrt((a*a + b*b));
}

//'Calculer l\'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.'

function calculIMC(a,b){
  var result = (a / (b*b));
  arrondi = result*100;          
   arrondi2 = Math.round(arrondi); // 556
    return arrondi2/100;
}




