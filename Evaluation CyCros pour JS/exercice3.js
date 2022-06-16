var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`);
var rang = prenom.indexOf(saisie);

 
if(tab.includes(saisie)) 
{
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
	console.log(tab)
}

else
{
  alert("erreur")
}


https://github.com/Learenault/Exercices-JS/blob/main/index.html