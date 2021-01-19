//JS détecte tout seul quel type de variable c'est donc pas besoin de préciser int, float, string, array
/*  \ = caractère d'échappement 
 => le caractère suivant ne sera pas interprété
 => utile pour les '' et "" dans les phrases
 \n = retour à la ligne
 \t = tabulation //à éviter entre les +
 */

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
document.querySelectorAll(".class" ou "balise");
//---------------------
	

		//Portée des variables

function portee_des_variables() {var test = 7;	return test;}
console.log(portee_des_variables()); //marche car le return dans la fonction
//console.log(test); //ne marche pas car la variable n'existe pas en dehors de la fonction = variable locale

		// ===
var donnee_rentree = prompt("Chiffre = 2021 ?");

donnee_rentree == 2021 ? console.log("Prompt = Int avec ==") : console.log("== déjà différent");
donnee_rentree === 2021 ? console.log("Prompt = Int avec ===") : console.log("=== différent type");
// == compare juste ja valeur
/// === compare aussi le type

break; //sort de la boucle // tue le process 
//permet de sortir d'une boucle quand on a trouvé ce qu'on cherche
continue; //reprend le process ?????????????????????????????????????