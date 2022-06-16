var N = prompt ("Saisir un mot");

    // Cette méthode compte et retourne le nombre de voyelles dans
    // une chaîne de caractères déjà transformée en tous majuscules

    static int nbVoy(String chaine)
    {
      int n = 0, nbCars = chaine.length();

      for (int i = 0; i < nbCars; i++)

        switch (chaine.charAt(i))
         {
            case 'A' : case 'E' : case 'I' :
            case 'O' : case 'U' : case 'Y' :  n++;
         }
      return n;
    }

    public static void main(String[] args)

     {
        String chaine = "Saisir un mot",
            

        System.out.printf("Le nombre de voyelles :\n");
        System.out.printf(" - Saisir un mot %s est %d\n",
                                 chaine, nbVoy(chaine.toUpperCase()));
    
    }

/* Exécution: