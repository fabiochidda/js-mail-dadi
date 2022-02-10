//Alert di benvenuto
alert("Benvenuto nel gioco dei dadi");

//Dichiarata variabile con il prompt per far inserire la email all'utente
let userEmail = prompt("Inserisci la tua email per iniziare a giocare");
console.log(userEmail);

// Dichiarato l'array che contiene le email
const diceGameEmail = ["paperino@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "minnie@gmail.com"];
console.log(diceGameEmail);

// Ciclo per controllare se i dati inseriti dall'utente corrispondono a quelli nell'array

let diceGameEmailFound = 0;

for (let i=0; i < diceGameEmail.length; i++ ) {

    console.log(i);

    const diceGameEmailList = diceGameEmail[i];

    if (userEmail == diceGameEmailList) {

        diceGameEmailFound = 1;

    } 

}

if (diceGameEmailFound == 1) {

    alert("Hai effettuato l'accesso");

} else {

    alert("Per favore inserisci una email registrata");

}



// Gioco dei dadi 

// Dichiarata variabile per il numero del giocatore
let diceGameUserNumber = Math.floor(Math.random() * (6 - 1 + 1) +1);
console.log(diceGameUserNumber);

// Dichiarata variabile per il numero dell' IA 
let diceGameAiNumber = Math.floor(Math.random() * (6 - 1 + 1) +1);
console.log(diceGameAiNumber);