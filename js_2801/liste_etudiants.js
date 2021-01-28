/*var tableau_des_etudiants = [
	{
		prenom: "Moussa",
		nom: "Camara",
		moyenne: 15
	},
	{
		prenom: "Jean",
		nom: "Dupont",
		moyenne: 10
	},
	{
		prenom: "Francois",
		nom: "Paul",
		moyenne: 15
	},
	{
		prenom: "CDA",
		nom: "Test",
		moyenne: 13
	},
	{
		prenom: "Emmanuel",
		nom: "Macron",
		moyenne: 5
	},
	{
		prenom: "Cédric",
		nom: "Lopez",
		moyenne: 20
	}
];*/
var tableau_des_etudiants = [
	{ prenom: "Moussa", 	nom: "Camara", 	moyenne: 15 },
	{ prenom: "Jean", 		nom: "Dupont", 	moyenne: 10 },
	{ prenom: "Francois", 	nom: "Paul", 	moyenne: 15 },
	{ prenom: "CDA", 		nom: "Test", 	moyenne: 13 },
	{ prenom: "Emmanuel",	nom: "Macron",	moyenne: 5  },
	{ prenom: "Cédric",		nom: "Lopez",	moyenne: 20 }
];

//Affichage tableau
tableau_des_etudiants.length == 0 ? document.querySelector("#liste_etudiant").innerHTML = "Pas d’étudiants inscrits pour le moment": "";
//-------------------------------------------------------------
//-------------------------------------------------------------
//Correction
if(tableau_des_etudiants.length == 0){
	document.write("Pas d’étudiants inscrits pour le moment")
}
else{
	var liste_etudiant_correction = document.createElement("table");
	liste_etudiant_correction.setAttribute("class", "table table-striped")
}
//---------------------------------------------------------------
//---------------------------------------------------------------
var tableau_html = document.querySelector("#tableau_liste_etudiant");
for (index = 0; index < tableau_des_etudiants.length; index++){
	ajout_1_eleve();
}
function ajout_1_eleve(){
	var tr = document.createElement("tr");
	var td_prenom = document.createElement("td");
	var td_nom = document.createElement("td");
	var prenom = document.createTextNode(tableau_des_etudiants[index].prenom);
	var nom = document.createTextNode(tableau_des_etudiants[index].nom);
	td_prenom.appendChild(prenom);
	td_nom.appendChild(nom);
	tr.appendChild(td_prenom);
	tr.appendChild(td_nom);
	tableau_html.appendChild(tr);
	//console.log(tableau_html);
}
//Nombre d'Admis et refusé
var compteur_admis = 0;
var compteur_refuse = 0;
for (index = 0; index < tableau_des_etudiants.length; index++){
	10 <= tableau_des_etudiants[index].moyenne ? compteur_admis++ : compteur_refuse++ ;
}
document.querySelector("#nombre_admis").innerHTML = compteur_admis;
document.querySelector("#nombre_refuse").innerHTML = compteur_refuse;

//Liste admis ou refusé
var liste_admis = document.createElement("ul");
var liste_refuse = document.createElement("ul");
for (index = 0; index < tableau_des_etudiants.length; index++){
	var li = document.createElement("li");
	var phrase_avec_la_moyenne = document.createTextNode(tableau_des_etudiants[index].prenom +" "+tableau_des_etudiants[index].nom +" avec "+ tableau_des_etudiants[index].moyenne +" de moyenne");
	li.appendChild(phrase_avec_la_moyenne);
	10 <= tableau_des_etudiants[index].moyenne ? liste_admis.appendChild(li): liste_refuse.appendChild(li);
}

/*
//-----------------------------------------------------------------------------------------------
//Version Tableau
var tableau_admis = [];
var tableau_refuse = [];
		
for (index = 0; index < tableau_des_etudiants.length; index++){
	10 <= tableau_des_etudiants[index].moyenne ? ajouter_1_moyenne(tableau_admis):ajouter_1_moyenne(tableau_refuse);
}
function ajouter_1_moyenne(tableau){
	var phrase_avec_la_moyenne = tableau_des_etudiants[index].prenom +" "+tableau_des_etudiants[index].nom +" avec "+ tableau_des_etudiants[index].moyenne +" de moyenne";
	tableau.push(phrase_avec_la_moyenne);
}
//Afficher moyennes
bouton_admis.onclick = afficher_les_moyennes("admis");
bouton_refuse.onclick = afficher_les_moyennes("refuse");

function afficher_les_moyennes(tableau){
	if (tableau = "admis"){
		for (index = 0; index < tableau_admis.length; index++){
			document.write("<li>" + tableau_admis[index] + "</li>");
		}
	}else{
		for (index = 0; index < tableau_refuse.length; index++){
			document.write("<li>" + tableau_refuse[index] + "</li>");
		}
	}

}
//------------------------------------------------------*/
var bouton_admis = document.querySelector("#bouton_admis");
bouton_admis.onclick = afficher_les_moyennes_admis;
var bouton_refuse = document.querySelector("#bouton_refuse");
bouton_refuse.onclick = afficher_les_moyennes_refuse;
function afficher_les_moyennes_admis(){
	document.querySelector("#liste_etudiant").appendChild(liste_admis);
	
	//A voir avec moussa pour que cliquer sur l'un fasse disparaitre la liste de l'autre
	bouton_refuse.addEventListener("click", function(event){
	event.preventDefault();
	});
}
function afficher_les_moyennes_refuse(){
	document.querySelector("#liste_etudiant").appendChild(liste_refuse);
	//A voir avec moussa pour que cliquer sur l'un fasse disparaitre la liste de l'autre
	bouton_admis.addEventListener("click", function(event){
	event.preventDefault();
	});
}

//------------------------------------------------------------------
		
