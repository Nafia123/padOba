<?php  
include 'dbClass.php';
cssHTMLinlog();
?>


<div align="center">
	<img src="css/Images/obaLogoJunior.png" height="330" width="480" >
</div>

<br>
<div align="center">
	<form class="text" action="dbClass.php" name="InloggenAdmin" method="post">
			<font size="6"> Welkom Admin!</font><br><br>
			<font size="5"> Wachtwoord:</font><br><br>
			<input type="password" min="1" name="Wachtwoord" autocomplete="off" style="width: 20em; height: 2em;" required autofocus><br><br>
 			<input class="button" type="submit" name="InloggenAdmin" value="Inloggen" style="width: 100px; height: 50px;">
	</form>
			<a href="/DigitaleLeeromgeving/inlog.php">
			<button class="button" style="width: 100px; height: 50px;"><- Terug</button>
			</a>
</div>

</html>