<?php  
include 'dbClass.php';
cssHTMLinlog();
?>

<br><br>
<div align="center">
	<img src="css/Images/obaLogoJunior.png" height="330" width="480" >
</div>

<br>
<div align="center">
	<form class="text" action="dbClass.php" name="Inloggen" method="post">
			<font size="5"> Pasnummer:</font><br><br>	
			<input type="number" min="1" name="Pasnummer" autocomplete="off" style="width: 20em; height: 2em;" required autofocus><br><br>
 			<input class="button" type="submit" name="Inloggen" value="Inloggen" style="width: 100px; height: 50px;">
	</form>
</div>

</html>



