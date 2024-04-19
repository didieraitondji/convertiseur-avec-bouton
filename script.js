//récupération des valeurs

var cfa = document.querySelector("#cfa");
var naira = document.querySelector("#naira");
var euro = document.querySelector("#euro");

var btnsend = document.querySelector("#send");

btnsend.addEventListener("click", (e)=>{
    e.preventDefault();
    convertir();
})

function convertir() {
    
    if (cfa.value != 0) {
        cfaToOther();
        console.log("okay cfa");
    }
    else if (euro.value != 0) {
        euroToOther()
        console.log("okay euro");
    }
    else if (naira.value != 0) {
        nairaToOther();
        console.log("okay naira");
    }
}

function cfaToOther(){
    var montant = cfa.value;
    var euroValue = 0.0015 * montant;
    var nairaValue = 1.83 * montant;
    euro.value = euroValue;
    naira.value = nairaValue;
}
function euroToOther(){
    var montant = euro.value;
    var cfaValue = 656.25 * montant;
    var nairaValue = 1198.60 * montant;
    cfa.value = cfaValue;
    naira.value = nairaValue;
}
function nairaToOther(){
    var montant = naira.value;
    var cfaValue = 0.54 * montant;
    var euroValue = 0.00082 * montant;
    cfa.value = cfaValue;
    euro.value = euroValue;
}