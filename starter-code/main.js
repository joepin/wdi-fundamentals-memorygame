//array of desired card values
var cards = ["queen", "queen", "king", "king"];
//global array to hold user's selected cards
var cardsInPlay = [];
//string variables to hold HTML for different card face images
var queenImage = '<img src="queen.png" alt="Queen of Hearts" width="100%" height="100%">';
var kingImage = '<img src="king.png" alt="King of Hearts" width="100%" height="100%">';

/*
This function is essenttially the initializing function for our game.
It should only be called once - by the main flow of our script.
This function creates as many cards as are in the "cards" array defined above. 
*/
function createBoard(){
	var gameBoard = document.getElementById("game-board");
	for (var i = 0; i < cards.length; i++){
		var newCard = document.createElement('div');
		newCard.className = "card";
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		gameBoard.appendChild(newCard);
	}
}

/*
This function is attached to each card's click event, and is the main controller of the game.
It first adds the current card to the cardsInPlay array, calls setCardFace on this card, then checks if the array has two cards.
If it does, this function calls isMatch. Otherwise, it does nothing more.
*/
function isTwoCards(){
	cardsInPlay.push(this);
	setCardFace(this);
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

/*
This function determines if the cards that the user selected are a match.
Currently, it utilizes the alert method to provide feedback to the user.
Regardless of the outcome, this function calls clearCards to reset the card faces to nothing.
*/
function isMatch(cardsInPlay){
	if (cardsInPlay[0].getAttribute('data-card') === cardsInPlay[1].getAttribute('data-card')){
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
	}
	clearCards(cardsInPlay);
}

/*
This function takes in a card object as a parameter and sets its HTML to the appropriate card face image.
It is called every time the user selects a card.
*/
function setCardFace(card) {
	var cardVal = card.getAttribute('data-card');
	var toEnter = null;
	switch (cardVal){
		case "queen":
			toEnter = queenImage;
			break;
		case "king":
			toEnter = kingImage;
			break;
		default: 
			toEnter = '';
	}
	card.innerHTML = toEnter;
}

/*
This function simply iterates over the cardsInPlay array to set each element's innerHTML to null.
By doing so, we reset the card's faces.
*/
function clearCards(cardsInPlay) {
	for (var i = 0; i < cardsInPlay.length; i++){
		cardsInPlay[i].innerHTML = '';
	}
}

//call the createBoard function to finish setting up the DOM
createBoard();