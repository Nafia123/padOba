var blokken = new Array(7);
var inputAmounts = new Array(7);

/*
var titelVeld = null;
var afbeelding = null;
var multipleChoice = null;
var openVraag = null;
var sleepVraag = null;
var tekstVeld = null;
var video = null;

blokken[0] = titelVeld;
blokken[1] = afbeelding;
blokken[2] = multipleChoice;
blokken[3] = openVraag;
blokken[4] = sleepVraag;
blokken[5] = tekstVeld;
blokken[6] = video;
*/

inputAmounts[0] = 2;
inputAmounts[1] = 3;
inputAmounts[2] = 6;
inputAmounts[3] = 3;
inputAmounts[4] = 16;
inputAmounts[5] = 1;
inputAmounts[6] = 2;

function voegToe(num) {
	if (blokken[num] != null) return;
	
	switch(num) {
		case 0:
			//titelVeld = new TitelVeld(num);
			blokken[num] = new TitelVeld(num);
			break;
		case 1:
			//afbeelding = new Afbeelding(num);
			blokken[num] = new Afbeelding(num);
			break;
		case 2:
			//multipleChoice = new MultipleChoice(num);
			blokken[num] = new MultipleChoice(num);
			break;
		case 3:
			//openVraag = new OpenVraag(num);
			blokken[num] = new OpenVraag(num);
			break;
		case 4:
			//sleepVraag = new SleepVraag(num);
			blokken[num] = new SleepVraag(num);
			break;
		case 5:
			//tekstVeld = new TekstVeld(num);
			blokken[num] = new TekstVeld(num);
			break;
		case 6:
			//video = new Video(num);
			blokken[num] = new Video(num);
			break;
	}
	
	activeerBlok(num);
}

function verwijder(num) {
	if (blokken[num] != null) {
		blokken[num] = null;
	}
	
	dropBlok(num);
}

function TitelVeld(num) {
	this.active = false;
	this.source = "titel.html";
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function Afbeelding(num) {
	this.active = false;
	this.source = "afbeelding.html";
	//this.amount;
	this.values = new Array(inputAmounts[num]);
	this.width = 1050;
}

function MultipleChoice(num) {
	this.active = false;
	this.source = "multiple.html";
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function OpenVraag(num) {
	this.active = false;
	this.source = "openvraag.html";
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function SleepVraag(num) {
	this.active = false;
	this.source = "sleepvraag.html";
	//this.width = 725;
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function TekstVeld(num) {
	this.active = false;
	this.source = "tekst.html";
	this.width = 650;
	//this.amount;
	this.value = "";
}

function Video(num) {
	this.active = false;
	this.source = "video.html";
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}
