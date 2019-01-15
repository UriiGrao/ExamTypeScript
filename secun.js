window.addEventListener('load', inicio, false);
var windowP;
function inicio() {
    var miDiv = window.document.getElementById("examen");
    windowP = window.opener;
    var d = new Date();
    miDiv.innerHTML += d.getHours() + " : " + d.getMinutes();
    var width = windowP.widthPadre;
    var height = windowP.heightPadre;
    var miDiv2 = window.document.getElementById("examen2");
    miDiv2.innerHTML += "Altura: " + height + " Anchura: " + width;
    window.document.getElementById("butonCA").addEventListener('click', cuenta, false);
}
function cuenta() {
    var input1 = window.document.getElementById("numeroCA");
    var num1 = input1.valueAsNumber;
    console.log(num1);
    var divPadre = windowP.document.getElementById("caSecun");
    var refInterval = null;
    if (refInterval == null) {
        refInterval = window.setInterval(function () {
            if (num1 == 0) {
                window.close();
            }
            else {
                num1--;
                divPadre.innerHTML = num1;
            }
        }, 1000);
    }
    else {
        window.clearInterval(refInterval); // Para parar la cuenta atras en el numero que queramos
        refInterval = null; // para resetear el interval.
    }
}
