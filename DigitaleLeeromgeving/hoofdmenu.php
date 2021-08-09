<?php  
include 'dbClass.php';
include 'mascotte.php';
if (session_status() == PHP_SESSION_NONE) {
session_start();
}
cssHTML();
?>

<div style="position:absolute; margin-top:-100px;margin-left:91.5%;">
	<a href="/DigitaleLeeromgeving/inlog.php">
		<button class="button" onclick="localStorage.setItem('LScurrentUserCss', 0);"><span>Uitloggen</span></button>
	</a>
</div>

<br><br>

<p id='leerlingBr'>
<br><br><br>
<p>

<div align=center id="leerling">
	<a href="tabelOpdracht.php">
	<button style="height:200px;width:200px;font-size:30px;border-radius:55px; margin-right:60px;" class="button">
		<span>Leren</span>
	</button></a>

	<a href="tabelGames.php">
	<button style="height:200px;width:200px;font-size:30px;border-radius:55px;" class="button">
		<span>Spelen</span>
	</button></a>
</div>

<div align=center id="adminBekijken">
		<a href="tabelOpdracht.php">
	<button style="height:200px;width:200px;font-size:20px;border-radius:55px; margin-bottom:40px; margin-right:40px;" class="button">
		<span>Overzicht opdrachten</span>
	</button></a>

	<a href="tabelGames.php">
	<button style="height:200px;width:200px;font-size:20px;border-radius:55px;" class="button">
		<span>Overzicht memoryspellen</span>
	</button></a>
</div>

<div align=center id="adminToevoegen">
	<a href='maakNieuwePagina.php'>
	<button style="height:200px;width:200px;font-size:20px;border-radius:55px; margin-right:40px;" class="button">
	<span>Opdracht toevoegen</span>
	</button></a>

	<a href='maakNieuwSpel.php'>
	<button style="height:200px;width:200px;font-size:20px;border-radius:55px;" class="button">
	<span>Memoryspel toevoegen</span>
	</button></a>
</div>

<script>
	function adminCheck(){
		var admin = <?php admin(); ?>;
		//Als gebruiker GEEN admin is
		if (admin === 0) {
		document.getElementById("leerling").hidden = false;
		document.getElementById("leerlingBr").hidden = false;
		document.getElementById("adminBekijken").hidden = true;
		document.getElementById("adminToevoegen").hidden = true;
		//Als gebruiker WEL admin is
		} else if (admin === 1) {
		document.getElementById("leerling").hidden = true;
		document.getElementById("leerlingBr").hidden = true;
		document.getElementById("adminBekijken").hidden = false;
		document.getElementById("adminToevoegen").hidden = false;
		}
	}
	adminCheck();

</script>
</html>