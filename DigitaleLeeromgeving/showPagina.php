<!DOCTYPE html>
<?php
session_start();

include "variableDb.php";
include "variableDbEDIT.php";
include "dragAndDropBlok.php";
include "multiplechoice.php";
include 'dbClass.php';



cssHTML();

$id = $_GET['id'];
$_SESSION['bundelID'] = $_GET['id'];

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
</script>


<head>
<script src="jquery-3.3.1.min.js"></script>
</head>

<br>
<div style="position:absolute; margin-top:-100px;margin-left:91.5%;">
	<a href="/DigitaleLeeromgeving/tabelOpdracht.php">
		<button class="button"><span><- Terug naar opdrachten</span></button>
	</a>
</div>


<br><br><br><br><br>



<h1 id='content' align="center" style="width:900px; height:90px; border-radius:50px;">
	<?php echo $bundelTitel; ?>

	<span id='edit/verwijder'>
	<div align=right > 


<?php echo 
"<form action='editPagina.php' id='editten". $_SESSION['bundelID'] ."' method='post' style='position:absolute; margin-left:760px; margin-top: -20px;'>
    <button type='button' onclick='this.form.submit();' style='background: url(css/Images/tandwiel.png) no-repeat; background-size: 37px 37px; width:41px; height:41px; border-radius:25%; cursor: pointer; border:2px solid #2c3e50; '></button>
    <input type='hidden' name='bundelIDeditten' value='" .$_SESSION['bundelID'] . "'></form>

<form action='verwijderBundelTussenPagina.php' id='verwijderen". $_SESSION['bundelID'] ."' method='post' style='position:absolute; 				margin-left:800px; margin-top:-20px;'>
    <button type='button' onClick='verwijderen(".$_SESSION['bundelID'].");' style='background: url(css/Images/prullenbak.png) no-repeat; background-size: 35px 35px; width:41px; height:41px; border-radius:25%; cursor: pointer; border:2px solid #2c3e50; margin-left:10px;'></button>
    <input type='hidden' name='bundelIDverwijderen' value='" .$_SESSION['bundelID'] . "'></form>"; 
?>


	</div>
	</span>
	</h1>


<script>

</script>







	


	<script>
	function adminCheck(){
		var admin = <?php admin(); ?>;
		//Als gebruiker GEEN admin is
		if (admin === 0) {
		document.getElementById("edit/verwijder").hidden = true;
		//Als gebruiker WEL admin is
		} else if (admin === 1) {
		document.getElementById("edit/verwijder").hidden = false;

		}
	}
	adminCheck();

		    $('#verwijderen').submit(function() {

	    	var zekerWetenCheck = "\n\n\nWeet u zeker dat u de opdracht '<?php echo $bundelTitel;?>' wilt verwijderen?\nDit kan later niet meer worden teruggedraaid.\n\nDruk 'OK' om te verwijderen";
	    	var isVerwijderd = "\n\n\n\n'<?php echo $bundelTitel; ?>' is verwijderd.\n\n";

    	if (confirm(zekerWetenCheck)){
    		alert(isVerwijderd);
    	}
		});

	</script>

<?php if($inleiding != null){ ?>
	<br><br>
	<div id="content" align="center" style="width: 900px; text-align:initial; font-size: 17px; padding: 40px;">
		<?php echo $inleiding; ?>
		

<br><br>


		

	</div>
	<br>
		
		
	<?php }  ?>


