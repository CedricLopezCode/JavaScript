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

	

		//Portée des variables

function portee_des_variables() {var test = 7;	return test;}
console.log(portee_des_variables()); //marche car le return dans la fonction
//console.log(test); //ne marche pas car la variable n'existe pas en dehors de la fonction = variable locale
