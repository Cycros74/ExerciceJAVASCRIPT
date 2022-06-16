var prenom = "";
var n = 0; 
var total = "";

while ((prenom = prompt("Saisissez le prenom n°" + (n + 1)+ " ou cliquer sur annuler")) != "")

{
    n++;
    total = total + prenom;
}

console.log ( "Le nombre de prenoms est de: " +n+ "Les prenoms sont:" + total);