<?php

	


function Drag(){

	include "variableDb.php";

  ?>
<html>
<head>
</head>
	
<div>
<h2>Sleep de blokken naar de juiste plek!</h2><br><br><br><br>
<img id='sleepblok' src="css/Images/pijl.png" width=50px height=70px style='position:absolute;margin-left:-430px;margin-top:-60px;'>
<span id='sleepblokTekst' style='position:absolute;margin-left:-370px;margin-top:-30px;'><b>Sleep ons!</b></span>

<img hidden id='sleepplek' src="css/Images/pijlSpiegel.png" width=50px height=70px style='position:absolute;margin-left:200px;margin-top:-60px;'>
<span hidden id='sleepplekTekst' style='position:absolute;margin-left:20px;margin-top:-30px;'><b>Kies de goede plek uit!</b></span>
</div>





	<script type="text/javascript">

	var shuffleQuestions = true;	/* Shuffle questions ? */
	var shuffleAnswers = true;	/* Shuffle answers ? */
	var lockedAfterDrag = true;	/* Lock items after they have been dragged, i.e. the user get's only one shot for the correct answer */
	
	function quizIsFinished()
	{
	 
		alert('Je hebt alles goed!');
		
	}
	
	
	/* Don't change anything below here */
	var dragContentDiv = false;
	var dragContent = false;
	
	var dragSource = false;
	var dragDropTimer = -1;
	var destinationObjArray = new Array();
	var destination = false;
	var dragSourceParent = false;
	var dragSourceNextSibling = false;
	var answerDiv;
	var questionDiv;	
	var sourceObjectArray = new Array();
	var arrayOfEmptyBoxes = new Array();
	var arrayOfAnswers = new Array();
	
	function getTopPos(inputObj)
	{		
	  if(!inputObj || !inputObj.offsetTop)return 0;		
	  var returnValue = inputObj.offsetTop;
	  while((inputObj = inputObj.offsetParent) != null)returnValue += inputObj.offsetTop;
	  return returnValue;
	}
	
	function getLeftPos(inputObj)
	{
	  if(!inputObj || !inputObj.offsetLeft)return 0;	
	  var returnValue = inputObj.offsetLeft;
	  while((inputObj = inputObj.offsetParent) != null)returnValue += inputObj.offsetLeft;
	  return returnValue;
	}
		
	function cancelEvent()
	{
		return false;
		console.log("cancelEvent");
	}
	
	function initDragDrop(e)
	{
		if(document.all)e = event;
		if(lockedAfterDrag && this.parentNode.parentNode.id=='questionDiv')return;
		dragContentDiv.style.left = e.clientX  + Math.max(document.documentElement.scrollLeft,document.body.scrollLeft) + 'px';
		dragContentDiv.style.top = e.clientY  + Math.max(document.documentElement.scrollTop,document.body.scrollTop) + 'px';
		dragSource = this;
		dragSourceParent = this.parentNode;
		dragSourceNextSibling = false;
		if(this.nextSibling)dragSourceNextSibling = this.nextSibling;
		if(!dragSourceNextSibling.tagName)dragSourceNextSibling = dragSourceNextSibling.nextSibling;
		
		dragDropTimer=0;
		timeoutBeforeDrag();
		
		return false;
	}
	
	function timeoutBeforeDrag(){
		if(dragDropTimer>=0 && dragDropTimer<10){
			dragDropTimer = dragDropTimer +1;
			setTimeout('timeoutBeforeDrag()',10);
			return;
		}
		if(dragDropTimer>=10){
			dragContentDiv.style.display='block';
			dragContentDiv.innerHTML = '';
			dragContentDiv.appendChild(dragSource);
		document.getElementById("sleepblok").hidden = true;
		document.getElementById("sleepblokTekst").hidden = true;
		document.getElementById("sleepplek").hidden = false;
		document.getElementById("sleepplekTekst").hidden = false;
			
		}		
	}
	
	function dragDropMove(e)
	{
		if(dragDropTimer<10){
			return;

		}
		
		if(document.all)e = event;
		
		var scrollTop = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
		var scrollLeft = Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
		
		dragContentDiv.style.left = e.clientX + scrollLeft + 'px';
		dragContentDiv.style.top = e.clientY + scrollTop + 'px';
		
		var dragWidth = dragSource.offsetWidth;
		var dragHeight = dragSource.offsetHeight;
		

		var objFound = false;
		
		var mouseX = e.clientX + scrollLeft;
		var mouseY = e.clientY + scrollTop;
		


		destination = false;
		for(var no=0;no<destinationObjArray.length;no++){
			var left = destinationObjArray[no]['left'];
			var top = destinationObjArray[no]['top'];
			var width = destinationObjArray[no]['width'];
			var height = destinationObjArray[no]['height'];
			
			destinationObjArray[no]['obj'].className = 'destinationBox';
			var subs = destinationObjArray[no]['obj'].getElementsByTagName('DIV');
			if(!objFound && subs.length==0){
				if(mouseX < (left/1 + width/1) && (mouseX + dragWidth/1) >left && mouseY < (top/1 + height/1) && (mouseY + dragHeight/1) >top){
					destinationObjArray[no]['obj'].className='dragContentOver';
					destination = destinationObjArray[no]['obj'];					
					objFound = true;
				}		
			}	
		}

		
		sourceObjectArray['obj'].className='';
		
		if(!objFound){
			var left = sourceObjectArray['left'];
			var top = sourceObjectArray['top'];
			var width = sourceObjectArray['width'];
			var height = sourceObjectArray['height'];
						
			if(mouseX < (left/1 + width/1) && (mouseX + dragWidth/1) >left && mouseY < (top/1 + height/1) && (mouseY + dragHeight/1) >top){
				destination = sourceObjectArray['obj'];
				sourceObjectArray['obj'].className='dragContentOver';
			}
		}
		return false;
	}
	
	
	function dragDropEnd()
	{

		if(dragDropTimer<10){
			dragDropTimer = -1;
			return;
			console.log("dragDropEnd");

		}
		dragContentDiv.style.display='none';
		sourceObjectArray['obj'].style.backgroundColor = '#FFF';
		if(destination){
			destination.appendChild(dragSource);
			destination.className='destinationBox';
			
			// Check if position is correct, i.e. correct answer to the question
			
			if(!destination.id || destination.id!='answerDiv'){
				var previousEl = dragSource.parentNode.previousSibling;
				if(!previousEl.tagName)previousEl = previousEl.previousSibling;
				var numericId = previousEl.id.replace(/[^0-9]/g,'');
				var numericIdSource = dragSource.id.replace(/[^0-9]/g,'');
				
				if(numericId==numericIdSource){
					dragSource.className='correctAnswer';
					checkAllAnswers();	
				}
				else
					dragSource.className='wrongAnswer';				
			}
			
			if(destination.id && destination.id=='answerDiv'){
				dragSource.className='dragDropSmallBox';
			}
			
		}else{
			if(dragSourceNextSibling)
				dragSourceNextSibling.parentNode.insertBefore(dragSource,dragSourceNextSibling);
			else
				dragSourceParent.appendChild(dragSource);
		}
		dragDropTimer = -1;
		dragSourceNextSibling = false;
		dragSourceParent = false;
		destination = false;
		document.getElementById("sleepblok").hidden = false;
		document.getElementById("sleepblokTekst").hidden = false;
		document.getElementById("sleepplek").hidden = true;
		document.getElementById("sleepplekTekst").hidden = true;
	}
	
	function checkAllAnswers()
	{	
		for(var no=0;no<arrayOfEmptyBoxes.length;no++){
			var sub = arrayOfEmptyBoxes[no].getElementsByTagName('DIV');
			if(sub.length==0)return;
			
			if(sub[0].className!='correctAnswer'){
				return;
			}	
			
		}	
		
		quizIsFinished();
		modal.classList.add("show");	
	}
	

	
	function resetPositions()
	{
		if(dragDropTimer>=10)return;
		
		for(var no=0;no<destinationObjArray.length;no++){
			if(destinationObjArray[no]['obj']){
				destinationObjArray[no]['left'] = getLeftPos(destinationObjArray[no]['obj'])
				destinationObjArray[no]['top'] = getTopPos(destinationObjArray[no]['obj'])	
			}		
			
		}
		sourceObjectArray['left'] = getLeftPos(answerDiv);
		sourceObjectArray['top'] = getTopPos(answerDiv);		
	}
	
	
	function initDragDropScript()
	{
		
		dragContentDiv = document.getElementById('dragContent');
		
		answerDiv = document.getElementById('answerDiv');
		answerDiv.onselectstart = cancelEvent;
		var divs = answerDiv.getElementsByTagName('DIV');
		var answers = new Array();
		
		for(var no=0;no<divs.length;no++){
			if(divs[no].className=='dragDropSmallBox'){
				divs[no].onmousedown = initDragDrop;
				answers[answers.length] = divs[no];
				arrayOfAnswers[arrayOfAnswers.length] = divs[no];
			}
			
		}	
		
		if(shuffleAnswers){
			for(var no=0;no<(answers.length*10);no++){
				var randomIndex = Math.floor(Math.random() * answers.length);
				answerDiv.appendChild(answers[randomIndex]);
			}		
		}
		
		sourceObjectArray['obj'] = answerDiv;
		sourceObjectArray['left'] = getLeftPos(answerDiv);
		sourceObjectArray['top'] = getTopPos(answerDiv);
		sourceObjectArray['width'] = answerDiv.offsetWidth;
		sourceObjectArray['height'] = answerDiv.offsetHeight;
		
		
		questionDiv = document.getElementById('questionDiv');
		
		questionDiv.onselectstart = cancelEvent;
		var divs = questionDiv.getElementsByTagName('DIV');
		
		var questions = new Array();
		var questionsOpenBoxes = new Array();
		

		for(var no=0;no<divs.length;no++){
			if(divs[no].className=='destinationBox'){
				var index = destinationObjArray.length;
				destinationObjArray[index] = new Array();
				destinationObjArray[index]['obj'] = divs[no];
				destinationObjArray[index]['left'] = getLeftPos(divs[no]);
				destinationObjArray[index]['top'] = getTopPos(divs[no]);
				destinationObjArray[index]['width'] = divs[no].offsetWidth;
				destinationObjArray[index]['height'] = divs[no].offsetHeight;
				questionsOpenBoxes[questionsOpenBoxes.length] = divs[no];
				arrayOfEmptyBoxes[arrayOfEmptyBoxes.length] = divs[no];
			}
			if(divs[no].className=='dragDropSmallBox'){
				questions[questions.length] = divs[no];
			}
				
		}
		
		if(shuffleQuestions){
			for(var no=0;no<(questions.length*10);no++){
				var randomIndex = Math.floor(Math.random() * questions.length);

				questionDiv.appendChild(questions[randomIndex]);			
				questionDiv.appendChild(questionsOpenBoxes[randomIndex]);		
				
				destinationObjArray[destinationObjArray.length] = destinationObjArray[randomIndex];
				destinationObjArray.splice(randomIndex,1);	
				
				questionsOpenBoxes[questionsOpenBoxes.length] = questionsOpenBoxes[randomIndex];
				questionsOpenBoxes.splice(randomIndex,1);
				questions[questions.length] = questions[randomIndex];
				questions.splice(randomIndex,1);	
				
				
			}		
		}
		
		questionDiv.style.visibility = 'visible';
		answerDiv.style.visibility = 'visible';
		
		document.documentElement.onmouseup = dragDropEnd;	
		document.documentElement.onmousemove = dragDropMove;	
		setTimeout('resetPositions()',150);
		window.onresize = resetPositions;
	}

	/* Reset the form */
	function dragDropResetForm()
	{	
		for(var no=0;no<arrayOfAnswers.length;no++){
			arrayOfAnswers[no].className='dragDropSmallBox'
			answerDiv.appendChild(arrayOfAnswers[no]);

		}
		destinationObjArray = [];
		
		
		
		
		initDragDropScript();
	}
	
	window.onload = initDragDropScript;
	
	</script>
</head>
<body>


<div id="dragScriptContainer">
		
	
	
	<div id="answerDiv">
		<?php if($antwoord1 != null){ ?>
		<div class="dragDropSmallBox" id="a1"><?php echo $antwoord1 ?></div>
		<?php } ?>

		<?php if($antwoord2 != null){ ?>
		<div class="dragDropSmallBox" id="a2"><?php echo $antwoord2 ?></div>
		<?php } ?>

		<?php if($antwoord3 != null){ ?>
		<div class="dragDropSmallBox" id="a3"><?php echo $antwoord3 ?></div>
		<?php } ?>

		<?php if($antwoord4 != null){ ?>
		<div class="dragDropSmallBox" id="a4"><?php echo $antwoord4 ?></div>
		<?php } ?>

		<?php if($antwoord5 != null){ ?>
		<div class="dragDropSmallBox" id="a5"><?php echo $antwoord5 ?></div>
		<?php } ?>

		<?php if($antwoord6 != null){ ?>
		<div class="dragDropSmallBox" id="a6"><?php echo $antwoord6 ?></div>
		<?php } ?>

		<?php if($antwoord7 != null){ ?>
		<div class="dragDropSmallBox" id="a7"><?php echo $antwoord7 ?></div>
		<?php } ?>

		<?php if($antwoord8 != null){ ?>
		<div class="dragDropSmallBox" id="a8"><?php echo $antwoord8 ?></div>
		<?php } ?>
		
	</div>

	<div id="questionDiv">
		<!-- Hier ga ik door de if statement om te kijken of de vraag of antwoord ingevuld is. Als het niet zo is wordt de blok niet afgebeeld. -->
		<?php if($vraag1 != null){ ?>
		<div class="dragDropSmallBox" id="q1"><?php echo $vraag1 ?></div>
		<div class="destinationBox"></div>
		<?php } ?>

		<?php if($vraag2 != null){ ?>
		<div class="dragDropSmallBox" id="q2"><?php echo $vraag2 ?></div>
		<div class="destinationBox"></div>
		<?php } ?>

		<?php if($vraag3 != null){ ?>
		<div class="dragDropSmallBox" id="q3"><?php echo $vraag3 ?></div>
		<div class="destinationBox"></div>
		<?php } ?>

		<?php if($vraag4 != null){ ?>
		<div class="dragDropSmallBox" id="q4"><?php echo $vraag4 ?></div>
		<div class="destinationBox"></div>
		<?php } ?>

		<?php if($vraag5 != null){ ?>
		<div class="dragDropSmallBox" id="q5"><?php echo $vraag5 ?></div>
		<div class="destinationBox"></div>
		<?php } ?>

		<?php if($vraag6 != null){ ?>
		<div class="dragDropSmallBox" id="q6"><?php echo $vraag6 ?></div>
		<div class="destinationBox"></div>
		<?php } ?>

		<?php if($vraag7 != null){ ?>
		<div class="dragDropSmallBox" id="q7"><?php echo $vraag7 ?></div>
		<div class="destinationBox"></div>
		<?php } ?>

		<?php if($vraag8 != null){ ?>
		<div class="dragDropSmallBox" id="q8"><?php echo $vraag8 ?></div>
		<div class="destinationBox"></div>
		<?php } ?>
			
	</div>
</div>
<div id="dragContent"></div><br>
<input type="button" class="button" onclick="dragDropResetForm();return false" value="Reset">



</div>

</body>
</html>
<?php } ?>