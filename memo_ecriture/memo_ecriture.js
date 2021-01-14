/*  \ = caractère d'échappement 
 => le caractère suivant ne sera pas interprété
 => utile pour les '' et "" dans les phrases
 \n = retour à la ligne*/
/*
	//Fonction type
alert("salut");//Aucune interaction possible tant qu'on valide pas// Sert surtout à débuguer
confirm("Voulez-vous vraiment supprimer ?"); //Demande une confirmation oui ou non
prompt("entrer votre nom"); //donne un champs de saisie pour rentrer
console.log("Console.log"); //comme alert mais plus discret car ne s'affiche pas sur l'écran et ne demande pas d'intéraction

	//Utilisation
var nombre = prompt("entrer un nombre");
console.log(nombre);
//alert(nombre);

	//Portée des variable
function portee_des_variables() {
	var test = 7;
	return test;
}
console.log(portee_des_variables()); //marche car return dans la fonction
//console.log(test); //ne marche pas car la variable n'existe pas en dehors de la fonction = variable locale

	//Conditions
var nombre = 8;
if(nombre > 5){
	console.log("Ton chiffre est supérieur à 5");
}
else if(nombre < 5){
	console.log("Ton chiffre est inférieur à 5");
}
else{
	console.log("Ton chiffre est égal à 5");
}

	//Ternaires = Conditions simple en 1 lignes
var nombre = 8;
nombre > 5 ? console.log("Vrai"):console.log("Faux"); //Vrai donc prend le 1er après le ?
nombre = 2;
nombre > 5 ? console.log("Vrai"):console.log("Faux"); //Faux donc prend le 1er après le ?

	//Switch case = comparaison valeur exacte
var numéro_du_jour = 1
switch (numéro_du_jour){ //nom de la variable à comparer
	case 1: //valeurs exactes que peut prendre cette variable
		console.log("Lundi");
	break; //Attention à pas oublier le break sinon il fera  tous les suivant meme si c'est pas égal !!!
	case 2:
		console.log("Mardi");
	break;
	case 3:
		console.log("Mercredi");
	break;
	case 4:
		console.log("Jeudi");
	break;
	case 5:
		console.log("Vendredi");
	break;
	case 6:
		console.log("Samedi");
	break;
	case 7:
		console.log("Dimanche");
	break;
	default: //toujours mettre un default pour éviter les erreurs
		console.log("Ce n'est pas un jour de la semaine");
	break;
}
switch (numéro_du_jour){ //nom de la variable à comparer
	case 1: //valeurs exactes que peut prendre cette variable
		console.log("Lundi");
	 //Attention à pas oublier le break sinon il fera  tous les suivant meme si c'est pas égal !!!
	case 2:
		console.log("Mardi");
	
	case 3:
		console.log("Mercredi");
	
	case 4:
		console.log("Jeudi");
	
	case 5:
		console.log("Vendredi");
	
	case 6:
		console.log("Samedi");
	
	case 7:
		console.log("Dimanche");
	
	default: //toujours mettre un default pour éviter les erreurs
		console.log("Ce n'est pas un jour de la semaine");
	break;
}
switch (numéro_du_jour){ //nom de la variable à comparer
	case 1: //valeurs exactes que peut prendre cette variable
		
	//volontairement oubli du break car plusieurs cas donnent le meme résultat
	case 2:


	case 3:
		console.log("Début de semaine");
	break;
	case 4:
	
	
	case 5:
		console.log("Fin de semaine");
	break;
	case 6:
		
	
	case 7:
		console.log("Week-end");
	break;
	default: //toujours mettre un default pour éviter les erreurs
		console.log("Ce n'est pas un jour de la semaine");
	break;
}
	//Concaténation = mise à la suite
var chaine1 = "Salut";
var chaine2 = "Ca va ?";
var concat_chaine1 = chaine1.concat(chaine2); //au moins spécifique aux strings
var concat_chaine2 = chaine1 + chaine2;
console.log(concat_chaine1);
console.log(concat_chaine2);

var chiffre1 = 15;
var chiffre2 = 20;
//var concat_chiffre1 = chiffre1.concat(chiffre2);//pas possible car chiffre pas string
var concat_chiffre2 = chiffre1 + chiffre2;
console.log(concat_chiffre1);
console.log(concat_chiffre2);

var chiffre1 = "15";
var chiffre2 = "20";
var concat_chiffre1 = chiffre1.concat(chiffre2);//ok car intéprété comme string
var concat_chiffre2 = chiffre1 + chiffre2;
console.log(concat_chiffre1);
console.log(concat_chiffre2);

	//Exo Numéro de tel

//var saisie_utilisateur_numero_a_appeler = prompt("entrer le nuléro que vous voulez appeler");
//Attention le 0 au début des nombres est suppprimé entre la saisie et la comparaison de nombres donc;
	//Soit on passe par des string
switch (saisie_utilisateur_numero_a_appeler){
	case "17":
		confirm("Vous voulez appeler la police ?");
	break;
	case "18":
		confirm("Vous voulez appeler les pompiers ?");
	break;
	case "0800":
		alert("Vous voulez appeler numéro vert");
	break;
	default: 
		alert("Ce n'est pas un numéro publique");
	break;
}
	//Soit on utilise la fonction parseInt
switch (parseInt(saisie_utilisateur_numero_a_appeler)){
	case 17:
		confirm("Vous voulez appeler la police ?");
	break;
	case 18:
		confirm("Vous voulez appeler les pompiers ?");
	break;
	case 0800:
		alert("Vous voulez appeler numéro vert");
	break;
	default: 
		alert("Ce n'est pas un numéro publique");
	break;
}

if(saisie_utilisateur_numero_a_appeler.substring(0,2) == "06" ){//pour prendre les lettres du début à la 2eme
	alert("Vous voulez appeler un portable");
}
else if(saisie_utilisateur_numero_a_appeler == "07"){
	alert("Vous voulez appeler un membre de votre famille");
}
else {
	alert("Vous voulez appeler quelqu'un");
}
saisie_utilisateur_numero_a_appeler == "123"? alert("Vous voulez appeler Cédric"):alert("Vous ne voulez pas appeler Cédric")
saisie_utilisateur_numero_a_appeler == "007"? console.log("Bond....  James Bond"): console.log("Ce n'est pas  James Bond")

for (table_de = 1; table_de <= 10; table_de++){
	console.log("\t\t\t Table de " + table_de)
	for(fois = 1; fois <= 10; fois++){
		console.log(table_de + "x" + fois + " = " + table_de*fois)
	}
}

	//Exo boucle
/*
var index_while = 0;

while(index_while < 3){
	console.log(index_while);
	index_while ++;
	console.log("J'aime les boucles while")
}
var index_while = 0;

for (index_for = 0; index_for < 3; index_for++){
	console.log(index_for);
	console.log("J'aime les boucles for")
}
var index_do_while =0;
do{
	console.log(index_do_while);
	index_do_while ++;
	console.log("J'aime les boucles do while")
} while(index_do_while < 3)
*/
	//exo decrementation de 20 à 0 par pas de 2
