// 1. Visualizzare in pagina 5 numeri casuali  diversi tra loro. 
// 2. Da lì parte un timer di 30 secondi.
// 3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// 4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// RECUPERO GLI ELEMENTI DEL DOM
const numbers = document.getElementById('numbers');
const countDown = document.getElementById('countdown');

let seconds = 30;

countDown.innerText = seconds;

const randomNumbers = [];

for(let i = 0; i < 5; i++){
    let randomNumber = Math.floor(Math.random() * 100);
    randomNumbers.push(randomNumber);
}

numbers.append(randomNumbers);

const userNumbers = []
 
setTimeout(function() {
    numbers.remove(randomNumbers);
    for(let i = 0; i < 5; i++){
        let answer = prompt('Scrivi un numero');
        userNumbers.push(answer);
    }
}, 3000)

setInterval(function() {
    seconds--;
    countDown.innerText = seconds;
}, 1000)