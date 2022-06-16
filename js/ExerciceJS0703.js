var nbr1 = parseInt (window.prompt ("Saisissez un nombre"))
var nbr2 = parseInt (window.prompt ("Saisissez un deuxième nombre"))
var op = window.prompt ("Saisissez un opérateur")

if (op != "+" && op != "-" && op !="*" && op != "/" || nbr2 == 0)
{
    alert ("erreur !");
}

else

{
switch (op)
{
    case "+" :
        alert ( nbr1 + nbr2);
    break;

    case "-":
        alert ( nbr1 - nbr2);
    break;
    
    case "*":
            alert ( nbr1 - nbr2);
    break;
    
    case "/":
        alert (nbr1 / nbr2);
    break;
}
}