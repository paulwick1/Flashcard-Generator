//constructor function which ca accept values for the front and back of the card

function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}
//basic card prototype
BasicCard.prototype = {
	question: function(){ return front;
	},
	answer: function(){ return back;
	},
	both: function(){ return "Front: " + front + " / Back: " + back;},
}

//constructor function which ca accept values for the text and cloze statement
function ClozeCard (text, cloze) {
	this.text = cloze;
	this.cloze = cloze;
}

ClozeCard.prototype = {
	question: function(){ return cloze;
	},
	answer: function(){ return text;
	},
	both: function(){ return "Front: " + cloze + " / Back: " + text;},
}

var card = new BasicCard("what is 2+2?", "4");
var card2 = new BasicCard("what is 3+3?", "6");
var card2 = new ClozeCard("The total value of 3+3 is...", "The total value of 3+3 is 6");