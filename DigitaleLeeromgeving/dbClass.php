<?php
if (session_status() == PHP_SESSION_NONE) {
session_start();
}









function admin(){

include 'dbInfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

$pasNr = $_SESSION['pasNummer'];

$sql= "SELECT * FROM oba2.gebruiker where pasNr ='$pasNr';";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$admin = $row["admin"];

echo $admin;

}














function cssHTML(){
	echo "
	<html>

	<style id='mystyle'>
	</style> 

	<script src='css/styles.js'></script>
	<script src='css/cssVariable.js'></script>

	<script>

	function cssKlik(nummer){
		if (nummer === 0){
			var e = document.getElementById('mystyle');
			e.innerHTML = styleDefault;
			var number = 0;
			localStorage.setItem('LScurrentUserCss', number);

		} else if(nummer === 7){
			var e = document.getElementById('mystyle');
			e.innerHTML = styleRainbow;
			var number = 7;
			localStorage.setItem('LScurrentUserCss', number);

		} else if(nummer === 1){
			var e = document.getElementById('mystyle');
			e.innerHTML = styleBlauw;
			var number = 1;
			localStorage.setItem('LScurrentUserCss', number);

		} else if(nummer === 2){
			var e = document.getElementById('mystyle');
			e.innerHTML = styleRood;
			var number = 2;
			localStorage.setItem('LScurrentUserCss', number);

		} else if(nummer === 3){
			var e = document.getElementById('mystyle');
			e.innerHTML = styleGeel;
			var number = 3;
			localStorage.setItem('LScurrentUserCss', number);

		} else if(nummer === 4){
			var e = document.getElementById('mystyle');
			e.innerHTML = styleGroen;
			var number = 4;
			localStorage.setItem('LScurrentUserCss', number);

		} else if(nummer === 5){
			var e = document.getElementById('mystyle');
			e.innerHTML = styleRoze;
			var number = 5;
			localStorage.setItem('LScurrentUserCss', number);

		} else if(nummer === 6){
			var e = document.getElementById('mystyle');
			e.innerHTML = stylePaars;
			var number = 6;
			localStorage.setItem('LScurrentUserCss', number);

		}

	}
	</script>

	<div >
	<a href='/DigitaleLeeromgeving/hoofdmenu.php'>
	<img align='left' height='140' width='200' style='margin-left:20px;' src='css/Images/obaLogoJunior.png' >
	</a>
	<form method=post name='cssForm' type='radio' id='cssForm'>
	<div align=center style='position:relative; border-radius:50px; width:400px;' id='content'>
	<p style='margin-bottom: 10px; margin-top: 1px;'><b>Thema:</b></p>
	<input hidden id='cssRadio0' type='radio' name='css' value='0' onclick='cssKlik(0); ' > <!-- Default -->
		<label for='cssRadio0'> <img height='30px' width='30px' hspace='5px' style='border-radius:25%; cursor: pointer; border:2px solid #2c3e50;' src='css/Images/achtergrondDEFAULT.gif'> </label>
	<input hidden id='cssRadio7' type='radio' name='css' value='7' onclick='cssKlik(7); ' > <!-- Regenboog -->
		<label for='cssRadio7'> <img height='30px' width='30px' hspace='5px' style='border-radius:25%; cursor: pointer; border:2px solid #2c3e50;' src='css/Images/rainbow.jpg'> </label>
	<input hidden id='cssRadio1' type='radio' name='css' value='1' onchange='cssKlik(1); ' > <!-- Blauw -->
		<label for='cssRadio1'> <img height='30px' width='30px' hspace='5px' style='border-radius:25%; cursor: pointer; border:2px solid #2c3e50;' src='css/Images/blauw.png'> </label>
	<input hidden id='cssRadio2' type='radio' name='css' value='2' onchange='cssKlik(2); ' > <!-- Rood -->
		<label for='cssRadio2'> <img height='30px' width='30px' hspace='5px' style='border-radius:25%; cursor: pointer; border:2px solid #2c3e50;' src='css/Images/rood.png'> </label>
	<input hidden id='cssRadio3' type='radio' name='css' value='3' onchange='cssKlik(3); ' > <!-- Geel -->
		<label for='cssRadio3'> <img height='30px' width='30px' hspace='5px' style='border-radius:25%; cursor: pointer; border:2px solid #2c3e50;' src='css/Images/geel.png'> </label>
	<input hidden id='cssRadio4' type='radio' name='css' value='4' onchange='cssKlik(4); ' > <!-- Groen -->
		<label for='cssRadio4'> <img height='30px' width='30px' hspace='5px' style='border-radius:25%; cursor: pointer; border:2px solid #2c3e50;' src='css/Images/groen.png'> </label>
	<input hidden id='cssRadio5' type='radio' name='css' value='5' onchange='cssKlik(5); ' > <!-- Roze -->
		<label for='cssRadio5'> <img height='30px' width='30px' hspace='5px' style='border-radius:25%; cursor: pointer; border:2px solid #2c3e50;' src='css/Images/roze.png'> </label>
	<input hidden id='cssRadio6' type='radio' name='css' value='6' onchange='cssKlik(6); ' > <!-- Paars -->
		<label for='cssRadio6'> <img height='30px' width='30px' hspace='5px' style='border-radius:25%; cursor: pointer; border:2px solid #2c3e50;' src='css/Images/paars.png'> </label>
	</div>
	</form>

	<script>
	cssKlik(Number(currentUserCss));
	</script>
";
}








