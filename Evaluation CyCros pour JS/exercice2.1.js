function exercice2() {
    var nb = prompt("entrez un nombre à multiplier");
    for (var i = 0; i <= 10; i++) {
      var table = nb * i;
      console.log(nb + " * " + i + " = " + table);
      reponse2.innerText += nb + " * " + i + " = " + table + "\n";
    }
    reponse2.classList.replace("rep-cache","rep-ouverte");
  }
  