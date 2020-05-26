var piCounter = 0;
var btnIzracunaj = document.getElementById("btn_izracunaj");

//const PI = Math.PI;


// Inputs
var poluPrecnik = document.getElementById("input_poluPrecnik");
var visina = document.getElementById("input_visina");
var brojDecimala = document.getElementById("decimala");
var jedinicaMere = document.getElementById("jedinicaMere");
var piCheck = document.getElementById("piCheck");
// Outputs
var rValue = document.getElementById("rValue");
var hValue = document.getElementById("hValue");
var piValue = document.getElementById("piValue");
var izlazRezultata = document.getElementById("rezultat");
var rezultat = null

function ispisRezultata(){
    rezultat = (poluPrecnik.value**2) * visina.value * Math.PI;

    if(poluPrecnik.value > 0){
        rValue.innerHTML = poluPrecnik.value;
    }else{
        rValue.innerHTML = "r";
    };

    if(visina.value > 0){
        hValue.innerHTML = visina.value;
    }else{
        hValue.innerHTML = "H";
    };
    if(piCounter == 1){
        let pi = Math.PI;
        piValue.innerHTML = pi.toFixed(brojDecimala.value);
    }else{
        piValue.innerHTML = "PI";
    };
    if(rezultat == 0){
        return izlazRezultata.innerHTML = "";
    };

    if(jedinicaMere.value === "none"){
        izlazRezultata.innerHTML = rezultat.toFixed(brojDecimala.value);
        return;
    }
    izlazRezultata.innerHTML =  `${rezultat.toFixed(brojDecimala.value)} ${jedinicaMere.value}<sup>3</sup>`;
};

document.addEventListener("click", ispisRezultata);
document.addEventListener("keyup", ispisRezultata);
piCheck.addEventListener("click", ()=>{
    if(piCounter == 0){
        piCounter++;
    }else{
        piCounter--;
    }
})