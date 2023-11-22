/*
Scrivi una funzione power per elevare un numero ad una potenza data:
1. Prende due numeri come parametri ( base e exponent ).
2. Controlla che effettivamente siano stati passati due numeri. In caso contrario,
lancia un errore che mostra nel messaggio quale dei parametri non è un
numero. Se entrambi non sono dei numeri, il messaggio d’errore li mostra
entrambi. (15 punti)
3. Nel caso in cui sia avvenuto un errore, la funzione ritorna null , altrimenti ritorna
base elevato alla exponent. (2.5 punti)
4. Indipendentemente dal successo o dal fallimento, stampa in console un
messaggio che indica che l'operazione è completa. (2.5 punti)
*/

const power = function (base, exponent) {
    if (typeof base !== 'numebr' && typeof exponent !== 'number') {
        throw new Error('Entrambi i parametri non sono numeri')
    } else if (typeof base !== 'number') {
        throw new Error('Il parametro "base" non è un numero')
    } else if (typeof exponent !== 'number') {
        throw new Error('Il parametro "exponent" non è un numero')
    }

    const result = Math.pow(base, exponent)
    return result

}
try {

}
