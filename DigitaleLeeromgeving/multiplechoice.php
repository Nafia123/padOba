
<?php 
function MultipleChoice(){
include 'variableDb.php';
// include 'resultaten.php';
?>
<html>
<script src="http://www.w3schools.com/lib/w3data.js"></script>


<head>


    <!-- Bepaalt posities van verschillende elementen -->
    <style>

    /*Positie alle elementen*/
    .wrongRadio{
        color:red;
    }
    .correctRadio{
        color:green;
    }


*{font-family: 'Roboto', sans-serif;}

@keyframes click-wave {
  0% {
    height: 30px;
    width: 30px;
    opacity: 0.35;
    position: relative;
  }
  100% {
    height: 200px;
    width: 200px;
    margin-left: -80px;
    margin-top: -80px;
    opacity: 0;
  }
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 7.33333px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 25px;
  width: 25px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #00aed6;
}

.option-inputgoed:checked {
  background: #00cc00;
}

.option-input:checked::before {
  height: 25px;
  width: 25px;
  position: absolute;
  content: '';
  display: inline-block;
  font-size: 26.66667px;
  text-align: center;
  line-height: 40px;
}
.option-input:checked::after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: #40e0d0;
  content:'';
  display: block;
  position: relative;
  z-index: 100;
}
.option-input.radio {
  border-radius: 50%;
}
.option-input.radio::after {
  border-radius: 50%;
}

.option body {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: box;
  background: #e8ebee;
  color: #9faab7;
  font-family: "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
  text-align: center;
}
.option body div {
  padding: 5rem;
}
.option body label {
  display: block;
  line-height: 40px;
}

.option input[type=radio],
.option input.radio {
  float: left;
  clear: none;
  margin: 2px 0 0 2px;
  margin-left: 40%;
}
.option label {
  float: left;
  clear: none;
  display: block;
  padding: 12px 1em 0 0;
  margin-left:2%;
}

</style>

</head>

