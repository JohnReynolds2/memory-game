console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push('cardOne');
cardsInPlay.push('cardThree');

console.log("User flipped" + cardOne);
console.log("User flipped" + cardThree);

if(cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
	 else {
		alert("Sorry, try again!");
	}
}




