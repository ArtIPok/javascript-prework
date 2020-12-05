let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'nieznany ruch'
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Brawo! Wygrałeś :)');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
  printMessage('Remis');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Niestety przegrałeś :(');
} else if (computerMove == 'papier' && playerMove == 'papier') {
  printMessage('Remis');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Brawo! Wygrałeś :)');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Niestety przegrałeś :(');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Niestety przegrałeś :(');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Niestety przegrałeś :(');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
  printMessage('Remis');
} else {
  printMessage('Wybrałeś nieznaną liczbę');
}
