<?php 
include "dbInfo.php";
@session_start();

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn-> connect_error){
    die("Connectie gefaald: " . $conn->connect_error);
}



if (isset($_POST["bundelIDeditten"])) {
    $bundelIDeditten = $_POST["bundelIDeditten"];

    
    $sql = "SELECT * FROM oba2.bundel WHERE bundelID = '$bundelIDeditten';";
    $result = $conn->query($sql);
    $sqlResult = "SELECT * FROM oba2.bundel";
    $resultRow = $conn->query($sqlResult);
    $_SESSION['num_row'] = mysqli_num_rows($resultRow);


    while ($row = mysqli_fetch_assoc($result)){
    
    $bundelID = $row['bundelID'];
    $bundelTitel = $row['titel'];
    $inleiding = $row['inleiding'];
    $bundelAfbeelding = $row['afbeelding'];
    $afbWidth = $row['afbeeldingWidth'];
    $afbHeight = $row['afbeeldingHeight'];

    $mcVraag = $row['mcVraag'];
    $mc_1 = $row['mcAntwoord1'];
    $mc_2 = $row['mcAntwoord2'];
    $mc_3 = $row['mcAntwoord3'];
    $mc_4 = $row['mcAntwoord4'];
    $mc_antwoord = $row['mcAntwoordJuist'];

    $openVraag = $row['openvraagVraag'];
    $openAntwoord = $row['openvraagAntwoord'];
    $openSoort = $row['openvraagSoort'];

    $tekst = $row['tekst'];
    $video = $row['video'];

    $SVvraag1 = $row['sleepvraagVraag1'];
    $SVvraag2 = $row['sleepvraagVraag2'];
    $SVvraag3 = $row['sleepvraagVraag3'];
    $SVvraag4 = $row['sleepvraagVraag4'];
    $SVvraag5 = $row['sleepvraagVraag5'];
    $SVvraag6 = $row['sleepvraagVraag6'];
    $SVvraag7 = $row['sleepvraagVraag7'];
    $SVvraag8 = $row['sleepvraagVraag8'];

    $SVantwoord1 = $row['sleepvraagAntwoord1'];
    $SVantwoord2 = $row['sleepvraagAntwoord2'];
    $SVantwoord3 = $row['sleepvraagAntwoord3'];
    $SVantwoord4 = $row['sleepvraagAntwoord4'];
    $SVantwoord5 = $row['sleepvraagAntwoord5'];
    $SVantwoord6 = $row['sleepvraagAntwoord6'];
    $SVantwoord7 = $row['sleepvraagAntwoord7'];
    $SVantwoord8 = $row['sleepvraagAntwoord8'];

    // header("Location: editPagina.php");
}
}



?>





