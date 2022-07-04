// 1. Visualizzare in pagina 5 numeri casuali  diversi tra loro. 
// 2. Da lì parte un timer di 30 secondi.
// 3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// 4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// RECUPERO LA SEZIONE NUMBERS
const numbers = document.getElementById('numbers');

const randomNumbers = [];

for(let i = 0; i < 5; i++){
    let randomNumber = Math.floor(Math.random() * 100);
    randomNumbers.push(randomNumber);
}

numbers.append(randomNumbers);

