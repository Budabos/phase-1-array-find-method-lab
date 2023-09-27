// code your solution here
function superbowlWin(games) {
    const winGame = games.find(game => game.result === "W");
    if (winGame) {
      return winGame.year;
    } else {
      return undefined;
    }
  }
  superbowlWin();
  


