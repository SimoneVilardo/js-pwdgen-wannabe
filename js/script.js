let nome = prompt('Qual è il tuo nome?')

let cognome = prompt('Qual è il tuo cognome?')

let colore_preferito = prompt('Qual è il tuo colore preferito?')

let numero = '21'

let password = (nome + cognome + colore_preferito + numero)

document.getElementById('password').innerHTML = password