//1- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//2- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//3- Sommiamo i due numeri
//4- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//5- Dichiariamo chi ha vinto.

//ODD OR EVEN AND NUMBER CHOICE
let oddOrEven = prompt("Vuoi essere pari o dispari?");
while (oddOrEven !== "pari" && oddOrEven !== "dispari") {
    alert("Puoi scegliere solo tra pari e dispari! Riprova!");
    oddOrEven = prompt("Vuoi essere pari o dispari?");  
}
console.log(oddOrEven);
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
while (userNumber > 5 || userNumber < 1) {
    alert("Il numero che hai scelto non va bene, scegline un altro!");
    userNumber = prompt("Scegli un numero da 1 a 5");  
}
console.log(userNumber);

// SUM
let sum = userNumber + randomNumbGen();
console.log(sum);

// COMPARE SUM TO ODDOREVEN TO CHECK WHO WINS
if (oddOrEven == isSumOddOrEven(sum)) {
    alert("Complimenti! Hai vinto!");
} else {
    alert("Mi dispiace, hai perso!");
}

// FUNCTIONS

/**
 * Description -> This function generates a random number between 1 and 5
 * @returns {Number} -> Returns the number generated
 */
function randomNumbGen() {
    const pcNumber = Math.floor(Math.random() * 5 + 1);
    console.log(pcNumber);
    return pcNumber;
}

/**
 * Description -> This function check the sum of two numbers and declares if it is odd or even
 * @param {Integer} sum -> The sum obtained by adding together the user number and the pc number
 * @returns {Number} -> Returns a string saying if the sum is odd or even
 */
function isSumOddOrEven(sum) {
    if (sum % 2 == 0) {
        sum = "pari";
    } else {
        sum = "dispari";
    }
    console.log(sum);
    return sum;
}