<?php  
include 'dbClass.php';
include 'dbInfo.php';
include 'mascotte.php';
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
cssHTML();
?>

<script>
    function verwijderen(value) {
        var zekerWetenCheck = "\n\n\nWeet u zeker dat u deze opdracht wilt verwijderen?\nDit kan later niet meer worden teruggedraaid.\n\nDruk 'OK' om te verwijderen";
        var isVerwijderd = "\n\n\n\nOpdracht is verwijderd.\n\n";
            if (confirm(zekerWetenCheck)){
                alert(isVerwijderd);
                document.getElementById("verwijderen"+value).submit();
                }
        }

    function adminCheck(number){
        var admin = <?php admin(); ?>;
            //Als gebruiker GEEN admin is
            if (admin === 0) {
            document.getElementById("adminTD"+number).hidden = true;
            document.getElementById("adminTH").hidden = true;


            //Als gebruiker WEL admin is
            } else if (admin === 1) {
            document.getElementById("adminTD"+number).hidden = false;
            document.getElementById("adminTH").hidden = false;
            }
        }

</script>

<div style="position:absolute; margin-top:-100px;margin-left:91.5%;">
    <a href="/DigitaleLeeromgeving/hoofdmenu.php">
        <button class="button"><span><- Terug naar hoofdmenu</span></button>
    </a>
</div>



    <br><br><br><br><br>
    <h2>
    <section>

            <table class="opdracht" align=center style="margin-left:39%;">
                <tr>
                    <th>Memoryspellen</th>
                    <th id='adminTH' style='width:20px;'></th>
                </tr>

                <?php
                $conn = new mysqli($servername, $username, $password, $dbname);
                if ($conn-> connect_error){
                   die("Connectie gefaald: " . $conn->connect_error);
               }

               $sql = "SELECT * FROM oba2.memorygame";
               $result = $conn->query($sql);

               echo "<tbody";
               while($rows = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td><a href='memoryGame.php?id=" .$rows['memoryGameId'] . "' class ='aa'> " .$rows['titel']. "</a></td>";
                    echo "<td id='adminTD" .$rows['memoryGameId'] . "'>



                            <form action='verwijderMemoryTussenPagina.php' id='verwijderen". $rows['memoryGameId'] ."' method='post' style=''>
                                <button type='button' onClick='verwijderen(".$rows['memoryGameId'].")' style='background: url(css/Images/prullenbak.png) no-repeat; background-size: 35px 35px; width:41px; height:41px; border-radius:25%; cursor: pointer; border:2px solid #2c3e50; margin-left:10px;'></button>
                                <input type='hidden' name='memoryIDverwijderen' value='" .$rows['memoryGameId'] . "'> 
                            </form></td>
                        <script> adminCheck(".$rows['memoryGameId'].");</script>
                            "; 

                    echo "</tr>";
            }
            echo "</tr>"
            ?>
        </h2>

    </div>

    </html>