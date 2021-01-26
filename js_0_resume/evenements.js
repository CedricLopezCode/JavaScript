//evenement
window.setInterval(evenement, temps);
element.onclick = function(); //quand on clique //posible direct dans html
element.oncblclick = function(); //quand on double-clique //posible direct dans html
function nom_fonction_a_faire(){alert("Vous avez cliqué");}
element.onmouseover = function(); //comme le hover en css mais reste
element.onmouseout = function(); //arrete le hover quand on sort
element.onchange = function(); //par exemple pour le menu déroulant d'un formulaire
element.onfocus = function(); //utilisé principalement sur les formulaire //par exemple fond rouge si un probleme
element.onkeyup = function(); //utilisé principalement sur les formulaire pour dire avant la validation que ça va pas //par exemple les email qui ont besoin de *@*.*
element.onkeydown = function(); //utilisé principalement sur les formulaire //par exemple fond rouge si un probleme
element.onsubmit = function(); //utilisé principalement sur les formulaire //par exemple fond rouge si un probleme

	//ecouteur
objet.addEventListener("keyup", function);

	//toggle
window.setInterval(function(){
	mes_classes.toggle("nouvelle_classe"); //alterne entre ajouter/supprimer
},1000) //temps de changement en ms
