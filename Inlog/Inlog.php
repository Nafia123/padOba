<?php

try {
$db = new PDO('mysql:host=localhost;dbname=inlog', 'root', 'Rattenratten0.');
} catch (PDOexception $e) {
	echo $e->getMessage()."<br>";
	die();
}

$sql = 'SELECT iduser from user';
foreach( $db->query($sql)as $row) {
	echo $row['iduser']."<br>";
}
$db = null;

?>


<!DOCTYPE html>
<html>

<link href="style.css" rel="stylesheet" type="text/css"/>
<title>PhP en MySQL</title>

<head>
<h1>OBA login</h1>
</head>


<body>
	<form method="post" action="inlog.php" >
		<input type="text" name="task" >
		<button type="submit" name ="submit" id="add_btn">Log in</button>
	</form>
</body>

</html>

