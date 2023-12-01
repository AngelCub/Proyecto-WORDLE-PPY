let lista = ["APPLE", "MOUSE", "GREEN", "GUESS"];
let intento = 6;

//console.log(Math.floor(Math.random()* lista.length));
let indice = Math.floor(Math.random()* lista.length);
let palabra = lista[indice];
const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener('click', intentar);
console.log(palabra);

function intentar(){
    const GRID  = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = "row";
    const INTENTO = leerIntento();
    console.log(INTENTO);
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    
    }
    for (i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (palabra[i] === INTENTO[i]){
            console.log(INTENTO[i], "verde"); 
            SPAN.style.backgroundColor = 'green';
            SPAN.innerHTML = INTENTO[i];
        }else if(palabra.includes(INTENTO[i])){
            console.log(INTENTO[i], "amarillo");
            SPAN.style.backgroundColor = 'yellow';
            SPAN.innerHTML = INTENTO[i];
        }else{
            console.log(INTENTO[i], "gris");
            SPAN.style.backgroundColor = 'gray';
            SPAN.innerHTML = INTENTO[i];
        }
        ROW.appendChild(SPAN);

    }
        GRID.appendChild(ROW);
    intento = intento - 1;
        if (intento==0){
            terminar("<h1>PERDISTE!😖</h1>")
    
    }
}

function leerIntento(){
    const VALOR = document.getElementById("guess-input").value.toUpperCase();
    return VALOR;

}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}