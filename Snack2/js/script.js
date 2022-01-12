/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/
/*
1-richiedere due parole all' utente
2-verificarne la lunghezza
3-confrontare la lunghezza delle due parole fra loro
4-stampare prima la parola più corta, poi la più lunga
*/

//1
const firstWord = prompt('Inserire una parola', 'cavoli').trim();
const secondWord = prompt("Inserire un' altra parola", 'merenda').trim();

//4.1 - preparare il messaggio
let message = 'le due parole hanno uguale lunghezza';

//2
console.log('firstWord:', firstWord, firstWord.length);
console.log('secondWord:', secondWord, secondWord.length);

//VALIDAZIONE
if (!firstWord.length || !secondWord.length) {
    message = 'È necessario inserire due parole'
} else {
    //3
    if (firstWord.length > secondWord.length) {
        message = secondWord + ' ' + firstWord;
    } else if (firstWord.length < secondWord.length) {
        message = firstWord + ' ' + secondWord;
    }
}

//4.2 - stampare in console
console.log(message);

//4.3 - stampare in pagina
document.getElementById('display').innerText = message;


