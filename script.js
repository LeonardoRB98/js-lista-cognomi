// 1.Chiedere all’utente il cognome,
// 2.inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// 3.Stampa la lista ordinata alfabeticamente.
// 4.Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.



var cognomeUtente = prompt('inserisci il tuo cognome');
console.log(cognomeUtente);

var listaCognomi = ['Pesce', 'Castenetto', 'Passaro', 'Grimaldi', 'Rossi', 'Verdi', 'Bianchi'];
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);
