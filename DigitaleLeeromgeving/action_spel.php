<?php
	include 'dbClass.php';
	
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}
	cssHTML();
	// cssHTMLnoTheme();
	if($_POST["afb7"] = null){
		$afb7 = null;
	}else{
		$afb7 = $_POST["afb7"];
	}

	if($_POST["afb8"] = null){
		$afb8 = null;
	}else{
		$afb8 = $_POST["afb8"];
	}

	if($_POST["afb9"] = null){
		$afb9 = null;
	}else{
		$afb9 = $_POST["afb9"];
	}

	if($_POST["afb10"] = null){
		$afb10 = null;
	}else{
		$afb10 = $_POST["afb10"];
	}

	if (isset($_POST["titel"])) {
		$output = array($_POST["titel"],
						$_POST["afb1"],
						$_POST["afb2"],
						$_POST["afb3"],
						$_POST["afb4"],
						$_POST["afb5"],
						$_POST["afb6"],
						$afb7,
						$afb8,
						$afb9,
						$afb10);
		
		memoryOpslaan($output);
	}
	
	echo "	<div id='spacer' style='height:150px;'></div>
			<div id='content' style='width:350px;'>
				<p>Memory game succesvol aangemaakt.</p>
				<form align='center' name='terug' action='hoofdmenu.php'>
				<button class='button' style='width:200px;'><span>Terug naar het Hoofdmenu</span></button>
				</form>
			</div>";
?>
