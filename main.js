/*
Esercizio 1: Variabili e Stringhe(10 punti)
Crea un programma JavaScript che:
1. Chieda all'utente il suo nome e lo memorizzi in una variabile. (2.5 punti)
2. Chieda all'utente il suo anno di nascita e lo memorizzi in un'altra variabile. (2.5
punti)
3. Visualizzi un messaggio che saluta l'utente con il suo nome e gli dice se è nato
    in un anno bisestile. (5 punti)



    const nomeUtente = prompt("Qual'è il tuo nome?");
    const annoDiNascita = Number(prompt("Indica il tuo anno di nascita"));

    const annoBisestile = (anno) => {
        return (anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0;
    }

    const messaggioUtente = `Ciao ${nomeUtente}, `;

    let messaggioBisestile;

    if (annoBisestile(annoDiNascita)) {
        messaggioBisestile = "Questo è un anno bisestile!";
    } else {
        messaggioBisestile = "Questo non è un anno bisestile.";
    }

    console.log(messaggioUtente, messaggioBisestile);
*/

//________________________ ex 2 _______________________________


/*
Esercizio 2: Cicli e Condizioni (15 punti)
Scrivi una funzione JavaScript che:
1. Accetta un array di stringhe come argomento.
2. Calcola la concatenazione di tutte le stringhe che iniziano con la lettera "A" o "a".
(10 punti)
3. Se la lunghezza della stringa concatenata supera i 10 caratteri, troncala a 10
caratteri e restituiscila. (5 punti)
4. Se il ciclo si completa senza che la stringa superi i 10 caratteri, restituisci la
stringa concatenata.

*/
/*

const concatenaStringhe = function (array) {
    if (!Array.isArray(array)) {
        return `L'input deve essere un array`;
    }
    let stringaConcatenata = '';
    for (let i = 0; i < array.length; i++) {
        const stringaCorrente = array[i];

        if (stringaCorrente[0].toLowerCase() === 'a') {
            stringaConcatenata += stringaCorrente;

            if (stringaConcatenata.length > 10) {
                return stringaConcatenata.substring(0, 10);
            }
        }
    }
    return stringaConcatenata;
}

const array = ["ciao", "Juventus", "Calcio", "Anna", "algebra"]
const risultato = concatenaStringhe(array);
console.log(risultato);
*/
//________________________ ex 3 _______________________________
/*
Dato il seguente oggetto che rappresenta un libro, esegui i compiti sottostanti:
Esame Modulo JavaScript 2
const book = {
title: "Il Grande Gatsby"
,
author: "F. Scott Fitzgerald"
,
year: 1925,
rating: 8.5
};
1. Aggiungi una nuova proprietà rating all'oggetto libro, che rappresenta il rating
del libro, e inizializzalo a 6.
2. Aggiungi un metodo increaseRating che accetta come argomento un valore
numerico e che incrementa il rating del libro del valore passato alla funzione. (10
punti)
Il nuovo rating risultante, non può superare 10. (2.5 punti)
3. Rimuovi la proprietà year dall'oggetto libro. (2.5 punti)
4. Stampa in console ogni proprietà dell'oggetto libro in questo formato: "[chiave]:
[valore]"
. (5 punti)


*/
const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

book.rating = 6;

book.increaseRating = function (valore) {
    this.rating += valore;
    if (this.rating > 10) {
        this.rating = 10;
    }
};

delete book.year;

for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}
// qui utilizzo la funzione
book.increaseRating(3);
console.log(book.rating);

//________________________ ex 4 _______________________________
