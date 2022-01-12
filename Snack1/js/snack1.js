console.log('JS OK!');

//L’utente inserisce due numeri in successione, con due prompt. 
//Il software stampa il maggiore.


//stampare in pagina.1
const displayElement = document.getElementById('display');

//chiedere due numeri all' utente
const firstNumber = parseInt(prompt('inserire il primo numero','17').trim());
const secondNumber = parseInt(prompt('inserire il secondo numero','17').trim());
console.log('firstNumber:', firstNumber);
console.log('secondNuber:', secondNumber);


let message = 'I numeri sono uguali';

//validazione
if(isNaN(firstNumber) || isNaN(secondNumber)) {
    message = 'Uno dei valori inseriti non è valido'
} else {
    //comparazione
    if (firstNumber > secondNumber) {
        message = `Il numero più grande è ${firstNumber}`;
    } else if (secondNumber > firstNumber) {
        message = `Il numero più grande è ${secondNumber}`;
    }
}

//stampare in console
console.log(message);


//stampare in pagina.2

displayElement.innerText = message;

