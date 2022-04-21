// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt("Inserisci una parola");
console.log(userWord);
const userWordSplit = userWord.split("");
console.log(userWordSplit);
const userWordReverse = userWordSplit.reverse();
console.log(userWordReverse);
const userWordJoin = userWordReverse.join("");
console.log(userWordJoin);

if (userWord == userWordJoin) {
    alert("La parola è palindroma!")
} else {
    alert("La parola non è palindroma!")
}

// FUNCTIONS


