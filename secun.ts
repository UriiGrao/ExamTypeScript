window.addEventListener('load', inicio, false);

var windowP;
function inicio(){
    let miDiv = window.document.getElementById("examen");
    windowP = window.opener;
    var d= new Date();

    miDiv.innerHTML += d.getHours() + " : " + d.getMinutes();

    let width = windowP.widthPadre;
    let height = windowP.heightPadre;

    let miDiv2 = window.document.getElementById("examen2");

    miDiv2.innerHTML += "Altura: " + height + " Anchura: " + width;

    window.document.getElementById("butonCA").addEventListener('click',cuenta,false);
}

function cuenta(){
    let input1 = <HTMLInputElement>  window.document.getElementById("numeroCA");
    let num1 = input1.valueAsNumber;
    console.log(num1);
    let divPadre = windowP.document.getElementById("caSecun");
    
    var refInterval = null;

    if (refInterval == null) {
        refInterval = window.setInterval(function () {
            if (num1 == 0) {
                window.close();
            } else {
                num1--;
                divPadre.innerHTML = num1;
            }
        }, 1000);
    } else {
        window.clearInterval(refInterval); // Para parar la cuenta atras en el numero que queramos
        refInterval = null; // para resetear el interval.
    }
}
