<?php  
include 'dbClass.php';
include 'dbInfo.php';
include 'mascotte.php';
include 'variableDbEdit.php';

@session_start();

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
            document.getElementById("adminTD1"+number).hidden = true;
            document.getElementById("adminTD2"+number).hidden = true;
            document.getElementById("adminTH1").hidden = true;
            document.getElementById("adminTH2").hidden = true;


            //Als gebruiker WEL admin is
            } else if (admin === 1) {
            document.getElementById("adminTD1"+number).hidden = false;
            document.getElementById("adminTD2"+number).hidden = false;
            document.getElementById("adminTH1").hidden = false;
            document.getElementById("adminTH2").hidden = false;
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

        <table class="opdracht" align=center style="margin-left:37%;">
        

                            <th>Opdrachten</th>
                            <th id='adminTH1' style='width:85px;'></th>
                            <th id='adminTH2' style='width:85px;'></th>
                       
                        </tr>

                        <?php
                        $conn = new mysqli($servername, $username, $password, $dbname);
                            if ($conn-> connect_error){
                             die("Connectie gefaald: " . $conn->connect_error);
                    }

            $sql = "SELECT * FROM oba2.bundel";
            $result = $conn->query($sql);
        
                     


                        echo "<tbody";

                        while($rows = $result->fetch_assoc()) {
                            echo "<tr>";
                            echo "<td><a href='showPagina.php?id=" .$rows['bundelID'] . "' class ='aa'> " .$rows['titel']."</a></td>";

                            echo 

                            "

                            <td id='adminTD1" .$rows['bundelID'] . "'>
                                    <form action='editPagina.php' id='editten". $rows['bundelID'] ."' method='post' style='position:absolute; margin-top: -19px;'>
                                        <button type='button' onclick='this.form.submit();' style='background: url(css/Images/tandwiel.png) no-repeat; background-size: 37px 37px; width:41px; height:41px; border-radius:25%; cursor: pointer; border:2px solid #2c3e50; '></button>
                                        <input type='hidden' name='bundelIDeditten' value='" .$rows['bundelID'] . "'> 
                                    </form>
                            </td>

                            <td id='adminTD2" .$rows['bundelID'] . "'>
                                    <form action='verwijderBundelTussenPagina.php' id='verwijderen". $rows['bundelID'] ."' method='post' style='position:absolute; margin-top: -19px; margin-left: -10px;'>
                                        <button type='button' onClick='verwijderen(".$rows['bundelID'].");' style='background: url(css/Images/prullenbak.png) no-repeat; background-size: 35px 35px; width:41px; height:41px; border-radius:25%; cursor: pointer; border:2px solid #2c3e50; margin-left:10px;'></button>
                                <input type='hidden' name='bundelIDverwijderen' value='" .$rows['bundelID'] . "'> 
                                </form>


                            

                            <script> adminCheck(".$rows['bundelID'].");</script>

                            </td>"; 

                        }
                        echo "</tr>";
                        ?>




</html>