<body>

    <div id="page-wrap">
        <!-- Weergeeft titel -->
        <div class = "opdracht" id="MultipleChoice">

           


            <!-- Weergeeft vraag -->
            <h4>
                <?php
                print $mcVraag;
                ?>
            </h4>

            <!-- Weergeeft antwoorden -->
            <!-- Radio buttons -->
            <form id="mcVraag" action="" method="post" >

                <span id=kleur1 style="">
                <input type="radio" name="antwoord" id="keuze_1" value="A" class="option-input radio"/>
                <label for="keuze_1"><?php print $mc_1; ?></label>
                 <br>
                </span><br>

                <span id=kleur2 style="">
                <input type="radio" name="antwoord" id="keuze_2" value="B"class="option-input radio"/>
                 <label for="keuze_2"><?php print $mc_2; ?></label> <br>
                </span><br>

                <span id=kleur3 style="">
                <input type="radio" name="antwoord" id="keuze_3" value="C" class="option-input radio"/>
                 <label for="keuze_3"><?php print $mc_3; ?></label><br>
                </span><br>

                <span id=kleur4 style="">
                <input type="radio" name="antwoord" id="keuze_4" value="D" class="option-input radio"/>
                 <label for="keuze_4"><?php print $mc_4; ?></label><br> <br> <br>
                </span>

                <span id="Controleer"></span>
                <br>
                
                <input type="hidden" name="check" id="check" value="<?php echo $mc_antwoord; ?>" />
              
                <!-- Button voor het inleveren van vraag -->
                <input id="nakijkButton" class="button" style="width:100px;" type="button" onclick="Check()" name="select" value="Nakijken" />

            </form>
               
              
                     
     

            <script>
            // convert php variable naar javascript variable.
            var mc_1 = "<?php echo $mc_1?>";
            var mc_2 = "<?php echo $mc_2?>";
            var mc_3 = "<?php echo $mc_3?>";
            var mc_4 = "<?php echo $mc_4?>";
            var antwoord = "<?php echo $mc_antwoord?>";

              // function voor het checken
              function Check(){

                

              // Check of er een selectie gemaakt is, als er eentje gemaakt is runt hij de rest. Anders geeft hij het aan dat er geen selectie is.
        if(!document.getElementById("keuze_1").checked && !document.getElementById("keuze_2").checked && !document.getElementById("keuze_3").checked && !document.getElementById("keuze_4").checked){
                    alert("Kies een antwoord");
        }else{

                // Kijkt bij elke radio button of het geselecteerd is, als het geselecteerd is kijkt de function of de value van de radio button overeenkomt met het correcte antwoord. En dit doet hij 4 keer.
                if(document.getElementById("keuze_1").checked){
                    if( document.getElementById("keuze_1").value == antwoord){
                        document.getElementById("kleur1").style.color = 'green';
                        document.getElementById("kleur1").style.fontWeight = "bold";
                        

                        document.getElementById("Controleer").innerHTML = "<h2><b>Correct!</b></h2><br><br>";

                       turnOff();

                        
                    }else{
                        document.getElementById("kleur1").style.color = 'red';

                            if(document.getElementById("keuze_2").value == antwoord){
                            document.getElementById("kleur2").style.color = 'green';
                            document.getElementById("kleur2").style.fontWeight = "bold";
                            } 
                            else if (document.getElementById("keuze_3").value == antwoord){
                            document.getElementById("kleur3").style.color = 'green';
                            document.getElementById("kleur3").style.fontWeight = "bold";
                            } 
                            else if (document.getElementById("keuze_4").value == antwoord){
                            document.getElementById("kleur4").style.color = 'green'; 
                            document.getElementById("kleur4").style.fontWeight = "bold";
                            }

                        document.getElementById("Controleer").innerHTML = "Helaas, dat was niet het goede antwoord...<br><br><i>Het goede antwoord is groen gekleurd<i><br><br>";
                        turnOff();
                    }
                }





                if(document.getElementById("keuze_2").checked){
                    if( document.getElementById("keuze_2").value == antwoord){
                        document.getElementById("kleur2").style.color = 'green';
                        document.getElementById("kleur2").style.fontWeight = "bold";
                        document.getElementById("Controleer").innerHTML = "Correct!<br><br>";

                       turnOff();
                        
                    }else{
                        document.getElementById("kleur2").style.color = 'red';

                            if(document.getElementById("keuze_1").value == antwoord){
                            document.getElementById("kleur1").style.color = 'green';
                            document.getElementById("kleur1").style.fontWeight = "bold";
                            } 
                            else if (document.getElementById("keuze_3").value == antwoord){
                            document.getElementById("kleur3").style.color = 'green';
                            document.getElementById("kleur3").style.fontWeight = "bold";
                            } 
                            else if (document.getElementById("keuze_4").value == antwoord){
                            document.getElementById("kleur4").style.color = 'green'; 
                            document.getElementById("kleur4").style.fontWeight = "bold";
                            }

                        document.getElementById("Controleer").innerHTML = "Helaas, dat was niet het goede antwoord...<br><br><i>Het goede antwoord is groen gekleurd<i><br><br>";
                        turnOff();
                    }
                }





                if(document.getElementById("keuze_3").checked){
                    if( document.getElementById("keuze_3").value == antwoord){
                        document.getElementById("kleur3").style.color = 'green';
                        document.getElementById("kleur3").style.fontWeight = "bold";
                        document.getElementById("Controleer").innerHTML = "Correct!<br><br>";

                       turnOff();
                        
                    }else{
                        document.getElementById("kleur3").style.color = 'red';

                            if(document.getElementById("keuze_1").value == antwoord){
                            document.getElementById("kleur1").style.color = 'green';
                            document.getElementById("kleur1").style.fontWeight = "bold";
                            } 
                            else if (document.getElementById("keuze_2").value == antwoord){
                            document.getElementById("kleur2").style.color = 'green';
                            document.getElementById("kleur2").style.fontWeight = "bold";
                            } 
                            else if (document.getElementById("keuze_4").value == antwoord){
                            document.getElementById("kleur4").style.color = 'green';
                            document.getElementById("kleur4").style.fontWeight = "bold"; 
                            }

                        document.getElementById("Controleer").innerHTML = "Helaas, dat was niet het goede antwoord...<br><br><i>Het goede antwoord is groen gekleurd<i><br><br>";
                        turnOff();
                    }
                }





                if(document.getElementById("keuze_4").checked){
                    if( document.getElementById("keuze_4").value == antwoord){
                        document.getElementById("kleur4").style.color = 'green';
                        document.getElementById("kleur4").style.fontWeight = "bold";
                        document.getElementById("Controleer").innerHTML = "Correct!<br><br>";

                       turnOff();
                        
                    }else{
                        document.getElementById("kleur4").style.color = 'red';

                            if(document.getElementById("keuze_1").value == antwoord){
                            document.getElementById("kleur1").style.color = 'green';
                            document.getElementById("kleur1").style.fontWeight = "bold";
                            } 
                            else if (document.getElementById("keuze_2").value == antwoord){
                            document.getElementById("kleur2").style.color = 'green';
                            document.getElementById("kleur2").style.fontWeight = "bold";
                            } 
                            else if (document.getElementById("keuze_3").value == antwoord){
                            document.getElementById("kleur3").style.color = 'green'; 
                            document.getElementById("kleur3").style.fontWeight = "bold";
                            }

                        document.getElementById("Controleer").innerHTML = "Helaas, dat was niet het goede antwoord...<br><br><i>Het goede antwoord is groen gekleurd<i><br><br>";
                        turnOff();
                    }
                }






            }

        }
        function turnOff(){
            document.getElementById("keuze_1").disabled = true;
            document.getElementById("keuze_2").disabled = true;
            document.getElementById("keuze_3").disabled = true;
            document.getElementById("keuze_4").disabled = true;
            document.getElementById("nakijkButton").style.display="none";
        }
    </script>
    
            

        </div>
     
       



    </div>

</body>

</html>
<?php  }  ?>