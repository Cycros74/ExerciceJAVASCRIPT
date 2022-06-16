function prenom() 
{
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var nom = prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`);

    if (tab.indexOf(nom) > -1) 
    {
      var indice = tab.indexOf(nom);
      tab.splice(indice, 1);
      tab.push(" ");
      reponse3.textContent = tab;
    } 
    else 
    {
      reponse3.textContent = "Le prénom n'est pas trouvé";
      reponse3.classList.replace("rep-cache","rep-ouverte");
    }
  }