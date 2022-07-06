// 1. Visualizzare in pagina 5 numeri casuali  diversi tra loro. 
// 2. Da lì parte un timer di 30 secondi.
// 3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// 4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// RECUPERO GLI ELEMENTI DEL DOM
const numbers = document.getElementById('numbers');
const countDown = document.getElementById('countdown');

// DEFINISCO IL TEMPO DEL COUNTDOWN
let seconds = 30;

// CREO L'ARRAY DEI NUMERI RANDOM
const randomNumbers = [];

// CREO I NUMERI RANDOM
for(let i = 0; i < 5; i++){
    let randomNumber = Math.floor(Math.random() * 100);
    if(!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber);
}

// CREO LA VARIABILE D'APPOGGIO PER STAMPARE I NUMERI IN PAGINA
let number = '';

// CREO LA STRINGA DA STAMPARE IN PAGINA
for(let i = 0; i < 5; i++){
    number += `<p>${randomNumbers[i]}</p>`
}

// STAMPO LA STRINGA IN PAGINA
numbers.innerHTML = number;

// CREO IL COUNTDOWN
setInterval(function() {
    seconds--;
    countDown.innerText = seconds;
}, 1000)

// STAMPO IL COUNTDOWN IN PAGINA
countDown.innerText = seconds;
 
// RIMUOVO I NUMERI ED IL COUNTDOWN DAL DOM
setTimeout(function() {
    numbers.remove(randomNumbers);
    countDown.remove(seconds);
}, 30000)

// CREO L'ARRAY DI NUMERI DELL'UTENTE
const userNumbers = []

// CIO CHE FACCIO UNA VOLTA RIMOSSI NUMERI E COUNTDOWN DAL DOM
setTimeout(function() {
    // CHIEDO I NUMERI ALL'UTENTE
    for(let i = 0; i < 5; i++){
        let answer = parseInt(prompt('Scrivi un numero da 1 a 100'));
        userNumbers.push(answer);
        console.log(answer);
    }

    // CREO LE VARIABILI D'APPOGGIO PER IL PUNTEGGIO E PER I NUMERI INDOVINATI
    let score = 0;
    let correctNumber = '';

    // STABILISCO IL PUNTEGGIO ED I NUMERI INDOVINATI
    for(let i = 0; i < 5; i++){
        if(randomNumbers.includes(userNumbers[i])){
            score += 1;
            correctNumber += userNumbers[i] + ' ';
        }
    }

    // STAMPO IN CONSOLE IL PUNTEGGIO ED I NUMERI INDOVINATI
    console.log('Il tuo punteggio è: ' + score);
    console.log('Questi sono i numeri che hai indovinato: ' + correctNumber)

}, 30200)

console.log(randomNumbers);
console.log(userNumbers);
