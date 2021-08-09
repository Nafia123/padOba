<?php 
include "dbInfo.php";
@session_start();

// if (session_status() == PHP_SESSION_NONE) {
// session_start();
// }


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn-> connect_error){
    die("Connectie gefaald: " . $conn->connect_error);
}
    
    $i = $_SESSION['bundelID'];
    $sql = "SELECT * FROM oba2.bundel WHERE bundelID = $i";
    $result = $conn->query($sql);
    $sqlResult = "SELECT * FROM oba2.bundel";
    $resultRow = $conn->query($sqlResult);
    $_SESSION['num_row'] = mysqli_num_rows($resultRow);

    while($row = mysqli_fetch_assoc($result)){
    
    $bundelID = $row['bundelID'];
    $bundelTitel = $row['titel'];
    $inleiding = $row['inleiding'];
    $bundelAfbeelding = $row['afbeelding'];
    $widthAfbld = $row['afbeeldingWidth'];
    $heightAfbld = $row['afbeeldingHeight'];

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
    $videoSize = $row['videoSize'];
    

    $vraag1 = $row['sleepvraagVraag1'];
    $vraag2 = $row['sleepvraagVraag2'];
    $vraag3 = $row['sleepvraagVraag3'];
    $vraag4 = $row['sleepvraagVraag4'];
    $vraag5 = $row['sleepvraagVraag5'];
    $vraag6 = $row['sleepvraagVraag6'];
    $vraag7 = $row['sleepvraagVraag7'];
    $vraag8 = $row['sleepvraagVraag8'];

    $antwoord1 = $row['sleepvraagAntwoord1'];
    $antwoord2 = $row['sleepvraagAntwoord2'];
    $antwoord3 = $row['sleepvraagAntwoord3'];
    $antwoord4 = $row['sleepvraagAntwoord4'];
    $antwoord5 = $row['sleepvraagAntwoord5'];
    $antwoord6 = $row['sleepvraagAntwoord6'];
    $antwoord7 = $row['sleepvraagAntwoord7'];
    $antwoord8 = $row['sleepvraagAntwoord8'];
     }





?>