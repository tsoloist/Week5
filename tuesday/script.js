function sayHello (name) {
	if (name) {
		console.log("hello, " + name);	
	} else {
		console.log("hello, world!");
	}
	
}
//var name = prompt("What is your name?");
//sayHello(name);

function madLib (noun, subject) {
	var sentence = noun + "'s favorite subject in school is " + subject + ".";
	return sentence;
}
//var noun = prompt("Enter a noun:");
//var subject = prompt("Enter a subject:");
//console.log(madLib(noun, subject));


function tipAmount(bill, service) {
	var tipPercent;
	if (service === "good") {
		tipPercent = .20
	}
	else if (service === "fair") {
		tipPercent = .15;
	}
	else if (service === "poor") {
		tipPercent = .10;
	}
	var tip = bill * tipPercent;
	return tip;
}
function totalAmount (bill, service) {
	var tip = tipAmount(bill, service);
	var total = parseInt(bill) + parseInt(tip);
	return total;
}
function splipAmount (bill, service, numPeople) {
	var tip = tipAmount(bill, service);
	var total = totalAmount(bill, service);
	var split = total/numPeople;
	return split;
}
/*
var bill = prompt("How much was the bill? ");
var serviceLevel = prompt("Rate the service | Good, Fair, or Poor: ");
var numPeople = prompt("How many people?");
console.log("Total: " + totalAmount(bill, serviceLevel));
console.log("Amount owed per person: " + splipAmount(bill, serviceLevel, numPeople));
*/
function printNumbers (start, end) {
	for (var i = start; i <= end; i++) {
		console.log(i);
	}
}

function printNumbers2 (start, end) {
	var i = start;
	while (i <= end) {
		console.log(i);
		i++;
	}
}
//printNumbers(17, 20);
//printNumbers2(-20, 20);

function printSquare (num) {
	var star = "";
	//var row = [];
	for (var i = 0; i < num; i++) {
		for (var j = 0; j < num; j++) {
			//row.push(star);
			star += "*";
		}			
			//console.log(row.join(""));
			console.log(star);
			//row = [];
			star = "";
	}

}
//printSquare(5);

function printBox (w, h) {
	var star = "";
	var spaces = "";
	
	for (var g = 0; g < w; g++) {
		star += "*";
	}
	console.log(star);
	for (var i = 0; i < (h-2); i++) {
		for (var j = 0; j < w-2; j++) {
			spaces += " ";
		}
		console.log("*" + spaces + "*") ;
		spaces = "";
	}
	console.log(star);
}
printBox(6, 4);