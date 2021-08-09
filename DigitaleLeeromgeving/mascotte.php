<?php 
function mascotte() {

	$url = $_SERVER['REQUEST_URI'];
	$url2 = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

	// Hoofdmenu
	if ($url === "/DigitaleLeeromgeving/hoofdmenu.php"){
    	$text = "Hoi! Ik ben Milo!<br>Op deze pagina kun je kiezen om te gaan leren of om spelletjes te spelen!";
    }

    // Tabel Opdrachten
    if ($url === "/DigitaleLeeromgeving/tabelOpdracht.php"){
    	$text = "Op deze pagina kun je uit verschillende opdrachten kiezen om te maken!";
    }

    // Tabel Games
    if ($url === "/DigitaleLeeromgeving/tabelGames.php"){
    	$text = "Op deze pagina kun je uit verschillende memory spellen kiezen om te spelen!";
    }

    // Memory Game
    if (strpos($url2,'memory') !== false){
    	$text = "Draai twee kaarten om paren te maken!";
    }

echo $text;
}
?>

<!-- Mascotte -->
<div class="tooltip">
	<img src="css/Images/obaMascotte.png" height="200px" width="150px"/>
  <span class="tooltiptext"><?php mascotte(); ?></span>
</div>