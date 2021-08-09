<?php  
	include 'dbClass.php';
	if (session_status() == PHP_SESSION_NONE) {
	session_start();
	}
	cssHTML();
?>

<html>
	<div style="position:absolute; margin-top:-100px;margin-left:91.5%;">
		<a href="/DigitaleLeeromgeving/hoofdmenu.php">
			<button class="button"><span><- Terug naar hoofdmenu</span></button>
		</a>
	</div>
	<script src="http://www.w3schools.com/lib/w3data.js"></script>
	<script src="knoppen.js"></script>
	<script>
		const thumbstringstart = "https://i.ytimg.com/vi/";
		const thumbstringend = "/maxresdefault.jpg";
		
		var divContent = "";
		var knoppen = new Array(7);
		var imgloaded = false, lastpath, imgperc, imgwidth = 1, imgheight = 1, vidsize = 560;
		
		var i;
		for(i = 0; i < knoppen.length; i++) {
			knoppen[i] = true;
		}
		
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		
		function init() {
			voegToe(0);
		}
		
		function klik(num) {
			if (knoppen[num]) {
				voegToe(num);
			} else {
				verwijder(num);
			}
			knoppen[num] = !knoppen[num];
		}
		
		async function previewafb() {
			var viable = false;
			var check;
			if (document.getElementById('afbcheck').checked) {
				check = document.getElementById('afburl').value;
			} else {
				check = ("/DigitaleLeeromgeving/css/Images/" + document.getElementById('afbfile').innerHTML);
				console.log("Loading image: " + check);
				viable = true;
			}
			
			if (check !== lastpath) {
				if (!viable && check.startsWith("http")) {
					if (check.endsWith(".jpg") || check.includes(".jpg")) { viable = true; } else
					if (check.endsWith(".jpeg") || check.includes(".jpeg")) { viable = true; } else
					if (check.endsWith(".png") || check.includes(".png")) { viable = true; } else
					if (check.endsWith(".gif") || check.includes(".gif")) { viable = true; } else
					if (check.endsWith(".bmp") || check.includes(".bmp")) { viable = true; }
				}
				
				if (viable) {
					if (document.getElementById('blokPREVIEW').innerHTML.length > 1) {
						document.getElementById('blokPREVIEW').innerHTML = "";
						imgloaded = false;
						lastpath = "";
						await sleep(50);
						console.log("Preview blok cleared.");
					}
					
					lastpath = check;
					
					divContent = "<hr/><br/><div style='text-align:center;'><input id='imgsizeslider' type='range' min='10' max='200' value='100' onchange='console.log(value);' oninput='previewsize(this.value)'><br/><br/>" +
					"<img id='imgpreview' src='" + check + "'><br/></div><br/>";
					
					document.getElementById('blokPREVIEW').innerHTML = divContent;
					w3IncludeHTML();
					
					var runs = 0;
					do {
						await sleep(10);
						if (document.getElementById('imgpreview')) {
							imgloaded = isimageok(document.getElementById('imgpreview'));
						}
						runs++;
					} while (!imgloaded && runs >= 10);
					if (runs >= 10) {
						console.log("Loading took too long. Assumed finished.");
					} else {
						console.log("Image loaded succesfully after approx. " + (runs * 50) + "ms.");
					}
					
					imgwidth = document.getElementById('imgpreview').clientWidth;
					document.getElementById('imgpreview').style.width = imgwidth;
					
					imgheight = document.getElementById('imgpreview').clientHeight;
					document.getElementById('imgpreview').style.height = imgheight;
					
					var min = Math.ceil((980 / imgwidth) * 20);
					var max = Math.floor((980 / imgwidth) * 100);
					var value = ((min + max) / 2);
					document.getElementById('imgsizeslider').min = min;
					document.getElementById('imgsizeslider').max = max;
					document.getElementById('imgsizeslider').value = value;
					
					previewsize(value);
					
					console.log("Image-preview succesful.");
				} else {
					document.getElementById('blokPREVIEW').innerHTML = "";
					imgloaded = false;
					lastpath = "";
					console.log("Preview blok cleared.");
				}
			} else {
				console.log("Tried to load the same image again. Keeping preview as-is.");
			}
		}
		
		function isimageok(img) {
			if (!img.complete) {
				return false;
			}
			
			if (img.naturalWidth === 0) {
				return false;
			}
			
			return true;
		}
		
		function previewvid() {
			var viable = false;
			var check = document.getElementById("video").value;
			var i;
			
			if (check.startsWith("http")) {
				i = (check.indexOf("v=")) + 2;
				if (i > 0) { viable = true; }
			} else if (check.startsWith("<iframe")) {
				if (check.endsWith("</iframe>")) {
					i = (check.indexOf("embed")) + 6;
					if (i > 0) { viable = true; }
				}
			}
			
			if (viable) {
				var radios = document.getElementsByName("vidsize");
				
				for (j = 0; j < radios.length; j++) {
					if (radios[j].checked) {
						vidsize = radios[j].value;
					}
				}
				
				divContent = "<div style='text-align:center;'>" +
				"<img id='vidpreview' src='" + thumbstringstart + check.substring(i, (i+11)) +
				thumbstringend + "' style='width:" + vidsize + "px;'></div><br/>";
				
				document.getElementById('blokTHUMB').innerHTML = divContent;
				w3IncludeHTML();
			} else {
				document.getElementById('blokTHUMB').innerHTML = "";
			}
		}
		
		function previewsize(newVal) {
			imgperc = newVal;
			document.getElementById('imgpreview').style.width = imgwidth * (newVal * 0.01);
			document.getElementById('imgpreview').style.height = imgheight * (newVal * 0.01);
		}
		
		function videosize(newVal) {
			vidsize = parseInt(newVal);
			document.getElementById('vidpreview').style.width = vidsize;
			
			var divwidth = 725;
			if (vidsize > divwidth) {
				divwidth = vidsize;
				divwidth += 30;
			}
			document.getElementsByClassName('blok6')[0].style.width = divwidth;
		}
	</script>
	<body onload="init()">
		
		<div id="content" style="width:725px;">
			<button class="knop1" id="knopaan" type="button" onClick="klik(1)" style='cursor:pointer;'><span>Afbeelding</span></button>
			<button class="knop2" id="knopaan" type="button" onClick="klik(2)" style='cursor:pointer;'><span>Multiplechoice</span></button>
			<button class="knop3" id="knopaan" type="button" onClick="klik(3)" style='cursor:pointer;'><span>Open Vraag</span></button>
			<button class="knop4" id="knopaan" type="button" onClick="klik(4)" style='cursor:pointer;'><span>Sleepvraag</span></button>
			<button class="knop5" id="knopaan" type="button" onClick="klik(5)" style='cursor:pointer;'><span>Tekstveld</span></button>
			<button class="knop6" id="knopaan" type="button" onClick="klik(6)" style='cursor:pointer;'><span>Video</span></button>
		</div><br/>
		
		<div id="bundel">
			<div id="blok0"></div>
			<div id="blok1"></div>
			<div id="blok2"></div>
			<div id="blok3"></div>
			<div id="blok4"></div>
			<div id="blok5"></div>
			<div id="blok6"></div>
		</div>
		
		<script>
			function activeerBlok(num) {
				if (!(blokken[num]["active"])) {
					var width = blokken[num].width;
					var url = blokken[num].source;
					
					if (!width) {
						width = 725;
					}
					
					if (!!url) {
						divContent = "<div id='content' class='blok" + num + "' style='width:" + width + "px;' w3-include-html='Blok\\" + url + "'>" + num + "</div><br/>";
						
						var find = document.getElementsByClassName('knop' + num);
						for (i = 0; i < find.length; i++) {
							find[i].id = "knopuit";
						}
						document.getElementById('blok' + num).innerHTML = divContent;
						w3IncludeHTML();
						
						blokken[num]["active"] = true;
					}
				}
			}
			
			function dropBlok(num) {
				var find = document.getElementsByClassName('knop' + num);
				for (i = 0; i < find.length; i++) {
					find[i].id = "knopaan";
				}
				document.getElementById('blok' + num).innerHTML = null;
				if (num == 1) {
					//document.getElementById('blokPREVIEW').innerHTML = null;
					imgloaded = false;
					lastpath = "";
				}/*
				else if (num == 6) { document.getElementById('blokTHUMB').innerHTML = null; } */
				
				w3IncludeHTML();
			}
			
			function readyInput() {
				var write = new Array(33);
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
							console.log("Written value: " + blokken[0].values[0]);
							break;
						case "in": // inleiding
							blokken[0].values[1] = inputs[i].value;
							console.log("Written value: " + blokken[0].values[1]);
							break;
						case "af": // afbeelding
							if (!blokken[1].values[0]) {
								if (document.getElementById('afbcheck').checked) {
									if (inputs[i].name.endsWith("2")) {
										blokken[1].values[0] = inputs[i].value;
										console.log("Written value: " + blokken[1].values[0]);
										blokken[1].values[1] = (imgwidth * (imgperc * 0.01));
										console.log("Written value: " + blokken[1].values[1]);
										blokken[1].values[2] = (imgheight * (imgperc * 0.01));
										console.log("Written value: " + blokken[1].values[2]);
										break;
									}
								} else {
									if (inputs[i].name.endsWith("1")) {
										blokken[1].values[0] = inputs[i].value;
										console.log("Written value: " + blokken[1].values[0]);
										blokken[1].values[1] = (imgwidth * (imgperc * 0.01));
										console.log("Written value: " + blokken[1].values[1]);
										blokken[1].values[2] = (imgheight * (imgperc * 0.01));
										console.log("Written value: " + blokken[1].values[2]);
										break;
									}
								}
							}
							console.log("afbeelding - nothing was written");
							break;
						case "mc": // mc AKA multipleChoice
							for (j = 0; j < blokken[2].values.length; j++) {
								if (!blokken[2].values[j]) {
									blokken[2].values[j] = inputs[i].value;
									console.log("Written value: " + blokken[2].values[j]);
									break;
								}
							}
							break;
						case "op": // openvraag
							for (j = 0; j < blokken[3].values.length; j++) {
								if (!blokken[3].values[j]) {
									blokken[3].values[j] = inputs[i].value;
									
									if(!blokken[3].values[2]) {
										var radios = document.getElementsByClassName("openVraagSoort");
										for (k = 0; k < radios.length; k++) {
											if (radios[k].checked) {
												blokken[3].values[2] = radios[k].value;
												console.log("Written value: " + blokken[3].values[2]);
											}
										}
									}
									break;
								}
							}
							break;
						case "sl": // sleepvraag
							for (j = 0; j < blokken[4].values.length; j++) {
								if (!blokken[4].values[j]) {
									blokken[4].values[j] = inputs[i].value;
									break;
								}
							}
							break;
						case "te": // tekst
							blokken[5].value = inputs[i].value;
							break;
						case "vi": // video
							var watchpath = inputs[i].value;
							blokken[6].values[0] = watchpath.substring(watchpath.length - 11);
							
							var radios = document.getElementsByClassName("vidsize");
							for (k = 0; k < radios.length; k++) {
								if (radios[k].checked) {
									blokken[6].values[1] = radios[k].value;
									console.log("Written value: " + blokken[6].values[1]);
								}
							}
							break;
						default:
							console.log("UNHANDLED VALUE \"" + inputs[i].name + "\"");
							break;
					}
				}
				
				console.log("VALUES WRITTEN TO OBJECTS. PREPARING DATA FOR SUBMISSION.");
				
				var actiefBlok = 0, actiefVeld = 0;
				
				for (i = 0; i < write.length; i++) {
					console.log("Array-write location: " + i + " / " + write.length + ", Object-read location: " + actiefBlok + ", " + actiefVeld);
					
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
				
				//document.getElementById('updateOutput').innerHTML = "Geupdate values: " + lengthActual;
				document.getElementById('uniek').value = write.join(":!:!:");
				
				document.getElementById('toDB').submit();
			}
		</script>
		
		<br>
		<div id="content" style="width:300px; border-radius:50px;"><br/>
			<form id="toDB" action="action_pagina.php" method="POST">
				<input id="uniek" type="hidden" name="name" value="">
				<button class="button" type="button" onClick="readyInput()"><span>Opslaan</span></button>
			</form>
		</div>
	</body>
</html>
