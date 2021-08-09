<?php
	include 'dbClass.php';
	
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	cssHTML();

	if (isset($_POST["name"])) {
		$_POST["name"] = str_replace("\n","<br/>",$_POST["name"],$i);
		$_POST["name"] = str_replace("'","`",$_POST["name"],$i);
		$_POST["name"] = str_replace("\"","`",$_POST["name"],$i);
		
		$output = explode(":!:!:", $_POST["name"]);
		bundelOpslaan($output);
	}
	?>
	
	<html>
	<div id='spacer' style='height:150px;'></div>
			<div id='content' style='width:350px;'>
				<p>Pagina succesvol aangemaakt.</p>
				<form align='center' name='terug' action='hoofdmenu.php'>
				<button class='button' style='width:200px;'><span>Terug naar hoofdmenu</span></button>
				</form>

				<br>Wilt u uw zojuist gemaakte opdracht bekijken?<br><br>
				<a href='showPagina.php?id=<?php echo $_SESSION["maxBundelID"];?>'>
				<button style="width:200px;" class="button"><span>Bekijken</span></button>
				</a>


	</div>
	</html>
?>
