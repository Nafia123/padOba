<?php  
include 'dbClass.php';
include 'mascotte.php';
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}

cssHTML();
?>

<html>
<body onload="gridSelect('12')";>
	<style>
	.gridMem {
		position: fixed;
		display: inline-block;
		top: 25%;
		right: 5%;
	}
</style>
<div style="position:absolute; margin-top:-100px;margin-left:91.5%;">
	<a href="/DigitaleLeeromgeving/hoofdmenu.php">
		<button class="button"><span><- Terug naar hoofdmenu</span></button>
	</a>
</div>

<div class="gridMem" id="content">
	Dit is hoe de memory Game er uit gaat zien:
	<br><br>
	<img id="gridImage" src="/DigitaleLeeromgeving/css/images/4X3.png" height="268">
</div>

<div id="content" style="width:600px;"><br/>
	Selecteer de de formaat voor de memoryspel:
	<br><br>
	<select name="grid" id="grid" onchange="gridSelect(this.value)">
		<option value="12">3X4</option>
		<option value="16">4X4</option>
		<option value="20">5X4</option>
	</select>
	<br><br>

	<form id="toDB" action="action_spel.php" method="POST" >
		Titel van memory game:<br/><br>
		<textarea type="text" name="titel" rows="1" cols="60" required></textarea><br/><br/>


		<p id="txt1"> Afbeelding 1:</p> 
		Voeg een link toe of upload een plaatje.<br><br>
		<textarea type="text" name="afb1" id="afb1" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files1" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb1').value = filename[position];
		"/>
		


		<p id="txt2"> Afbeelding 2:</p>
		<textarea type="text" name="afb2" id="afb2" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files2" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb2').value = filename[position];
		"/>
		


		<p id="txt3"> Afbeelding 3:</p>
		<textarea type="text" name="afb3" id="afb3" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files3" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb3').value = filename[position];
		"/>


		<p id="txt4"> Afbeelding 4:</p>
		<textarea type="text" name="afb4" id="afb4" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files4" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb4').value = filename[position];
		"/>


		<p id="txt5"> Afbeelding 5:</p>
		<textarea type="text" name="afb5" id="afb5" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files5" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb5').value = filename[position];
		"/>


		<p id="txt6"> Afbeelding 6:</p>
		<textarea type="text" name="afb6" id="afb6" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files6" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb6').value = filename[position];
		"/>


		<p id="txt7"> Afbeelding 7:</p>
		<textarea type="text" name="afb7" id="afb7" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files7" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb7').value = filename[position];
		"/>


		<p id="txt8"> Afbeelding 8:</p>
		<textarea type="text" name="afb8" id="afb8" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files8" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb8').value = filename[position];
		"/>


		<p id="txt9"> Afbeelding 9:</p>
		<textarea type="text" name="afb9" id="afb9" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files9" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb9').value = filename[position];
		"/>


		<p id="txt10"> Afbeelding 10:</p>
		<textarea type="text" name="afb10" id="afb10" rows="1" cols="60" required></textarea><br/><br/>


		<input type="file" id="files10" name="files[]" onchange="
		var filename = value.split('\\');
		var position = (filename.length - 1);
		document.getElementById('afb10').value = filename[position];
		"/> 
		<br><br>


		<button class="button" type="submit"><span>Opslaan</span></button>
	</form>
</div>
</body>


<script type="text/javascript">
	
	function gridSelect(selection) {
		if (selection == '12') {
			document.getElementById('afb7').disabled = true;
			document.getElementById('afb7').hidden = true;
			document.getElementById('txt7').hidden = true;
			document.getElementById('files7').hidden = true;

			document.getElementById('afb8').disabled = true;
			document.getElementById('afb8').hidden = true;
			document.getElementById('txt8').hidden = true;
			document.getElementById('files8').hidden = true;

			document.getElementById('afb9').disabled = true;
			document.getElementById('afb9').hidden = true;
			document.getElementById('txt9').hidden = true;
			document.getElementById('files9').hidden = true;

			document.getElementById('afb10').disabled = true;
			document.getElementById('afb10').hidden = true;
			document.getElementById('txt10').hidden = true;
			document.getElementById('files10').hidden = true;

			document.getElementById("gridImage").src = "/DigitaleLeeromgeving/css/images/4X3.png";

		}
		if (selection == '16') {
			document.getElementById('afb7').disabled = false;
			document.getElementById('afb7').hidden = false;
			document.getElementById('txt7').hidden = false;
			document.getElementById('files7').hidden = false;

			document.getElementById('afb8').disabled = false;
			document.getElementById('afb8').hidden = false;
			document.getElementById('txt8').hidden = false;
			document.getElementById('files8').hidden = false;

			document.getElementById('afb9').disabled = true;
			document.getElementById('afb9').hidden = true;
			document.getElementById('txt9').hidden = true;
			document.getElementById('files9').hidden = true;

			document.getElementById('afb10').disabled = true;
			document.getElementById('afb10').hidden = true;
			document.getElementById('txt10').hidden = true;
			document.getElementById('files10').hidden = true;

			document.getElementById("gridImage").src = "/DigitaleLeeromgeving/css/images/4X4.png";
		}
		if (selection == '20') {
			document.getElementById('afb7').disabled = false;
			document.getElementById('afb7').hidden = false;
			document.getElementById('txt7').hidden = false;
			document.getElementById('files7').hidden = false;

			document.getElementById('afb8').disabled = false;
			document.getElementById('afb8').hidden = false;
			document.getElementById('txt8').hidden = false;
			document.getElementById('files8').hidden = false;

			document.getElementById('afb9').disabled = false;
			document.getElementById('afb9').hidden = false;
			document.getElementById('txt9').hidden = false;
			document.getElementById('files9').hidden = false;

			document.getElementById('afb10').disabled = false;
			document.getElementById('afb10').hidden = false;
			document.getElementById('txt10').hidden = false;
			document.getElementById('files10').hidden = false;

			document.getElementById("gridImage").src = "/DigitaleLeeromgeving/css/images/4X5.png";

		}

	};
</script>
</html>
