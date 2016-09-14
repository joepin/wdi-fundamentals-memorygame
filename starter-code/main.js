var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardOne === cardFour){
// 	alert ("You found a match!");
// } else {
// 	alert ("Sorry, try again.");
// }

function createBoard(){
	var gameBoard = document.getElementById("game-board");
	for (var i = 0; i < 4; i++){
		var newCard = document.createElement('div');
		newCard.className = "card";
		gameBoard.appendChild(newCard);
	}
}

createBoard();