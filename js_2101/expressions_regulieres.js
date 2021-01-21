var compteur_champs_valides = 0;
var submit = document.getElementById("bouton_envoyer");
var les_inputs = document.querySelectorAll("input");
var le_textarea = document.querySelector("textarea");
console.log(submit);
console.log(les_inputs.length);
//-------------------------------------------------------------------------------------------------------------------------------------------
/*submit.onmouseover = verifier;
submit.onclick = verifier;
//test_sans_click();
window.setInterval(verification_tous_champs_valides, 500);
//bouton
	if(compteur_champs_valides == les_inputs.length + 1){//(le text area)
		submit = "<button id=\"bouton_envoyer\">Envoyer</button>";
	}else {
		console.log("else");
		document.querySelector("textarea").style.background = "lime";
		compteur_champs_valides++;
	}


function verification_tous_champs_valides() {
		if(compteur_champs_valides == les_inputs.length + 1/){//(le text area)
			submit = "<button id=\"bouton_envoyer\">Envoyer</button>";
		} else {
			console.log("else");
			document.querySelector("textarea").style.background = "lime";
			compteur_champs_valides++;
		}
}

function verifier() {
	//verif input
	for(var index = 0; index < les_inputs.length; index++){
		les_inputs[index].value == "" ? les_inputs[index].style.background = "red" : les_inputs[index].style.background = "lime";
		les_inputs[index].value == "" ? "" : compteur_champs_valides++;
	}
	//verif textarea
	if(document.querySelector("textarea").value == ""){
		console.log("if");		
		document.querySelector("textarea").style.background = "red";
	} else {
		console.log("else");
		document.querySelector("textarea").style.background = "lime";
		compteur_champs_valides++;
	}
	
	//compteur_champs_valides == les_inputs.length + 1 ? submit.style.background = "lime" : submit.style.background = "red" ;
	//compteur_champs_valides == les_inputs.length + 1 ? "" : submit.disable = "off" ;

}



function test_sans_click() {
	var les_inputs = document.querySelectorAll("input");
	console.log(les_inputs);
	for(var index = 0; index < les_inputs.length; index++){
		console.log("for");
		console.log("brut");
		console.log(les_inputs[index]);
		console.log("value");
		console.log(les_inputs[index].value);
		console.log("innerHTML");
		console.log(les_inputs[index].innerHTML);
	}
}
*/
//----------------------------------------------------------------------------------------------

//Corection

function verif(){
	if(document.querySelector("#nom").value == ""){
		document.querySelector("#nom").focus();//se concentre sur le champs faux
		document.querySelector("#nom").style.background = "red";
		return false; //permet d'eviter l'envoie quand on click
	}
	if(document.querySelector("#prenom").value == ""){
		document.querySelector("#prenom").focus();//se concentre sur le champs faux
		document.querySelector("#prenom").style.background = "red";
		return false; //permet d'eviter l'envoie quand on click
	}
}
/*document.querySelector("#bouton_envoyer").onclick = function(){}*/

//------------------------------------------------------------------------------------------------------
		//Refaire
var compteur_champs_valides = 0;
var submit = document.getElementById("bouton_envoyer");
var les_inputs = document.querySelectorAll("input");
var le_textarea = document.querySelector("textarea");


submit.onclick = verifier;

function verifier() {
	//verif input
	compteur_champs_valides = 0;
	for(var index = 0; index < les_inputs.length; index++){
		if(les_inputs[index].value == ""){
			les_inputs[index].style.background = "red"
		}else{
			les_inputs[index].style.background = "lime";
			compteur_champs_valides++;
		}
	}
	console.log(compteur_champs_valides);
	console.log(les_inputs.length);
	//verif textarea
	if(document.querySelector("textarea").value == ""){	
		document.querySelector("textarea").style.background = "red";
	} else {
		document.querySelector("textarea").style.background = "lime";
		compteur_champs_valides++;
	}
	if(compteur_champs_valides != les_inputs.length + 1){//1 text area
		return false;
	} 


}


//---------------------------------------------------------------------------------------------------------
		//expressions regulieres


var regex = /je suis l'id de test/

var id = document.getElementById("test").innerHTML;

console.log(id.match(regex)); //compare si id correspond bien à regex
test0152@test.fr
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@([a-zA-Z0-9\_\-\*\.\,\;\:\+])+(\.)+([a-zA-Z])$/ //$ signifie la fin donc plus de récupération 
//                   pas d'espace entre c'est volontaire
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@([a-zA-Z0-9\_\-\*\.\,\;\:\+])+(\.)+([a-zA-Z]{2,3})$/ //pour dire combien de lettre j'accepte
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@(hotmail\.com)/ //pour imposer

var tel_regex = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/  // ^ pour dire que ça commence forcément par ça
var indicatif = /^(0033|\+33)[0-9]{9}$/
//elementatester.regex