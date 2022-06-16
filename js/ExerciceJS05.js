var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prenom");


if (window.confirm("êtes vous un homme ?") ) 
{
    alert ("Bonjour Monsieur" + reponse1 + reponse2)
}
else 
{
    alert ("Bonjour Madame");
}
