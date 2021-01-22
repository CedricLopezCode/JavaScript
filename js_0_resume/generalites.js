//JS détecte tout seul quel type de variable c'est donc pas besoin de préciser int, float, string, array
/*  \ = caractère d'échappement 
 => le caractère suivant ne sera pas interprété
 => utile pour les '' et "" dans les phrases
 \n = retour à la ligne
 \t = tabulation //à éviter entre les +
 */
		// Triple egal ===
var donnee_rentree = prompt("Chiffre = 2021 ?");

donnee_rentree == 2021 ? console.log("Prompt = Int avec ==") : console.log("== déjà différent");
donnee_rentree === 2021 ? console.log("Prompt = Int avec ===") : console.log("=== différent type");
// == compare juste ja valeur
/// === compare aussi le type


		//Fonctions Basiques

alert("Pop-up à valider pour continuer");//Aucune interaction possible tant qu'on valide pas// Sert surtout à débuguer
confirm("Voulez-vous vraiment supprimer ?"); //Demande une confirmation oui ou non
prompt("entrer votre nom"); //donne un champs de saisie pour rentrer = string
console.log("Console.log dans inpecter élément puis onglet console"); //comme alert mais plus discret car ne s'affiche pas sur l'écran et ne demande pas d'intéraction

	// ecrit direct dans le html //pas besoin de s'embeter à ouvrir la console
document.open();
document.write(XXXXX);
document.writeln(XXXXX); //ecrit avec un saut de ligne apres
document.write("<div>" + XXXXX + "</div>");// permet de faire comme dans le html
document.close();

	//Récupérer des infos dans le HTML
document.getElementById("nom de l'id "); //nécessite d'etre juste avant la balise fermante body
//selectionne tout entre les balise y compris les balises
document.getElementById("nom de l'id ").innerHTML; //nécessite d'etre juste avant la balise fermante body
//permet de selectionner seulement à l'intérieur des balises
document.getElementsByClassName("nom de la class"); //nécessite d'etre juste avant la balise fermante body
//selectionne tout entre les balise y compris les balises mais dans un tableau
document.getElementsByClassName("nom de la class").innerHTML; //nécessite d'etre juste avant la balise fermante body
//permet de selectionner seulement à l'intérieur des balises mais dans un tableau
document.getElementsByTagName("nom de la balise"); //nécessite d'etre juste avant la balise fermante body
//selectionne tout entre les balise y compris les balises mais dans un tableau
document.getElementsByTagName("nom de la balise").innerHTML; //nécessite d'etre juste avant la balise fermante body
//permet de selectionner seulement à l'intérieur des balises mais dans un tableau
	

	//Raccourcis
document.querySelector("#id");
document.querySelectorAll(".class" ou "balise"); //sans le All il retourne que le 1er qu'il trouve


		//Remplacer ou Ajouter
document.getElementById("nom de l'id").innerHTML = "Nouveau Texte"; //Remplace
document.getElementById("nom de l'id").innerHTML = "Texte à Ajouter"; //Ajouter

		//Attention au innerHTML
var le_span = document.querySelectorAll("span");//Pas de innerHTML si on veut changer
console.log(le_span);
le_span[1].innerHTML = "LE Span 0 a été changé";//Pour changer il faut  faire le innerHTML au moment de changer

		//multi-class
var mes_classes = document.querySelector(".class").classList;
console.log(mes_classes); //affiche le nombre de classe de l'élément qu'il y a sur la ligne
console.log(mes_classes.classList); //fait un tableau de tous les noms de classe associés à l'élément sur la meme ligne
mes_classes.add("nouvelle_classe"); //ajouter une classe dans la ligne
mes_classes.remove("nouvelle_classe"); //supprmer une classe dans la ligne
mes_classes.toggle("nouvelle_classe"); //alterne entre ajouter/supprimer
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

	//toggle
window.setInterval(function(){
	mes_classes.toggle("nouvelle_classe"); //alterne entre ajouter/supprimer
},1000) //temps de changement en ms
