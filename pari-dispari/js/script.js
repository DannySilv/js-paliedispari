//1- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//2- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//3- Sommiamo i due numeri
//4- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//5- Dichiariamo chi ha vinto.

// 1
const oddOrEven = prompt("Vuoi essere pari o dispari?");
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

while (userNumber > 5 || userNumber < 1) {
    alert("Il numero che hai scelto non va bene, scegline un altro!");
    userNumber = prompt("Scegli un numero da 1 a 5");  
}
console.log(userNumber);

// 2
const pcNumber = Math.floor(Math.random() * 5 + 1);
console.log(pcNumber);

// 3
let sum = userNumber + pcNumber;
console.log(sum);

// 4
if (sum % 2 == 0) {
    sum = "pari";
} else {
    sum = "dispari";
}

// 5
if (userNumber == sum) {
    alert("Complimenti! Hai vinto!");
} else {
    alert("Mi dispiace, hai perso!");
}