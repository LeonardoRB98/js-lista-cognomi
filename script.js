
// 1.Chiedere all’utente il cognome,
var cognomeUtente = prompt('inserisci il tuo cognome');
console.log(cognomeUtente);

// 2.inserirlo in un array con altri cognomi
var listaCognomi = ['Pesce', 'Castenetto', 'Passaro', 'Grimaldi', 'Rossi', 'Verdi', 'Bianchi'];
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

// 3.Stampa la lista ordinata alfabeticamente.
console.log(listaCognomi.sort());

// 4.Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('lista').innerHTML += "<li>" + listaCognomi[i] + "</li><br>";
  if (cognomeUtente == listaCognomi[i]) {
  console.log(i + 1);
  document.getElementById('mia_posizione').innerHTML = i + 1;
  }
}
