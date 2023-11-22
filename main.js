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

//________________________ ex 3 _______________________________
