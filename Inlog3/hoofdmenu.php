<?php

$servername = "localhost:3306";
$username = "root";
$password = "Rattenratten0.";
$dbname = "inlog";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

$nummer = $_POST['Pasnummer'];

$sql = "SELECT iduser FROM user WHERE iduser = $nummer";

$result = $conn->query($sql);

if (mysqli_num_rows($result) > 0) {
	//output data of each row
	while($row = mysqli_fetch_assoc($result)){
		$dbnummer = $row["iduser"];
	}
}

if ($nummer == $dbnummer){
	header("Location: hoofdmenu.php");
	$nummer;
	$dbnummer;
} else {
	header("Location: Nietgelukt.php");
}	


?>
<html>

<head></head>
<body>
	
	<form name="inlog" action="hoofdmenu.php" method="post">
	
		Pasnummer:<br>
		<input type="text" name="Pasnummer"><br>
		<input type="submit" value="Submit">
	

	</form>
	
</body>

</html>