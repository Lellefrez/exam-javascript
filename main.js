/*
Esercizio 1: Variabili e Stringhe(10 punti)
Crea un programma JavaScript che:
1. Chieda all'utente il suo nome e lo memorizzi in una variabile. (2.5 punti)
2. Chieda all'utente il suo anno di nascita e lo memorizzi in un'altra variabile. (2.5
punti)
3. Visualizzi un messaggio che saluta l'utente con il suo nome e gli dice se è nato
    in un anno bisestile. (5 punti)
*/


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