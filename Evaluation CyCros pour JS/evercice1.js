var j=0;
var a=0;
var v=0;
var personnes;

do 
{
  personnes = window.prompt("Entrez votre age");

  if ( personnes <20) 
  {
    j++;
    console.log(personnes);
  }

  if (( personnes > 20) && (personnes<= 40))

  {
      a++;
      console.log(personnes);
  }

  else if ((personnes >40 ) && (personnes <=100))
  
  {
    v++;
    console.log(v);
  }
}
while (personnes < 100);
 
window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adultes\n " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");