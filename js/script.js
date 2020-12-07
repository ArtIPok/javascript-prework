function getMoveName(argMoveId) {
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce'
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/* if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'nieznany ruch'
} */

printMessage('Twój ruch to: ' + argPlayerMove);

/* if (computerMove == 'kamień' && playerMove == 'papier'){
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
} */
function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem:' + argComputerMove + ', a Ty zagrałeś: ' + argPlayerMove);
  console.log(',moves: ', argComputerMove, argPlayerMove)
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrałeś :)');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Niestety, przegrałeś');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Niestety. przegrałeś');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrałeś :)');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrałeś :)');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Niestety, przegrałeś');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Jest remis!');
  } else {
    printMessage('Wybrałeś nieznaną liczbę');
  }
}
displayResult(argComputerMove, argPlayerMove);
