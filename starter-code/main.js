var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var queenImage = '<img src="queen.png" alt="Queen of Hearts" width="100%" height="100%">';
var kingImage = '<img src="king.png" alt="King of Hearts" width="100%" height="100%">';

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

function isTwoCards(){
	cardsInPlay.push(this);
	setCardFace(this);
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cardsInPlay){
	if (cardsInPlay[0].getAttribute('data-card') === cardsInPlay[1].getAttribute('data-card')){
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
	}
	clearCards(cardsInPlay);
}

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

function clearCards(cardsInPlay) {
	for (var i = 0; i < cardsInPlay.length; i++){
		cardsInPlay[i].innerHTML = '';
	}
}

createBoard();