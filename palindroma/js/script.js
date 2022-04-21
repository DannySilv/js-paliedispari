// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt("Inserisci una parola");
console.log(userWord);

if (userWord == isPalindrome(userWord)) {
    alert("La parola è palindroma!")
} else {
    alert("La parola non è palindroma!")
}

// FUNCTIONS

/**
 * Description -> This function split the string choosen by the user in various arrays, changes the order of the letters by switching the new-created array elements position, rejoin the elements in a single string and returns the obtained new string.
 * @param {String} userWord -> The word choosen by the user
 * @returns {String} -> The word with letters order switched
 */

function isPalindrome(userWord) {
    const userWordSplit = userWord.split("");
    const userWordReverse = userWordSplit.reverse();
    const userWordJoin = userWordReverse.join("");
    console.log(userWordJoin)
    return userWordJoin;
}

