let hora = minuto = segundo = milisegundo = "0" + 0, startTimer;
let cronometroEnMarcha = false;

const botonIniciar = document.querySelector(".iIniciar"),
    botonPausar = document.querySelector(".iPausar"),
    botonReiniciar = document.querySelector(".iReiniciar");

botonIniciar.addEventListener("click", IniciarCronometro);
botonPausar.addEventListener("click", PausarCronometro);
botonReiniciar.addEventListener("click", ReiniciarCronometro);

function IniciarCronometro() {
    if (!cronometroEnMarcha) {
        cronometroEnMarcha = true;
        botonIniciar.classList.add("active");
        botonPausar.classList.remove("stopActive");
        botonIniciar.disabled = true;

        startTimer = setInterval(() => {
            milisegundo++;
            milisegundo = milisegundo < 10 ? "0" + milisegundo : milisegundo;

            if (milisegundo == 100) {
                segundo++;
                segundo = segundo < 10 ? "0" + segundo : segundo;
                milisegundo = "0" + 0;
            }

            if (segundo == 60) {
                minuto++;
                minuto = minuto < 10 ? "0" + minuto : minuto;
                segundo = "0" + 0;
            }

            if (minuto == 60) {
                hora++;
                hora = hora < 10 ? "0" + hora : hora;
                minuto = "0" + 0;
            }

            ColocarValor();

        }, 10);
    }
}

function PausarCronometro() {
    cronometroEnMarcha = false;
    botonIniciar.classList.remove("active");
    botonIniciar.disabled = false;
    clearInterval(startTimer);
}

function ReiniciarCronometro() {
    cronometroEnMarcha = false;
    botonIniciar.classList.remove("active");
    botonIniciar.disabled = false;
    botonPausar.classList.remove("stopActive");
    clearInterval(startTimer);
    hora = minuto = segundo = milisegundo = "0" + 0;
    ColocarValor();
}

function ColocarValor() {
    document.querySelector('.iMillisecond').innerHTML = milisegundo;
    document.querySelector('.iSecond').innerHTML = segundo;
    document.querySelector('.iMinute').innerHTML = minuto;
    document.querySelector('.iHora').innerHTML = hora;
}

// Este es el interruptor para los modos oscuro y claro
const modoInterruptor = document.getElementById('modoInterruptor');
modoInterruptor.addEventListener('change', cambiarModo);

function cambiarModo() {
    document.body.classList.toggle('modo-oscuro', modoInterruptor.checked);
}
