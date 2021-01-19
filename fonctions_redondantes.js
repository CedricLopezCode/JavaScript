function prompt_verifie_int(message_du_prompt){
	var nom_du_chiffre_quon_attend = -1;
	do{
		var donnee_rentree = prompt(message_du_prompt);
		//Vérification que c'est un nombre entier
		if(isNaN(donnee_rentree)){
			alert("Ce n'est pas un nombre");
		}
		else if(parseInt(donnee_rentree) != donnee_rentree){
			alert("On veut un nombre entier");
		}
		else{
			nom_du_chiffre_quon_attend = donnee_rentree;
		}
	}while(nom_du_chiffre_quon_attend == -1)
	return nom_du_chiffre_quon_attend;
}
function prompt_verifie_nombre(message_du_prompt){
	var nom_du_chiffre_quon_attend = -1;
	do{
		var donnee_rentree = prompt(message_du_prompt);
		//Vérification que c'est un nombre 
		isNaN(donnee_rentree)? alert("Ce n'est pas un nombre") : nom_du_chiffre_quon_attend = donnee_rentree;
	}while(nom_du_chiffre_quon_attend == -1)
	return nom_du_chiffre_quon_attend;
}