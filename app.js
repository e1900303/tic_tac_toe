const GameBoard = () => {
    //creating gameboard
    const main = document.getElementById("main");
    let currentPlayer = "player1";
  
    const createBoard = () => {
      main.innerHTML = ``;
      for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        main.appendChild(square);
      }
    };
    createBoard();
  
    const board = document.querySelectorAll(".square");
    board.forEach((tile) => tile.addEventListener("click", playerPlay));
  
    function playerPlay(e) {
      const squareArray = [...board];
      const index = squareArray.indexOf(e.target);
  
      if (
        !(
          squareArray[index].classList.contains("x") ||
          squareArray[index].classList.contains("o")
        )
      ) {
        if (currentPlayer === "player1") {
          currentPlayer = "player2";
          squareArray[index].classList.add("x");
        } else {
          currentPlayer = "player1";
          squareArray[index].classList.add("o");
        }
      }
  
      if (
        squareArray[0].classList.contains("x") &&
        squareArray[1].classList.contains("x") &&
        squareArray[2].classList.contains("x")
      ) {
        alert("Player1 Wins");
        GameBoard();
      } else if (
        squareArray[0].classList.contains("o") &&
        squareArray[1].classList.contains("o") &&
        squareArray[2].classList.contains("o")
      ) {
        alert("Player2 Wins");
        GameBoard();
      } else if (
        squareArray[3].classList.contains("o") &&
        squareArray[4].classList.contains("o") &&
        squareArray[5].classList.contains("o")
      ) {
        alert("Player2 Wins");
        GameBoard();
      } else if (
        squareArray[3].classList.contains("x") &&
        squareArray[4].classList.contains("x") &&
        squareArray[5].classList.contains("x")
      ) {
        alert("Player1 Wins");
        GameBoard();
      } else if (
        squareArray[6].classList.contains("x") &&
        squareArray[7].classList.contains("x") &&
        squareArray[8].classList.contains("x")
      ) {
        alert("Player1 Wins");
        GameBoard();
      } else if (
        squareArray[6].classList.contains("o") &&
        squareArray[7].classList.contains("o") &&
        squareArray[8].classList.contains("o")
      ) {
        alert("Player2 Wins");
        GameBoard();
      } else if (
        squareArray[0].classList.contains("o") &&
        squareArray[3].classList.contains("o") &&
        squareArray[6].classList.contains("o")
      ) {
        alert("Player2 Wins");
        GameBoard();
      } else if (
        squareArray[0].classList.contains("x") &&
        squareArray[3].classList.contains("x") &&
        squareArray[6].classList.contains("x")
      ) {
        alert("Player1 Wins");
        GameBoard();
      } else if (
        squareArray[1].classList.contains("x") &&
        squareArray[4].classList.contains("x") &&
        squareArray[7].classList.contains("x")
      ) {
        alert("Player1 Wins");
        GameBoard();
      } else if (
        squareArray[2].classList.contains("x") &&
        squareArray[5].classList.contains("x") &&
        squareArray[8].classList.contains("x")
      ) {
        alert("Player1 Wins");
        GameBoard();
      } else if (
        squareArray[1].classList.contains("o") &&
        squareArray[4].classList.contains("o") &&
        squareArray[7].classList.contains("o")
      ) {
        alert("Player2 Wins");
        GameBoard();
      } else if (
        squareArray[2].classList.contains("o") &&
        squareArray[5].classList.contains("o") &&
        squareArray[8].classList.contains("o")
      ) {
        alert("Player2 Wins");
        GameBoard();
      } else if (
        squareArray[0].classList.contains("o") &&
        squareArray[4].classList.contains("o") &&
        squareArray[8].classList.contains("o")
      ) {
        alert("Player2 Wins");
        GameBoard();
      } else if (
        squareArray[2].classList.contains("o") &&
        squareArray[4].classList.contains("o") &&
        squareArray[8].classList.contains("o")
      ) {
        alert("Player2 Wins");
        GameBoard();
      } else if (
        squareArray[0].classList.contains("x") &&
        squareArray[4].classList.contains("x") &&
        squareArray[8].classList.contains("x")
      ) {
        alert("Player1 Wins");
        GameBoard();
      } else if (
        squareArray[2].classList.contains("x") &&
        squareArray[4].classList.contains("x") &&
        squareArray[8].classList.contains("x")
      ) {
        alert("Player1 Wins");
        GameBoard();
      } else if (
        (squareArray[0].classList.contains("x") ||
          squareArray[0].classList.contains("o")) &&
        (squareArray[1].classList.contains("x") ||
          squareArray[1].classList.contains("o")) &&
        (squareArray[2].classList.contains("x") ||
          squareArray[2].classList.contains("o")) &&
        (squareArray[3].classList.contains("x") ||
          squareArray[3].classList.contains("o")) &&
        (squareArray[4].classList.contains("x") ||
          squareArray[4].classList.contains("o")) &&
        (squareArray[5].classList.contains("x") ||
          squareArray[5].classList.contains("o")) &&
        (squareArray[6].classList.contains("x") ||
          squareArray[6].classList.contains("o")) &&
        (squareArray[7].classList.contains("x") ||
          squareArray[7].classList.contains("o")) &&
        (squareArray[8].classList.contains("x") ||
          squareArray[8].classList.contains("o"))
      ) {
        alert("Tie!");
        GameBoard();
      }
    }
  };
  
  GameBoard();
  