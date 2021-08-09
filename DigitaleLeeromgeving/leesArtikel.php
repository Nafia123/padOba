<?php

include 'dbInfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn-> connect_error){
	die("Connection failed: " . $conn->connect_error);
}
?>
<html>
<body>
<div align="center">
<link href="tabel.css" rel="stylesheet" type="text/css" >

<h1>
	Artikel
</h1>



<br>
<h2>

	<?php
	$id = $_GET['id'];
	$sql = "SELECT * FROM artikel WHERE artikelNr = $id";
	$result = $conn ->query($sql);

	if (mysqli_num_rows($result) > 0) {
    
    while($row = mysqli_fetch_assoc($result)) {
        $artikelNr = $row['artikelNr'];
        $artikelTitel = $row['artikel_titel'];
 		$info = $row['info'];
 		$datum = $row['datum_gemaakt'];	
 		}
 		
    }
	?>
<p>
<?php
	echo $artikelTitel;
?>
</p>


</h2>
<fieldset>
<h3>
<?php
	echo $info;	
?>	
</h3>

</fieldset>



</div>
</body>
</html>