function cssHTMLinlog(){
	echo "
	<html>

	<style id='mystyle'>
	</style> 

	<script src='css/styles.js'></script>

	<script>
	function cssKlik(nummer){
		if (nummer === 0){
			var e = document.getElementById('mystyle');
			e.innerHTML = styleDefault;		
			}
		}

	cssKlik(0);
	</script>
";
}


















































function bundelOpslaan($variabelenArray){

include 'dbInfo.php';

//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

//Maak prepared stmnt
$stmt = $conn->prepare("INSERT INTO bundel 
(titel, inleiding, afbeelding, afbeeldingWidth, afbeeldingHeight, mcVraag, mcAntwoord1, mcAntwoord2, mcAntwoord3, mcAntwoord4, mcAntwoordJuist, openvraagVraag, openvraagAntwoord, openvraagSoort, sleepvraagVraag1, sleepvraagAntwoord1, sleepvraagVraag2, sleepvraagAntwoord2, sleepvraagVraag3, sleepvraagAntwoord3, sleepvraagVraag4, sleepvraagAntwoord4, sleepvraagVraag5, sleepvraagAntwoord5, sleepvraagVraag6, sleepvraagAntwoord6, sleepvraagVraag7, sleepvraagAntwoord7, sleepvraagVraag8, sleepvraagAntwoord8, tekst, video, videoSize)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

//Bind param met waardes uit Array uit array argument '$variabelenArray'
$stmt->bind_param('sssiissssssssissssssssssssssssssi', $variabelenArray[0], $variabelenArray[1], $variabelenArray[2], $variabelenArray[3], $variabelenArray[4], $variabelenArray[5], $variabelenArray[6], $variabelenArray[7], $variabelenArray[8], $variabelenArray[9], $variabelenArray[10], $variabelenArray[11], $variabelenArray[12], $variabelenArray[13], $variabelenArray[14], $variabelenArray[15], $variabelenArray[16], $variabelenArray[17], $variabelenArray[18], $variabelenArray[19], $variabelenArray[20], $variabelenArray[21], $variabelenArray[22], $variabelenArray[23], $variabelenArray[24], $variabelenArray[25], $variabelenArray[26], $variabelenArray[27], $variabelenArray[28], $variabelenArray[29], $variabelenArray[30], $variabelenArray[31], $variabelenArray[32]);
$stmt->execute();

$result = $conn->query("SELECT MAX(bundelID) FROM oba2.bundel;");
$row = mysqli_fetch_assoc($result);
$maxBundelID = $row['MAX(bundelID)'];
$_SESSION["maxBundelID"] = $maxBundelID;

//sluit db
$stmt->close();
$conn->close();

}







function bundelUpdaten($variabelenArray, $bundelID){

include 'dbInfo.php';

//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

//Maak prepared stmnt
$stmt = $conn->prepare("UPDATE bundel 
set titel = ?, inleiding = ?, afbeelding = ?, afbeeldingWidth = ?, afbeeldingHeight = ?, mcVraag = ?, mcAntwoord1 = ?, mcAntwoord2 = ?, mcAntwoord3 = ?, mcAntwoord4 = ?, mcAntwoordJuist = ?, openvraagVraag = ?, openvraagAntwoord = ?, openvraagSoort = ?, sleepvraagVraag1 = ?, sleepvraagAntwoord1 = ?, sleepvraagVraag2 = ?, sleepvraagAntwoord2 = ?, sleepvraagVraag3 = ?, sleepvraagAntwoord3 = ?, sleepvraagVraag4 = ?, sleepvraagAntwoord4 = ?, sleepvraagVraag5 = ?, sleepvraagAntwoord5 = ?, sleepvraagVraag6 = ?, sleepvraagAntwoord6 = ?, sleepvraagVraag7 = ?, sleepvraagAntwoord7 = ?, sleepvraagVraag8 = ?, sleepvraagAntwoord8 = ?, tekst = ?, video = ?, videoSize = ?
where bundelID = ?");

//Bind param met waardes uit Array uit array argument '$variabelenArray'
$stmt->bind_param('sssiissssssssissssssssssssssssssii', $variabelenArray[0], $variabelenArray[1], $variabelenArray[2], $variabelenArray[3], $variabelenArray[4], $variabelenArray[5], $variabelenArray[6], $variabelenArray[7], $variabelenArray[8], $variabelenArray[9], $variabelenArray[10], $variabelenArray[11], $variabelenArray[12], $variabelenArray[13], $variabelenArray[14], $variabelenArray[15], $variabelenArray[16], $variabelenArray[17], $variabelenArray[18], $variabelenArray[19], $variabelenArray[20], $variabelenArray[21], $variabelenArray[22], $variabelenArray[23], $variabelenArray[24], $variabelenArray[25], $variabelenArray[26], $variabelenArray[27], $variabelenArray[28], $variabelenArray[29], $variabelenArray[30], $variabelenArray[31], $variabelenArray[32], $bundelID);
$stmt->execute();

// $result = $conn->query("SELECT MAX(bundelID) FROM oba2.bundel;");
// $row = mysqli_fetch_assoc($result);
// $maxBundelID = $row['MAX(bundelID)'];
// $_SESSION["maxBundelID"] = $maxBundelID;

//sluit db
$stmt->close();
$conn->close();

}













function memoryOpslaan($variabelenArray){

include 'dbInfo.php';

//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

//Maak prepared stmnt
$stmt = $conn->prepare("INSERT INTO memorygame 
(titel, memoryObj1, memoryObj2, memoryObj3, memoryObj4, memoryObj5, memoryObj6, memoryObj7, memoryObj8, memoryObj9, memoryObj10)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )");

//Bind param met waardes uit Array uit array argument '$variabelenArray'
$stmt->bind_param('sssssssssss', $variabelenArray[0], $variabelenArray[1], $variabelenArray[2], $variabelenArray[3], $variabelenArray[4], $variabelenArray[5], 
	$variabelenArray[6], $variabelenArray[7], $variabelenArray[8], $variabelenArray[9], $variabelenArray[10]);
$stmt->execute();

//sluit db
$stmt->close();
$conn->close();

}










if (isset($_POST["bundelEditten"])) {
	$bundelID = $_SESSION['bundelID'];
	echo "edit.php";
} 



function bundelVerwijderen($bundelID){
include 'dbInfo.php';

//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}
$sql = "DELETE FROM bundel WHERE bundelID = '$bundelID'";
$conn->query($sql);
header('Location: tabelOpdracht.php');
$conn->close();



}











function memoryVerwijderen($memoryGameId){
include 'dbInfo.php';

//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}
$sql = "DELETE FROM memorygame WHERE memoryGameId = '$memoryGameId'";
$conn->query($sql);
header('Location: tabelGames.php');
$conn->close();



}








//logout query
if (isset($_POST["Uitloggen"])) {
	uitloggen();
}

function uitloggen(){
	session_destroy();
	header('Location: inlog.php');
}










//login query
if (isset($_POST["Inloggen"])) {
	inloggen();
}

function inloggen(){

include 'dbInfo.php';

//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

//Haal info op uit inlog.php
$nummer = $_POST['Pasnummer'];

// maak prepared statement, bind param met $nummer, voer query uit, sla op in $stmt
$sql= "SELECT voornaam, admin FROM gebruiker WHERE pasNr = $nummer";
$stmt = $conn->prepare("SELECT voornaam FROM gebruiker WHERE pasNr = ?");
$stmt->bind_param('i', $nummer);
$stmt->execute();
$stmt->store_result();
$result = $conn->query($sql);
while($row = mysqli_fetch_assoc($result)){
	$voornaam = $row['voornaam'];
	$admin = $row['admin'];
}

//Als er 1 row in $stmt is opgehaald uit db, laad hoofdmenu.php, anders nietgelukt.php
	if ($stmt->num_rows == 1) {
 		$_SESSION["naam"] = $voornaam; 
 		$_SESSION["pasNummer"] = $nummer;

 		if ($admin == 0){
	   	header("Location: hoofdmenu.php");	
		} else if ($admin == 1){
		header("Location: inlogAdmin.php");
		}
	} else {
		echo '<script type="text/javascript"> alert("U heeft een onjuiste gebruikersnaam ingevoerd.");  </script>';
		?>
		<script> setTimeout(function(){window.location.href='inlog.php'},0); </script> 
		<?php
	}   

//sluit db
$stmt->close();
$conn->close();

}










//loginAdmin query
if (isset($_POST["InloggenAdmin"])) {
	inloggenAdmin();
}

function inloggenAdmin(){
include 'dbInfo.php';

//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

//Kijkt wie probeert in te loggen
$pasNummer= $_SESSION["pasNummer"];

// Haal wachtwoord van gebruiker op uit db
$sql = "SELECT wachtwoord FROM gebruiker WHERE pasNr = $pasNummer";
$result = $conn->query($sql);
while($row = mysqli_fetch_assoc($result)){
	$dbWachtwoord = $row['wachtwoord'];
}

//Haal wachtwoord input op uit inlogAdmin.php
$inputWachtwoord = $_POST['Wachtwoord'];

//check of input wachtwoord en db wachtwoord hetzelfde zijn
if ($dbWachtwoord === $inputWachtwoord) {
	header("Location: hoofdmenu.php");
} else {
	echo '<script type="text/javascript"> alert("U heeft een onjuist wachtwoord ingevoerd. Probeer het opnieuw.");  </script>';
	?>
	<script> setTimeout(function(){window.location.href='inlogAdmin.php'},0); </script> 
	<?php
}

//sluit db
$conn->close();

}




































//Nieuwe pagina opslaan query
if (isset($_POST["Opslaan"])) {
	if ($_POST["artikel"])
	{
		maakNieuwArtikel();
	}
	if ($_POST["opdracht"])
	{
		maakNieuwePagina();
	}
}

function maakNieuwArtikel(){
	include 'dbInfo.php';


//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

// Haal inputvelden op uit maakNieuwePagina.php als !empty
if (!empty($_POST["titel"])){
$titel = $_POST["titel"];
}
if (!empty($_POST["info"])) {
$info = $_POST["info"];
}

// Maak prepared statement, bind deze met 2x String, en voer uit
$sql = $conn->prepare("INSERT INTO artikel (artikel_titel, info) VALUES (?, ?)");
$sql->bind_param('ss', $titel, $info);

//Als insert gelukt is: laad hoofdmenu.php, als niet gelukt: print error
if ($sql->execute() === TRUE) {
    header("Location: hoofdmenu.php");
} else {
    echo "Error: " . "<br>" . $conn->error;
}

//sluit db
$sql->close();
$conn->close();

}




















function maakNieuwePagina(){
	include 'dbInfo.php';


//Maak connectie met db, print error als mislukt
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

// Haal inputvelden op uit maakNieuwePagina.php als !empty
if (!empty($_POST["titel"])){
$titel = $_POST["titel"];
}
if (!empty($_POST["info"])) {
$info = $_POST["info"];
}
if (!empty($_POST["vraag"])) {
$vraag = $_POST["vraag"];
}
if (!empty($_POST["antwoordA"])) {
$antwoordA = $_POST["antwoordA"];
}
if (!empty($_POST["antwoordB"])) {
$antwoordB = $_POST["antwoordB"];
}
if (!empty($_POST["antwoordC"])) {
$antwoordC = $_POST["antwoordC"];
}
if (!empty($_POST["antwoordD"])) {
$antwoordD = $_POST["antwoordD"];
}
if (!empty($_POST["mcJuist"])) {
$mcJuist = $_POST["mcJuist"];
}

// Maak prepared statement, bind deze met 8x String, en voer uit
$sql = $conn->prepare("INSERT INTO pagina (pagina_titel, info, vraag, mc_1, mc_2, mc_3, mc_4, mc_antwoord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$sql->bind_param('ssssssss', $titel, $info, $vraag, $antwoordA, $antwoordB, $antwoordC, $antwoordD, $mcJuist);

//Als insert gelukt is: laad maakNieuwePaginaGelukt.php, als niet gelukt: print error
if ($sql->execute() === TRUE) {
    header("Location: hoofdmenu.php");
} else {
    echo "Error: " . "<br>" . $conn->error;
}

//sluit db
$sql->close();
$conn->close();

}






















?>






















































































































































































































<!-- OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD OUD -->
<?php
//css query
if (isset($_POST["css"])) {
	$cssNummer = $_POST['css'];
	$pasNummer = $_SESSION['pasNummer'];
	updateCSS($cssNummer, $pasNummer);
}


function updateCSS($cssNummer, $pasNr){


	include 'dbInfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

$sql = "UPDATE oba2.gebruiker SET thema='$cssNummer' WHERE pasNr='$pasNr';";

$conn->query($sql);
//sluit db
$conn->close();

}






//Kijkt welke css geladen moet worden
function css($pasNr){

include 'dbInfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
	die("Connectie gefaald: " . $conn->connect_error);
}

$sql= "SELECT thema FROM oba2.gebruiker where pasNr ='$pasNr';";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$thema = $row["thema"];
	
if ($thema == 0) {

	//echo "<script>var style1=" + readfile("THEMAdefault.css") + ";</script>";

echo 
"<style id='style0'></style> <script src='css/THEMAdefault.js'></script>";
}

else if ($thema == 1) {
echo 
"<link href='css/THEMAblauw.css' rel='stylesheet' type='text/css'/>";
}

else if ($thema == 2) {
echo 
"<link href='css/THEMArood.css' rel='stylesheet' type='text/css'/>";
}

else if ($thema == 3) {
echo 
"<link href='css/THEMAgeel.css' rel='stylesheet' type='text/css'/>";
}

else if ($thema == 4) {
echo 
"<link href='css/THEMAgroen.css' rel='stylesheet' type='text/css'/>";
}

else if ($thema == 5) {
echo 
"<link href='css/THEMAroze.css' rel='stylesheet' type='text/css'/>";
}

else if ($thema == 6) {
echo 
"<html>
<link href='css/THEMApaars.css' rel='stylesheet' type='text/css'/>";
}

else if ($thema == 7) {
echo 
"<link href='css/THEMAvoetbal.css' rel='stylesheet' type='text/css'/>";
}

else if ($thema == 8) {
echo 
"<link href='css/THEMAprinses.css' rel='stylesheet' type='text/css'/>";
}

else if ($thema == 9) {
echo 
"<link href='css/THEMAheuvel.css' rel='stylesheet' type='text/css'/>";
}

//sluit db
$conn->close();
}













?>