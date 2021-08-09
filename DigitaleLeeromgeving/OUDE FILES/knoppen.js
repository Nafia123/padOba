var blokken = new Array(8);
var inputAmounts = new Array(8);

var titelVeld = null;
var afbeelding = null;
var multipleChoice = null;
var memory = null;
var openVraag = null;
var sleepVraag = null;
var tekstVeld = null;
var video = null;

blokken[0] = titelVeld;
blokken[1] = afbeelding;
blokken[2] = multipleChoice;
blokken[3] = memory;
blokken[4] = openVraag;
blokken[5] = sleepVraag;
blokken[6] = tekstVeld;
blokken[7] = video;

inputAmounts[0] = 2;
inputAmounts[1] = 1;
inputAmounts[2] = 6;
inputAmounts[3] = 12;
inputAmounts[4] = 2;
inputAmounts[5] = 16;
inputAmounts[6] = 1;
inputAmounts[7] = 1;

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
			//memory = new Memory(num);
			blokken[num] = new Memory(num);
			break;
		case 4:
			//openVraag = new OpenVraag(num);
			blokken[num] = new OpenVraag(num);
			break;
		case 5:
			//sleepVraag = new SleepVraag(num);
			blokken[num] = new SleepVraag(num);
			break;
		case 6:
			//tekstVeld = new TekstVeld(num);
			blokken[num] = new TekstVeld(num);
			break;
		case 7:
			//video = new Video(num);
			blokken[num] = new Video(num);
			break;
	}
	
	activeerBlok(num);
}

function TitelVeld(num) {
	this.active = false;
	this.source = "titel";
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function Afbeelding(num) {
	this.active = false;
	this.source = "afbeelding";
	//this.amount;
	this.value = "";
}

function MultipleChoice(num) {
	this.active = false;
	this.source = "multiple";
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function Memory(num) {
	this.active = false;
	this.source = "memory";
	this.width = 690;
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function OpenVraag(num) {
	this.active = false;
	this.source = "openvraag";
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function SleepVraag(num) {
	this.active = false;
	this.source = "sleepvraag";
	this.width = 725;
	//this.amount;
	this.values = new Array(inputAmounts[num]);
}

function TekstVeld(num) {
	this.active = false;
	this.source = "tekst";
	this.width = 650;
	//this.amount;
	this.value = "";
}

function Video(num) {
	this.active = false;
	this.source = "video";
	//this.amount;
	this.value = "";
}
