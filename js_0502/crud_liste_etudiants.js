$(document).ready(function(){
var liste_des_etudiants = [];
var error = 0;

//Create
$("#apparition_formulaire").on("click", function(){$("#formulaire_ajout").show();console.log("ready");});
$("#formulaire_ajout").submit(c_de_crud);
//Read

//Update

//Delete



}) //Fin document ready

$(function(){ //pas ready
console.log("auto");
$("#formulaire_ajout").hide();

//Create
function c_de_crud(){
	console.log("C de CRUD");
	//liste_des_etudiants[0] === undefined ressort true
	verif_formulaire ? ajout: "";
}
//Read
function r_de_crud(){
	console.log("R de CRUD");
}
//Update
function u_de_crud(){
	console.log("U de CRUD");
}
//Delete
function d_de_crud(){
	console.log("D de CRUD");
}
function verif_formulaire(){
	console.log("verif_formulaires");
	//error == 0 ? return true : background red ;
}

})
