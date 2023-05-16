// PROMT INSERIMENTO NOME
let nome = prompt('Qual è il tuo nome?');

// PROMT INSERIMENTO COGNOME
let cognome = prompt('Qual è il tuo cognome?');

// PROMT INSERIMENTO COLORE PREFERITO
let colore_preferito = prompt('Qual è il tuo colore preferito?');

// VARIABILE NUMERO
let numero = '21';

// VARIABILI UNIFICATE
let password = (`${nome}${cognome}${colore_preferito}${numero}`);

// COME APPARE IN PAGINA
document.getElementById('password').innerHTML = password;