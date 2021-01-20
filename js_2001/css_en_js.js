/*var ma_classe = document.getElementsByClassName("conteneur"); 
//pour prendre tous les éléments de ma classe sous forme de tableau 

ma_classe[1].style.background = "red";
//applique le changement à ma classe mais que le 2eme élément (indice 1)
*/

var les_par = document.getElementsByClassName("titre_paragraphe");
les_par[0].style.color = "red";
var le_conteneur = document.querySelectorAll(".conteneur");
le_conteneur[0].style.background = "lime";

var le_span = document.querySelectorAll("span");//Pas de innerHTML si on veut changer
console.log(le_span);
le_span[1].innerHTML = "LE Span 0 a été changé";//Pour changer il faut  faire le innerHTML au moment de changer


