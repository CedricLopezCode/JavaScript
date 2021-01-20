
var submit = document.getElementById("bouton_envoyer");
console.log(submit);

submit.onmouseover = verifier;
submit.onclick = verifier;
//test_sans_click();

function verification_chaque_champs() {}

function verifier() {
	var les_inputs = document.querySelectorAll("input");
	console.log(les_inputs);
	var compteur_champs_valides = 0;
	//verif input
	for(var index = 0; index < les_inputs.length; index++){
		les_inputs[index].value == "" ? les_inputs[index].style.background = "red" : les_inputs[index].style.background = "lime";
		les_inputs[index].value == "" ? "" : compteur_champs_valides++;
	}
	//verif textarea
	if(document.querySelector("textarea").value == ""){
		console.log("if");		
		document.querySelector("textarea").style.background = "red";
	}else{
		console.log("else");
		document.querySelector("textarea").style.background = "lime";
		compteur_champs_valides++;
	}
	//bouton
	if(compteur_champs_valides == les_inputs.length + 1/*(le text area)*/){
		document.getElementById("bouton_envoyer") = "<button id=\"bouton_envoyer\">Envoyer</button>";
	}else{
		console.log("else");
		document.querySelector("textarea").style.background = "lime";
		compteur_champs_valides++;
	}
	compteur_champs_valides == les_inputs.length + 1/*(le text area)*/ ? submit.style.background = "lime" : submit.style.background = "red" ;
	compteur_champs_valides == les_inputs.length + 1/*(le text area)*/ ? "" : submit.disable = "off" ;

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

