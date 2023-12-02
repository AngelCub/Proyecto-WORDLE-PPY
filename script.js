
let lista = ["PLATA",
"PERRO",
"MANGO",
"CESTA",
"TIGRE",
"PARED",
"LIMON",
"HOJAS",
"AGUA",
"SILLA",
"LUZ",
"ROSA",
"AZUL",
"CIELO",
"PLUMA",
"VIENTO",
"RELAX",
"FIESTA",
"MUSAS",
"ALMA",
"CLAVE",
"ALOHA",
"ALOHA",
"SOLAR",
"PASTA",
"CORAL",
"GATOS",
"CARRO",
"FLORE",
"TORMA",
"SUELO",
"GRANO",
"PESCA",
"GRITA",
"CARNE",
"PESOS",
"FUEGO",
"FUEGO",
"CIEGO",
"PERES",
"COCES",
"REYES",
"AMIGO",
"LUNAS",
"SUEÑO",
"PISTA",
"GRUPO",
"MESA",
"BALON",
"JUGAR",
"COCER",
"DICES",
"CANES",
"CALAR",
"COCAS",
"JUEZA",
"CUERO",
"ACIDO",
"EJIDO",
"PLACA",
"PELOS",
"TACOS",
"PIÑAS",
"PARIS",
"LETRA",
"JUEGO",
"BOLOS",
"BOLAS",
"LIBRE",
"VACAS",
"VISTA",
"ISLAS",
"DORMI",
"JAMON",
"PLANO",
"FINES",
"BARCA",
"NOCHE",
"BOTAS",
"BUCEO",
"BOTON",
"JUEZ",
"TOPE",
"BALAS",
"ABRIR",
"AIRE",
"CHINA",
"CHIVO",
"RATON",
"GATOS",
"CAUSA",
"CAZAS",
"CIEGA",
"CALES",
"PEZON",
"PILON",
"NOCHE",
"CHINA",
"ROMEO"
] 
let intento = 6;

let indice = Math.floor(Math.random() * lista.length);
let palabra = lista[indice];
const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener('click', intentar);
console.log(palabra);

function intentar() {
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = "row";
    const INTENTO = leerIntento();
    console.log(INTENTO);
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1>");
        return;
    }
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (palabra[i] === INTENTO[i]) {
            console.log(INTENTO[i], "verde");
            SPAN.style.backgroundColor = 'green';
            SPAN.innerHTML = INTENTO[i];
        } else if (palabra.includes(INTENTO[i])) {
            console.log(INTENTO[i], "amarillo");
            SPAN.style.backgroundColor = 'yellow';
            SPAN.innerHTML = INTENTO[i];
        } else {
            console.log(INTENTO[i], "gris");
            SPAN.style.backgroundColor = 'gray';
            SPAN.innerHTML = INTENTO[i];
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intento = intento - 1;
    if (intento == 0) {
        terminar("<h1>PERDISTE!😖</h1>");
    }
}

function leerIntento() {
    const VALOR = document.getElementById("guess-input").value.toUpperCase();
    if (VALOR.length !== 5) {
        mostrarError("Por favor, ingresa una palabra de exactamente 5 letras.");
        return null;
    }
    mostrarError("");
    
    return VALOR;
}

function mostrarError(mensaje) {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = mensaje;
}


function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
