/* Initialisations */ 
var cpt = 0; 
var somme = 0.0; 
 
/* Boucle de traitement */ 
do 
{ 
    nb = parseFloat(prompt("Nombre (0 pour finir) : ")); 
    cpt = cpt + 1;  // ou cpt ++ idem cpt+1//
    somme = somme + parseFloat(nb);  
} while (nb != 0) 
 
moyenne = somme / (cpt-1); 
document.write("Moyenne : "+ moyenne + " la somme est:" + somme); 

/* Affichage du résultat 
if (cpt == 1) 
{ 
    document.write("Aucun nombre n'a été saisi"); 
} 
else 
{ 
    moyenne = somme / (cpt-1); 
    document.write("Moyenne : "+ moyenne); 
}
*/