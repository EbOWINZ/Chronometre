let timerVal = 0;
let hrId = document.querySelector('#hrId');
let minId = document.querySelector('#minId');
let secId = document.querySelector('#secId');
let msId = document.querySelector('#msId');
let startId = document.querySelector('#startId');
let stopId = document.querySelector('#stopId');


let heures = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

//start chrono
startId.addEventListener('click', timer);
function timer() {
    timerVal = setInterval(() => {
        //affichage
        let heureShow = (heures < 10) ? "0" + heures : heures;
        let minutesShow = (minutes < 10) ? "0" + minutes : minutes;
        let secondesShow = (secondes < 10) ? "0" + secondes : secondes;
        let msecondesShow = (msecondes < 10) ? "0" + msecondes : msecondes;
        hrId.innerHTML = heureShow;
        minId.innerHTML = minutesShow;
        secId.innerHTML = secondesShow;
        msId.innerHTML = msecondesShow;

        msecondes += 1;
        if (msecondes >= 10) {
            msecondes = 0;
            secondes += 1;
        }

        if (secondes >= 60) {
            secondes = 0;
            minutes += 1;
        }

        if (minutes >= 60) {
            minutes = 0;
            heures += 1;
        }

    }, 100);

    startId.setAttribute('disabled', '');
}

//stop chrono
stopId.addEventListener('click', stopChrono);
function stopChrono() {
    clearInterval(timerVal);

    startId.removeAttribute('disabled')
}

//reset chrono
resetId.addEventListener('click', resetChrono);
function resetChrono() {
    heures = 0;
    minutes = 0;
    secondes = 0;
    msecondes = 0;

    clearInterval(timerVal);

    hrId.innerHTML = "00";
    minId.innerHTML = "00";
    secId.innerHTML = "00";
    msId.innerHTML = "00";

    startId.removeAttribute('disabled')
}