<br><br>
	<?php if($bundelAfbeelding != null){ ?>
	
	<div align="center">
		<?php
		if(substr($bundelAfbeelding, 0, 4) == "http") { 

			echo "<img src='" . $bundelAfbeelding . "' width='" . $widthAfbld. "' height='" . $heightAfbld . "' border='5' style='border:5px solid white;'>";
		
		 }
		 else{   
			echo "<img src='css/Images/" . $bundelAfbeelding . "' width='" . $widthAfbld. "' height='" . $heightAfbld . "' border='5' style='border:5px solid white;'>";
			 } 
		?>

		</div>	
		<br>
		<br>
		<br>	
	
	<?php } ?>




	<?php if($video != null){ ?>
	<div align="center">
		<?php $videoHeight = ($videoSize / 16) *9;?>
		<iframe width='<?php echo $videoSize?>' height='<?php echo $videoHeight?>' src="https://www.youtube.com/embed/<?php echo $video?>" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	
		
	</div>
	<br>
		<br>
		<br>
	<?php }  ?>


	

	<?php if($tekst != null){ ?>
	<div id="content" align="center" style="width: 900px; text-align:initial; font-size: 17px; padding: 40px;">
		<?php echo $tekst; ?>
		

	</div>
	<br>
		<br>
		<br>
	<?php }  ?>
	

		

	<?php if($openVraag != null) { ?>
	<div id="content" align="center" style="width: 900px; font-size: 17px;">

		<form class="text" method="post">
			<h4><?php echo $openVraag ?></h4><br><br>
			<textarea id="antwoordInput" cols="100" type="text" name="antwoord"></textarea><br><br><br>

			<span id="feedback"></span><br><br>
			
			<button id="buttonGoedkeuren" class="button" type="button" onclick="nakijken()" name="goedKeuren" style="width:100px"><span>Nakijken</span></button>
			
			
		</form>
		<script>

			//maak booleans aan om code leesbaar te houden
			var objectief = 0;
			var subjectief = 1;
			//haal gegevens op uit dbVariable
			var antwoordOpen = "<?php echo $openAntwoord ?>";
			var vraagSoort = "<?php echo $openSoort ?>";

			function nakijken(){
				var gegevenAntwoord = document.getElementById("antwoordInput").value;

			//checkt of uberhaupt een antwoord gegeven is
			if (!gegevenAntwoord){
					document.getElementById("feedback").innerHTML = "Vergeten wat in te vullen?";			
			} else {

				//checkt of openvraag uit db subjectief/objectief is
				//Objectief
				if (vraagSoort == objectief){
						//als gegeven antwoord GOED is
						if(gegevenAntwoord === antwoordOpen){
							document.getElementById("feedback").innerHTML = "Je hebt het goed!<br><br>";	
							document.getElementById("antwoordInput").style.border = "solid green";

						//als gegeven antwoord GOED is
						} else if (!(gegevenAntwoord === antwoordOpen)){
							document.getElementById("feedback").innerHTML = "Je hebt het helaas fout... Typfoutje misschien?<br><br><br>Dit was het juiste antwoord:<br><br><b><i>'<?php echo $openAntwoord ?>'</i><br></b>";	
							document.getElementById("antwoordInput").style.border = "solid red";
						}
						
					//disable tekstveld en hide button	
					document.getElementById("buttonGoedkeuren").style.display="none";
					document.getElementById("antwoordInput").disabled = true;
						

				//Subjectief
				} else if (vraagSoort == subjectief) {
						document.getElementById("feedback").innerHTML = "Interessant antwoord!<br><br><br>Dit is een <i>meningsvraag</i>, dat betekent dat er geen goed of fout is, maar dit is wat de maker van de opdracht als antwoord heeft gegeven:<br><br><b><i>'<?php echo $openAntwoord ?>'<br></i></b>";
						document.getElementById("buttonGoedkeuren").style.display="none";
						document.getElementById("antwoordInput").disabled = true;
				} 

				}
			}
		</script>
	</div>
	<?php }  ?>


		<br>
		<br>
		<br>
	

	<?php if($mcVraag !=null){ ?>
	<div id="content" align="center" style="width: 900px; font-size: 17px;">

			<?php MultipleChoice(); ?>

	</div>

		<br>
		<br>
		<br>
	<?php }  ?>




	<?php if ($vraag1 !=null) { ?>
	<div2 id="content" align="center" style="width: 1100px;">
			<?php 
			Drag();
			?>
	</div2>
	<br><br>
	<?php  } ?>



<div align="center" id="content" style="width:150px; border-radius:50px;">
	<button class="button" style="border-radius:55px;" onclick="topFunction()" id="myBtn">^ Terug naar boven</button>
	<script>

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


 if(document.URL.indexOf("#")==-1)
        {
            // Set the URL to whatever it was plus "#".
            url = document.URL+"#";
            location = "#";

            //Reload the page
            location.reload(true);

        };

	</script>
</div>




	</html>