//initialisation
var depart_compte_a_rebours = 0;
var decrementation = 0;
var comptage = 0;
//rentrée des valeurs
do{
	var valeur_entree = prompt("Entrez la valeur de départ du compte à rebours");
	parseInt(valeur_entree)%1 != 0 ? alert("Ce n'est pas un nombre") : depart_compte_a_rebours=parseInt(valeur_entree);
}while(depart_compte_a_rebours == 0)

do{
	var valeur_entree = prompt("Entrez la décrémentation voulue");
	parseInt(valeur_entree)%1 != 0 ? alert("Ce n'est pas un nombre") : decrementation=parseInt(valeur_entree);
}while(decrementation == 0)
//affichage valeurs rentrées
console.log("Départ du compte à rebours à:\t" + depart_compte_a_rebours);
console.log("Décrémentation par pas de:\t" + decrementation);
console.log("\nTop départ !!!");
//décrémentation
comptage = depart_compte_a_rebours;
do{
	console.log(comptage);
	comptage = comptage - decrementation;
}while(comptage > depart_compte_a_rebours % decrementation)
	console.log(comptage);
	console.log("Fini !!!");
//affichage reste
depart_compte_a_rebours % decrementation == 0 ? alert("Pile poil !") : alert("Dommage il reste :" + "  " + comptage);
		//Correction
	//résultat += nombre + " * " + multiplication + " = " + (nombre * multiplication);
	//console.log(resultat);



/*
do{
	prompt("Entrez la valeur de départ du compte à rebours");
}while()
var valeur_initiale = parseInt(prompt("Entrez la valeur de départ du compte à rebours"));
for(decrementation = valeur_initiale; decrementation = 0; decrementation--){
	c
}*/

	//Tableaux
/*
var fruits = ["oranges", "melon", "oranges", "fraise", "peche"];
for (ligne = 0; ligne < fruits.length; ligne++){
	console.log("for ligne " + (ligne+1));
	console.log(fruits[ligne]);
}
var ligne = -1;
do{
	ligne ++;
	console.log("do while recherche ligne " + (ligne+1));
	console.log(fruits[ligne]);
	console.log("J'aime les " + fruits[ligne]);
} while(fruits[ligne] != "fraise")

ligne = -1;
do{
	ligne ++;
	console.log("do while total ligne " + (ligne+1));
	console.log("J'aime les " + fruits[ligne]);
} while(ligne < fruits.length-1)

ligne = 0
while(ligne < fruits.length){
	console.log("while total ligne " + (ligne+1));
	console.log("J'aime les " + fruits[ligne]);
	ligne++;
}
console.log("fin while affichage tableau");
*/

//var fruits = ["oranges", "melon", "oranges", "fraise", "peche"];
//JS détecte tout seul quel type de variable c'est donc pas besoin de préciser int, float, string, array
//console.log(fruits[ligne]);
	//tableau table de multiplication
//-----------------------------------------------------
/*var table_de_multiplication[10][10];
for (table_de = 1; table_de <= 10; table_de++){ 
	console.log("\t\t\t Table de " + table_de + " en cours");
	for(fois = 1; fois <= 10; fois++){
		console.log("\t\t\t Table de " + table_de + " en cours");
		table_de_multiplication[table_de][fois] = table_de * fois;
	}
}
for (table_de = 1; table_de <= 10; table_de++){
	console.log("\t\t\t Table de " + table_de)
	for(fois = 1; fois <= 10; fois++){
		console.log(table_de + "x" + fois + " = " + table_de_multiplication[table_de][fois]);
	}
}

/*
var tous_les_prenoms = ["cedric",			"nadia",			"sonia"]
var toutes_les_notes = [[20, 20, 20, 20], [10, 10, 10, 10], [2, 2, 2, 2]];
				
//var tous_les_eleves_avec_notes = [cedric,nadia,sonia];

for (eleve_numero = 0; eleve_numero < tous_les_prenoms.length; eleve_numero++){
	tous_les_eleves_avec_notes[tous_les_prenoms[eleve_numero]][toutes_les_notes[eleve_numero]];
	console.log(tous_les_eleves_avec_notes[eleve_numero]);
}*/
//------------------------------------------------------

