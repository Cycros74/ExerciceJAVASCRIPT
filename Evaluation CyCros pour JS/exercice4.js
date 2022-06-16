function affiche4() 
{
    var PU = parseInt(prompt("Entrez un prix unitaire "));
    var QTECOM = parseInt(prompt("Quantité commandé "));
    var TOT = PU * QTECOM;
    var REM = 0;
    var PAP = TOT - REM;
    var PORT = 0;
    var Result = 0;
    AfficheRemise(TOT, PAP);
    AjoutPort(PAP, PORT, Result);
  }
  
  function AfficheRemise(TOT)
  {
    var REM = 0;
    var PAP = TOT - REM;
    reponse4.textContent += "Le prix d'achats de vos articles est de " + TOT + " EUROS. " + "\n";
  
    if (TOT > 100 && TOT < 200)
    {
      REM = TOT * 0.05;
      PAP = TOT - REM;
      reponse4.textContent += " Une remise de 5% est offerte, soit " + (REM) + " euros en moins sur votre prix d'achats. Le prix avec remise est de  : " + PAP + " EUROS." + "\n";
      return PAP;
  
    }
    if (TOT >= 200)
    {
      REM = TOT * 0.1;
      PAP = TOT - REM;
      reponse4.textContent += " Une remise de 10% est offerte, soit " + REM + " euros en moins sur votre prix d'achats. Le prix avec remise est de  : " + PAP + " EUROS." + "\n";
      return PAP;
    } 
    else 
    {
      REM = 0;
      PAP = TOT - REM;
      reponse4.textContent += "  La remise est de 0%. Le prix à payer est toujours de " + TOT + " EUROS." + "\n";
      return PAP;
    }
  }
  
  function AjoutPort(PAP, PORT, Result) 
  {
    if (AfficheRemise(PAP) > 500) 
    {
      reponse4.textContent = "Aucun frais n'est ajouté" + "\n";
    } else {
      PORT = (AfficheRemise(PAP)) * 0.02;
      Result = (AfficheRemise(PAP)) + PORT;

      if (PORT < 6) 
      {
        PORT = 6;
        Result = (AfficheRemise(PAP)) + PORT;
        reponse4.textContent += "Les frais de port sont de 6€ minimum" + "\n";
      }
      reponse4.textContent += " Des frais de port à hauteur de 2% s'ajoutent au prix remisé. Le prix total est de : " + Result + "EUROS" + "\n";
    }
  }