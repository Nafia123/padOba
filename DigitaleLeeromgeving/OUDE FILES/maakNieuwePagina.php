<html>
	<script src="http://www.w3schools.com/lib/w3data.js"></script>
	<script src="knoppen.js"></script>
	
	<head>
		<link href="css.css" rel="stylesheet" type="text/css" />
	</head>
	<script>
		var divContent = "";
		
		function init() {
			voegToe(0);
		}
	</script>
	<body class ="achtergrondBoekenkast" onload="init()">
		<div id="content" style="width:725px;">
			<button id="knop" type="button" onClick="voegToe(1)">Afbeelding</button>
			<button id="knop" type="button" onClick="voegToe(2)">Multiplechoice</button>
			<button id="knop" type="button" onClick="voegToe(3)">Memory</button>
			<button id="knop" type="button" onClick="voegToe(4)">Open Vraag</button>
			<button id="knop" type="button" onClick="voegToe(5)">Sleepvraag</button>
			<button id="knop" type="button" onClick="voegToe(6)">Tekstveld</button>
			<button id="knop" type="button" onClick="voegToe(7)">Video</button>
		</div><br/>
		
		<div id="bundel">
			<div id="blok0"></div>
			<div id="blok1"></div>
			<div id="blok2"></div>
			<div id="blok3"></div>
			<div id="blok4"></div>
			<div id="blok5"></div>
			<div id="blok6"></div>
			<div id="blok7"></div>
		</div>
		
		<script>
			//w3IncludeHTML();
			
			function activeerBlok(num) {
				if (!(blokken[num]["active"])) {
					var width = blokken[num].width;
					var url = blokken[num].source;
					
					if (!width) {
						width = 475;
					}
					
					if (!!url) {
						divContent = "<div id='content' style='width:" + width + "px;' w3-include-html='Blok\\" + url + ".html'>" + num + "</div><br/>";
						
						document.getElementById('blok' + num).innerHTML += divContent;
						w3IncludeHTML();
						
						blokken[num]["active"] = true;
					}
				}
			}
			
			function readyInput() {
				var write = new Array(41);
				var writeSpace = 0;
				var inputs, i, j, name;
				
				//GET VALUES FROM INPUT FIELDS
				inputs = document.querySelectorAll('textarea,select');
				console.log("Inputs: " + inputs.length);
				
				for (i = 0; i < inputs.length; i++) {
					name = inputs[i].name.substring(0, 2);
					console.log("Now handling input with name \"" + name + "\".");
					
					switch(name) {
						case "ti": // titel
							blokken[0].values[0] = inputs[i].value;
							//console.log("Written value: " + blokken[0].values[0]);
							break;
						case "on": // onderwerp
							blokken[0].values[1] = inputs[i].value;
							//console.log("Written value: " + blokken[0].values[1]);
							break;
						case "af":
							blokken[1].value = inputs[i].value;
							break;
						case "mc": // mc AKA multipleChoice
							for (j = 0; j < blokken[2].values.length; j++) {
								if (!blokken[2].values[j]) {
									blokken[2].values[j] = inputs[i].value;
									break;
								}
							}
							break;
						case "me": // memory
							for (j = 0; j < blokken[3].values.length; j++) {
								if (!blokken[3].values[j]) {
									blokken[3].values[j] = inputs[i].value;
									break;
								}
							}
							break;
						case "op": // openvraag
							for (j = 0; j < blokken[4].values.length; j++) {
								if (!blokken[4].values[j]) {
									blokken[4].values[j] = inputs[i].value;
									break;
								}
							}
							break;
						case "sl": // sleepvraag
							for (j = 0; j < blokken[5].values.length; j++) {
								if (!blokken[5].values[j]) {
									blokken[5].values[j] = inputs[i].value;
									break;
								}
							}
							break;
						case "te": // tekst
							blokken[6].value = inputs[i].value;
							break;
						case "vi": // video
							blokken[7].value = inputs[i].value;
							break;
					}
				}
				
				//GET VALUES FROM OBJECTS
				//for (i = 0; i < blokken.length; i++) {
				//	if (blokken[i] !== null) {
				//		if (blokken[i].value !== "undefined") {
				//			write[writeSpace] = blokken[i].value;
				//			writeSpace++;
				//		} else {
				//			for (j = 0; j < blokken[i].values.length; j++) {
				//				write[writeSpace] = blokken[i].values[j];
				//				writeSpace++;
				//			}
				//		}
				//	} else {
				//		writeSpace += inputAmounts[i];
				//	}
				//}
				
				var actiefBlok = 0, actiefVeld = 0;
				
				for (i = 0; i < write.length; i++) {
					console.log("Array-write location: " + i + " / 41, Object-read location: " + actiefBlok + ", " + actiefVeld);
					
					if (!!blokken[actiefBlok]) {
						if (!!blokken[actiefBlok].value) {
							write[i] = blokken[actiefBlok].value;
						} else if (!!blokken[actiefBlok].values[actiefVeld]) {
							write[i] = blokken[actiefBlok].values[actiefVeld];
						}
					}
					
					console.log("Written value: " + write[i]);
					
					actiefVeld++;
					if (actiefVeld > (inputAmounts[actiefBlok] - 1)) {
						actiefBlok++;
						actiefVeld = 0;
					}
				}
				
				var lengthActual = 0;
				for(i = 0; i < write.length; i++) {
					if (!!write[i]) {
						lengthActual++;
					}
				}
				
				document.getElementById('updateOutput').innerHTML = "Geupdate values: " + lengthActual;
				document.getElementById('uniek').value = write.join();
			}
		</script>
		
		<div id="content" style="width:600px;"><br/>
			<form action="action_page.php" method="POST">
				<input id="uniek" type="hidden" name="name" value="">
				Eerst
				<button class="button" type="button" onClick="readyInput()">Update</button>, dan
				<input class="button" type="submit" name="bundelOpslaan" value="Verzenden" /> A.U.B.
			</form>
		</div>
	</body>
</html>
