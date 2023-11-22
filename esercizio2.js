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
