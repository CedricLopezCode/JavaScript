/*
Soit le tableau suivant :
Var fruits = [‘Banane, ‘Raisin’, ‘Pomme’]
Afficher la liste des fruits
Demande à l’utilisateur de saisir un nom de fruits
S’il est présent dans la liste, on lui affiche son choix et on retire le fruit de la liste
Sinon on affiche un message ‘Indisponible’
On affiche à nouveau la liste.
*/

var fruits = ["Banane", "Raisin", "Pomme"];
console.log(fruits);

var fruit_recherche = prompt("Choisir un nom de fruit");
var fruit_dans_la_liste = 0;
console.log(fruits.length);
var parcours_tableau = 0;
do{
	fruit_recherche == fruits[parcours_tableau] ? fruit_dans_la_liste = 1 : "";
	fruit_dans_la_liste == 1 ? fruits.splice(parcours_tableau, 1) : "";
	parcours_tableau++;
}while(fruit_dans_la_liste == 0 && parcours_tableau < fruits.length)

fruit_dans_la_liste == 1 ? alert("Vous avez choisi: " + fruit_recherche + "\n Il reste donc : \n" + fruits) : alert("Indisponible");

