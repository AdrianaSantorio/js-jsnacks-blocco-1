console.log('JS OK!');

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
/*
1- richiedere 10 volte un numero all' utente
2- sommare i numeri ricavati fra loro
3- stampare la somma
*/

//3.1-prendere l' elemento dal dom
const displayElement = document.getElementById('display');

//2.1 inizializzo la variabile per sommare
let sum = 0;

//VALIDAZIONE.1-flag
let isValid = true;

//1
for (let i = 0; i < 10 ; i++) {
    const number = parseInt(prompt('inserire un numero','1').trim());
    //VALIDAZIONE.2
    if (isNaN(number)){
        isValid= false;
    } else {
        //2
        sum += number;
    }
}

//VALIDAZIONE.3
if (isValid) {
    //3.2-stampare in console
    console.log('Somma finale:', sum);
    //3.3-stampare in pagina
    displayElement.innerText = 'Somma finale: ' + sum;
} else {
    console.log('Hai inserito elementi non validi');
    displayElement.innerText = 'Hai inserito elementi non validi';
}

