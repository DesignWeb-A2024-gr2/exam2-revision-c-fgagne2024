const PATTERN_NUMERO_IDENTIFICATION = /^([A-Za-z]{3}-\d{4})$/;
const nom = document.getElementById("nom_biere");

const identification = document.getElementById("identification_biere");
const saveur = document.getElementsByClassName("saveur_houblon"); 
const input = document.getElementById("couleur");
const couleur = document.getElementById("couleur_nom");

input.addEventListener("input", NomBiere);
const COULEURS_BIERE = [
    "Paille",
    "Blonde",
    "Rousse",
    "Cuivrée",
    "Brune",
    "Noire"
];
console.log(saveur[0].checked);

function NomBiere(){
    couleur.innerText = COULEURS_BIERE[input.value];
}
function Validation(){
    
    let valide = false;
    if(nom.value != ""&&PATTERN_NUMERO_IDENTIFICATION.test(identification.value)&&(saveur[0].checked||saveur[1].checked||saveur[2].checked||saveur[3].checked)){
        valide = true;
    }
    return valide;
}