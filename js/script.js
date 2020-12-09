{
  const playGame = function(playerInput){
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + argComputerMove);

  console.log('Gracz wpisał: ' + playerInput);

  const argPlayerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);

  displayResult(argComputerMove, argPlayerMove);
  }

  const getMoveName = function(argMoveId){
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

  const displayResult = function(argComputerMove, argPlayerMove){
    printMessage('Zagrałem:' + argComputerMove + ', a Ty zagrałeś: ' + argPlayerMove);
    console.log('moves: ', argComputerMove, argPlayerMove)

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

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}
