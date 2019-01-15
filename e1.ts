console.log("Examen November!");
window.addEventListener('load',inici,false);

function inici(){
    window.document.getElementById("but").addEventListener('click',generarRand,false);
    window.document.getElementById("but2").addEventListener('click',ventanaNew,false);
    window.document.getElementById("but3").addEventListener('click',tamañosNew,false);

}
function generarRand(){
    let input1 = <HTMLInputElement>  window.document.getElementById("num1");
    let num1 = input1.valueAsNumber;
    let input2 = <HTMLInputElement>  window.document.getElementById("num2");
    let num2  = input2.valueAsNumber;
    let div = window.document.getElementById("numA");

    
    console.log(num1);
    console.log(num2);

    let num = getRandomArbitrary(num1,num2);
    div.innerHTML += num;
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function ventanaNew(){
    window.open("secundaria.html","something", "width=450,height=400");
}
var widthPadre = window.innerWidth;
var heightPadre =  window.innerHeight;
function tamañosNew(){
    window.open("secundaria.html","something", "width=450,height=400");
}