var styleDefault= `
@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
background-image: url(css/Images/achtergrondDEFAULT.gif);
background-repeat: no-repeat;
background-attachment: fixed;
background-size:100%;

color: black;
font-family: nunito;

}

input {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
}

a {
      text-decoration:none;
}

textarea {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
  resize:none;
}

#imported > textarea, input {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
  resize:none;
}

select {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
}




/*Button*/
.button {
  display: inline-block;
  border-radius: 15px;
  background-color: #2f7eff;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border:2px solid #2c3e50;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  // content: '/00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}



/*Drag & drop*/
#heading{
    height:100px;
  }

  #dragScriptContainer{ /* BIG DIV containing HTML needed for the entire script */
    width:1000px;
    margin:0 auto;
    border:1px solid DodgerBlue;
    border-radius: 10px;
    height:435px;
    margin-top:20px;
    padding:3px;
    -moz-user-select:no;
    background-color:white;
  }
    #questionDiv{ /* Big div for all the questions */
    float:right;
    height:100%;
    width:407px;
    border:4px solid #66a3ff;
    border-radius:5px;
    background-color:white;
    padding:2px;
  }
  #answerDiv{ /* Big div for all the answers */
    float:left;
    height:100%;
    width:200px;

    background-color:white;
    border-radius: 2px;

      
  }
  #questionDiv div,#answerDiv div,#dragContent div{ /* General rules for small divs - i.e. specific questions and answers */
    width:195px;
    height:50px;
    line-height:20px;   
    float:right;
    margin-right:2px;
    margin-bottom:2px;
    text-align:center;
    
  } 
  #dragContent div{ /* Drag content div - i.e. specific answers when they are beeing dragged */
    border:1px solid #000;
    border-radius: 5px;
    background-color: #66a3ff;


  }
  #answerDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid blue;
    cursor:pointer;
    border-radius: 5px;
    background-color: #66a3ff;
  }
  #questionDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid #000;
    cursor:pointer;
    background-color:DodgerBlue;
    border-radius: 5px; 
  }
  #questionDiv div div{ /* DIV after it has been dragged from right to left box */
    margin:0px;
    border:0px;
    padding:0px;
    background-color:dodgerblue;
    border-radius: 5px;
  }
    #questionDiv .destinationBox{ /* Small empty boxes for the questions - i.e. where answers could be dragged */
    border:0px;
    background-color:#cce0ff;
    width:195px;
    height:50px; 
    border-radius: 5px;
  }
  #questionDiv .correctAnswer{  /* CSS indicating correct answer */
    background-color:green;
    color:#fff;
    border:1px solid #000;
  }
  #questionDiv .wrongAnswer{  /* CSS indicating wrong answer */
    background-color:red;
    color:#fff;
    border:1px solid #000;
  }
  #dragContent div{
    background-color:lightblue;
  }
  #questionDiv .dragContentOver{  /* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#cce0ff;
  }
  #answerDiv.dragContentOver{ /* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#cce0ff;
  }
  /* NEVER CHANGE THIS */
  #dragContent{
    position:absolute;
    display:none;

  } 





/* Tabellen (Artikel/Opdracht) */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);


div.table-title {
  display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.opdracht table-title h3 {
   color:  #b3ccff;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
   border-radius:3px;
}

/*** Table Styles **/

.opdracht table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
 
.opdracht th {
  color: white;
  background:#2f7eff;
  font-size:23px;
  font-weight: 100;
  width:300px;
  padding:24px;
  text-align:middle;
  vertical-align:middle;
}

.opdracht th:first-child {
  border-top-left-radius:3px;
}
 
.opdracht th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
.opdracht tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#010729;
  font-size:16px;
  font-weight:normal;

  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 

.opdracht tr:hover td {
  background:#d5ebfd;


  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
.opdracht tr:first-child {
  border-top:none;
}

.opdracht tr:last-child {
  border-bottom:none;
}
 
.opdracht tr:nth-child(odd) td {
  background:#ffffff;
}

.opdracht tr:nth-child(odd):hover td {

}

.opdracht tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
.opdracht tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 
.opdracht td {
  background:#FFFFFF;
  padding:20px;
  text-align:center;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
}

.opdracht td:last-child {
  border-right: 0px;
}

.opdracht th.text-left {
  text-align: left;
}

.opdracht th.text-center {
  text-align: center;
}

.opdracht th.text-right {
  text-align: right;
}

.opdracht td.text-left {
  text-align: left;
}

.opdracht td.text-center {
  text-align: center;
}

.opdracht td.text-right {
  text-align: right;
}

.opdracht td a { 
   display: block; 
   padding: 10px; 
}





/* BEGIN MEMORY GAME CSS */

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
font-family: nunito;
  font-size: 16px;
}

.container {
  margin-right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards12{
  margin-left: 29.5%;
}

.cards16{
  margin-left: 26%;
}

.cards20{
  margin-left: 25%;
}

/*
 * Styles for the deck of cards
 */

.deck12{
  width: 600px;
  height: 680px;  
}

.deck16{
  width: 720px;
  height: 680px;  
}

.deck20{
  width: 720px;
  height: 680px;  
}

.deck { 
  background: #45aaf2;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 3em;
}

.deck .card {
  height: 3.7rem;
  width: 3.7rem;
  margin: 0.2rem 0.2rem;
  background: #FFFFFF url('css/Images/obaLogoJunior.png') no-repeat center center / contain;
  font-size: 0;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

}

.deck .card img {
  display: none;
}

.deck .card.open {
  transform: rotateY(0);
  background: #ffffff;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.card.open img {
  display: block;
}

.card.match img {
  display: block;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #2ecc71;
  font-size: 33px;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
  text-align: left;
  margin-bottom: 10px;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
}

.fa-star {
  color: #FFD700;
}

.timer {
  display: inline-block;
  margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
  
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 85%;
  position: relative;
  transition: all 5s ease-in-out;
font-family: nunito;
}
  
.popup h2 {
  text-align: center;
  margin-top: 0;
  color: #333;
font-family: nunito;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #E5F720;
}

.popup .content-1,
.content-2 {
  max-height: 30%;
  overflow: auto;
  text-align: center;
}

.show {
  visibility: visible !important;
  opacity: 100 !important;
}

#starRating li {
  display: inline-block;
}

#play-again {
  background-color: #141214;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  display: block;
  margin: 0 auto;
  width: 50%;
font-family: nunito;
  color: #ffffff;
  border-radius: 5px;
}

/* animations */
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}


/****** Media queries
***************************/


@media (max-width: 320px) {

  .deck .card {
    height: 4.7rem;
    width: 4.7rem;
  }
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
  .container {
    font-size: 22px;
  }



  .deck .card {
    height: 125px;
    width: 125px;
  }

  .popup {
    width: 60%;
  }
}

/* END MEMORY GAME */






.column10prcnt {
    width: 10%;
}
.column20prcnt {
    width: 20%;
}
.column30prcnt {
    width: 30%;
}
.column40prcnt {
    width: 40%;
}
.column50prcnt {
    width: 50%;
}
.column60prcnt {
    width: 60%;
}
.column70prcnt {
    width: 70%;
}
.column80prcnt {
    width: 80%;
}
.column90prcnt {
    width: 90%;
}
.column100prcnt {
    width: 100%;
}

#content {
  margin:auto;
  text-align:center;
  padding:10px;
  background-color:rgba(255, 255, 255, 0.7);
  border:3px outset;
  border-radius:5px;
  display:block;
}



#knopaan {
  background-image: url(css/Images/knopAdd.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}

#knopuit {
  background-image: url(css/Images/knopRmv.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}



#customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}



/* MASCOTTE */

/* Tooltip container */
.tooltip {
    position: fixed;
    display: inline-block;
    top: 25%;
    left: 5%;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 105%;
    left: 35%;
    margin-left: -60px;
}

/* Tooltip text */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}


`;































































var styleRainbow= `
@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
background-image: url(css/Images/rainbow.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-size:100%;

color: black;
font-family: nunito;
}

input {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
}

a {
      text-decoration:none;
}

textarea {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
  resize:none;
}

#imported > textarea, input {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
  resize:none;
}

select {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
}




/*Button*/
.button {
  display: inline-block;
  border-radius: 15px;
  background-color: #2f7eff;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border:2px solid #2c3e50;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  // content: '/00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}



/*Drag & drop*/
#heading{
    height:100px;
  }

  #dragScriptContainer{ /* BIG DIV containing HTML needed for the entire script */
    width:1000px;
    margin:0 auto;
    border:1px solid DodgerBlue;
    border-radius: 10px;
    height:435px;
    margin-top:20px;
    padding:3px;
    -moz-user-select:no;
    background-color:white;
  }
    #questionDiv{ /* Big div for all the questions */
    float:right;
    height:100%;
    width:407px;
    border:4px solid #66a3ff;
    border-radius:5px;
    background-color:white;
    padding:2px;
  }
  #answerDiv{ /* Big div for all the answers */
    float:left;
    height:100%;
    width:200px;
   
    background-color:white;
    border-radius: 2px;

      
  }
  #questionDiv div,#answerDiv div,#dragContent div{ /* General rules for small divs - i.e. specific questions and answers */
    width:195px;
    height:50px;
    line-height:20px;   
    float:right;
    margin-right:2px;
    margin-bottom:2px;
    text-align:center;
    
  } 
  #dragContent div{ /* Drag content div - i.e. specific answers when they are beeing dragged */
    border:1px solid #000;
    border-radius: 5px;
    background-color: #66a3ff;


  }
  #answerDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid blue;
    cursor:pointer;
    border-radius: 5px;
    background-color: #66a3ff;
  }
  #questionDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid #000;
    cursor:pointer;
    background-color:DodgerBlue;
    border-radius: 5px; 
  }
  #questionDiv div div{ /* DIV after it has been dragged from right to left box */
    margin:0px;
    border:0px;
    padding:0px;
    background-color:dodgerblue;
    border-radius: 5px;
  }
    #questionDiv .destinationBox{ /* Small empty boxes for the questions - i.e. where answers could be dragged */
    border:0px;
    background-color:#cce0ff;
    width:195px;
    height:50px; 
    border-radius: 5px;
  }
  #questionDiv .correctAnswer{  /* CSS indicating correct answer */
    background-color:green;
    color:#fff;
    border:1px solid #000;
  }
  #questionDiv .wrongAnswer{  /* CSS indicating wrong answer */
    background-color:red;
    color:#fff;
    border:1px solid #000;
  }
  #dragContent div{
    background-color:lightblue;
  }
  #questionDiv .dragContentOver{  /* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#cce0ff;
  }
  #answerDiv.dragContentOver{ /* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#cce0ff;
  }
  /* NEVER CHANGE THIS */
  #dragContent{
    position:absolute;
    display:none;

  } 





/* Tabellen (Artikel/Opdracht) */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);


div.table-title {
  display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.opdracht table-title h3 {
   color:  #b3ccff;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}

/*** Table Styles **/

.opdracht table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
 
.opdracht th {
  color: white;
  background:#2f7eff;
  font-size:23px;
  font-weight: 100;
  width:300px;
  padding:24px;
  text-align:middle;
  vertical-align:middle;
}


.opdracht th:first-child {
  border-top-left-radius:3px;
}
 
.opdracht th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
.opdracht tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#010729;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 

.opdracht tr:hover td {
  background:#d5ebfd;


  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
.opdracht tr:first-child {
  border-top:none;
}

.opdracht tr:last-child {
  border-bottom:none;
}
 
.opdracht tr:nth-child(odd) td {
  background:#ffffff;
}

.opdracht tr:nth-child(odd):hover td {

}

.opdracht tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
.opdracht tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 
.opdracht td {
  background:#FFFFFF;
  padding:20px;
  text-align:center;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
}

.opdracht td:last-child {
  border-right: 0px;
}

.opdracht th.text-left {
  text-align: left;
}

.opdracht th.text-center {
  text-align: center;
}

.opdracht th.text-right {
  text-align: right;
}

.opdracht td.text-left {
  text-align: left;
}

.opdracht td.text-center {
  text-align: center;
}

.opdracht td.text-right {
  text-align: right;
}

.opdracht td a { 
   display: block; 
   padding: 10px; 
}




/* BEGIN MEMORY GAME CSS */

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
font-family: nunito;
  font-size: 16px;
}

.container {
  margin-right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards12{
  margin-left: 29.5%;
}

.cards16{
  margin-left: 26%;
}

.cards20{
  margin-left: 25%;
}

/*
 * Styles for the deck of cards
 */

.deck12{
  width: 600px;
  height: 680px;  
}

.deck16{
  width: 720px;
  height: 680px;  
}

.deck20{
  width: 720px;
  height: 680px;  
}

.deck { 
  background: #f3a683;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 3em;
}

.deck .card {
  height: 3.7rem;
  width: 3.7rem;
  margin: 0.2rem 0.2rem;
  background: #FFFFFF url('css/Images/obaLogoJunior.png') no-repeat center center / contain;
  font-size: 0;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

}

.deck .card img {
  display: none;
}

.deck .card.open {
  transform: rotateY(0);
  background: #ffffff;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.card.open img {
  display: block;
}

.card.match img {
  display: block;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #2ecc71;
  font-size: 33px;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
  text-align: left;
  margin-bottom: 10px;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
}

.fa-star {
  color: #FFD700;
}

.timer {
  display: inline-block;
  margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
  
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 85%;
  position: relative;
  transition: all 5s ease-in-out;
font-family: nunito;
}
  
.popup h2 {
  text-align: center;
  margin-top: 0;
  color: #333;
font-family: nunito;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #E5F720;
}

.popup .content-1,
.content-2 {
  max-height: 30%;
  overflow: auto;
  text-align: center;
}

.show {
  visibility: visible !important;
  opacity: 100 !important;
}

#starRating li {
  display: inline-block;
}

#play-again {
  background-color: #141214;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  display: block;
  margin: 0 auto;
  width: 50%;
font-family: nunito;
  color: #ffffff;
  border-radius: 5px;
}

/* animations */
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}


/****** Media queries
***************************/


@media (max-width: 320px) {

  .deck .card {
    height: 4.7rem;
    width: 4.7rem;
  }
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
  .container {
    font-size: 22px;
  }



  .deck .card {
    height: 125px;
    width: 125px;
  }

  .popup {
    width: 60%;
  }
}

/* END MEMORY GAME */









.column10prcnt {
    width: 10%;
}
.column20prcnt {
    width: 20%;
}
.column30prcnt {
    width: 30%;
}
.column40prcnt {
    width: 40%;
}
.column50prcnt {
    width: 50%;
}
.column60prcnt {
    width: 60%;
}
.column70prcnt {
    width: 70%;
}
.column80prcnt {
    width: 80%;
}
.column90prcnt {
    width: 90%;
}
.column100prcnt {
    width: 100%;
}

#content {
  margin:auto;
  text-align:center;
  padding:10px;
  background-color:rgba(255, 255, 255, 0.7);
  border:3px outset;
  border-radius:5px;
  display:block;
}



#knopaan {
  background-image: url(css/Images/knopAdd.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}

#knopuit {
  background-image: url(css/Images/knopRmv.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}



#customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}





/* MASCOTTE */

/* Tooltip container */
.tooltip {
    position: fixed;
    display: inline-block;
    top: 25%;
    left: 5%;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 105%;
    left: 35%;
    margin-left: -60px;
}

/* Tooltip text */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}


`;


















































































var styleBlauw = `

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  background-image: url(css/Images/blauwGRADIENT.png);
   background-repeat: no-repeat;
background-attachment: fixed;
background-size:100%;

color: black;
font-family: nunito;
}

input{
  border: 2px #b3ccff;
  border-radius: 2px;
  outline:none;
}

textarea {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
  resize:none;
}


#imported > textarea, input {
  border: 2px solid blue;
  border-radius: 2px;
  outline:none;
  resize:none;
}


a {
      text-decoration:none;
}




.column10prcnt {
    width: 10%;
}
.column20prcnt {
    width: 20%;
}
.column30prcnt {
    width: 30%;
}
.column40prcnt {
    width: 40%;
}
.column50prcnt {
    width: 50%;
}
.column60prcnt {
    width: 60%;
}
.column70prcnt {
    width: 70%;
}
.column80prcnt {
    width: 80%;
}
.column90prcnt {
    width: 90%;
}
.column100prcnt {
    width: 100%;
}


/*Button*/
.button {
  display: inline-block;
  border-radius: 15px;
  background-color: #b3ccff;
  border: none;
  color: #000000;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border:2px solid #2c3e50;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: 00bb;
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}





/*Drag & drop*/
#heading{
    height:100px;
  }

  #dragScriptContainer{ /* BIG DIV containing HTML needed for the entire script */
    width:1000px;
    margin:0 auto;
    border:1px solid  #b3ccff;
    border-radius: 10px;
    height:435px;
    margin-top:20px;
    padding:3px;
    -moz-user-select:no;
    background-color:white;
  }
    #questionDiv{ /* Big div for all the questions */
    float:right;
    height:100%;
    width:407px;
    border:4px solid #66a3ff;
    border-radius:5px;
    background-color:white;
    padding:2px;
  }
  #answerDiv{ /* Big div for all the answers */
    float:left;
    height:100%;
    width:200px;
   
    background-color:white;
    border-radius: 2px;

      
  }
  #questionDiv div,#answerDiv div,#dragContent div{ /* General rules for small divs - i.e. specific questions and answers */
    width:195px;
    height:50px;
    line-height:20px;   
    float:right;
    margin-right:2px;
    margin-bottom:2px;
    text-align:center;
    
  } 
  #dragContent div{ /* Drag content div - i.e. specific answers when they are beeing dragged */
    border:1px solid #000;
    border-radius: 5px;
    background-color: #66a3ff;


  }
  #answerDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid blue;
    cursor:pointer;
    border-radius: 5px;
    background-color: #66a3ff;
  }
  #questionDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid #000;
    cursor:pointer;
    background-color: #b3ccff;
    border-radius: 5px; 
  }
  #questionDiv div div{ /* DIV after it has been dragged from right to left box */
    margin:0px;
    border:0px;
    padding:0px;
    background-color:dodgerblue;
    border-radius: 5px;
  }
    #questionDiv .destinationBox{ /* Small empty boxes for the questions - i.e. where answers could be dragged */
    border:0px;
    background-color:#e6f0ff;
    width:195px;
    height:50px; 
    border-radius: 5px;
  }
  #questionDiv .correctAnswer{  /* CSS indicating correct answer */
    background-color:green;
    color:#fff;
    border:1px solid #000;
  }
  #questionDiv .wrongAnswer{  /* CSS indicating wrong answer */
    background-color:red;
    color:#fff;
    border:1px solid #000;
  }
  #dragContent div{
    background-color:lightblue;
  }
  #questionDiv .dragContentOver{  /* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#cce0ff;
  }
  #answerDiv.dragContentOver{ /* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#cce0ff;
  }
  /* NEVER CHANGE THIS */
  #dragContent{
    position:absolute;
    display:none;

  } 



/* Tabellen (Artikel/Opdracht) */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

div.table-title {
   display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.opdracht table-title h3 {
   color: #000000;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}

/*** Table Styles **/

.opdracht table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
 
.opdracht th {
  color: #000000;
  background:#b3ccff;
  font-size:23px;
  font-weight: 100;
  width:300px;
  padding:24px;
  text-align:middle;
  vertical-align:middle;
}

.opdracht th:first-child {
  border-top-left-radius:3px;
}
 
.opdracht th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
.opdracht tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#010729;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 
.opdracht tr:hover td {
  background:#00aaf8;
  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
.opdracht tr:first-child {
  border-top:none;
}

.opdracht tr:last-child {
  border-bottom:none;
}
 
.opdracht tr:nth-child(odd) td {
  background:#ffffffa1;
}
 
.opdracht tr:nth-child(odd):hover td {
background:#00aaf8;
}

.opdracht tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
.opdracht tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 
.opdracht td {
  background:#ffffffa1;
  padding:20px;
  text-align:center;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
}

.opdracht td:last-child {
  border-right: 0px;
}

.opdracht th.text-left {
  text-align: left;
}

.opdracht th.text-center {
  text-align: center;
}

.opdracht th.text-right {
  text-align: right;
}

.opdracht td.text-left {
  text-align: left;
}

.opdracht td.text-center {
  text-align: center;
}

.opdracht td.text-right {
  text-align: right;
}

.opdracht td a { 
   display: block; 
   padding: 10px; 
}



#content {
  margin:auto;
  text-align:center;
  padding:10px;
  background-color:rgba(255, 255, 255, 0.7);
  border:3px outset;
  border-radius:5px;
  display:block;
}

#knopaan {
  background-image: url(css/Images/knopAdd.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}

#knopuit {
  background-image: url(css/Images/knopRmv.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}








/* BEGIN MEMORY GAME CSS */

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
font-family: nunito;
  font-size: 16px;
}

.container {
  margin-right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards12{
  margin-left: 29.5%;
}

.cards16{
  margin-left: 26%;
}

.cards20{
  margin-left: 25%;
}

/*
 * Styles for the deck of cards
 */

.deck12{
  width: 600px;
  height: 680px;  
}

.deck16{
  width: 720px;
  height: 680px;  
}

.deck20{
  width: 720px;
  height: 680px;  
}

.deck { 
  background: #3867d6;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 3em;
}

.deck .card {
  height: 3.7rem;
  width: 3.7rem;
  margin: 0.2rem 0.2rem;
  background: #FFFFFF url('css/Images/obaLogoJunior.png') no-repeat center center / contain;
  font-size: 0;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

}

.deck .card img {
  display: none;
}

.deck .card.open {
  transform: rotateY(0);
  background: #ffffff;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.card.open img {
  display: block;
}

.card.match img {
  display: block;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #2ecc71;
  font-size: 33px;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
  text-align: left;
  margin-bottom: 10px;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
}

.fa-star {
  color: #FFD700;
}

.timer {
  display: inline-block;
  margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
  
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 85%;
  position: relative;
  transition: all 5s ease-in-out;
font-family: nunito;
}
  
.popup h2 {
  text-align: center;
  margin-top: 0;
  color: #333;
font-family: nunito;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #E5F720;
}

.popup .content-1,
.content-2 {
  max-height: 30%;
  overflow: auto;
  text-align: center;
}

.show {
  visibility: visible !important;
  opacity: 100 !important;
}

#starRating li {
  display: inline-block;
}

#play-again {
  background-color: #141214;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  display: block;
  margin: 0 auto;
  width: 50%;
font-family: nunito;
  color: #ffffff;
  border-radius: 5px;
}

/* animations */
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}


/****** Media queries
***************************/


@media (max-width: 320px) {

  .deck .card {
    height: 4.7rem;
    width: 4.7rem;
  }
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
  .container {
    font-size: 22px;
  }



  .deck .card {
    height: 125px;
    width: 125px;
  }

  .popup {
    width: 60%;
  }
}

/* END MEMORY GAME */




/* MASCOTTE */

/* Tooltip container */
.tooltip {
    position: fixed;
    display: inline-block;
    top: 25%;
    left: 5%;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 105%;
    left: 35%;
    margin-left: -60px;
}

/* Tooltip text */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}

`;
































































































var styleRood = `
@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  background-image: url(css/Images/roodGradient.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-size:100%;

color: black;
font-family: nunito;
}

input {
  border: 2px solid #ff7e4f;
  border-radius: 2px;
  outline:none;
}

textarea {
  border: 2px solid #ff7e4f;
  border-radius: 2px;
  outline:none;
}


#imported > textarea, input {
  border: 2px solid #ff7e4f;
  border-radius: 2px;
  outline:none;
}

select {
  border: 2px solid #ff7e4f;
  border-radius: 2px;
  outline:none;
}


a {
      text-decoration:none;
}



.column10prcnt {
    width: 10%;
}
.column20prcnt {
    width: 20%;
}
.column30prcnt {
    width: 30%;
}
.column40prcnt {
    width: 40%;
}
.column50prcnt {
    width: 50%;
}
.column60prcnt {
    width: 60%;
}
.column70prcnt {
    width: 70%;
}
.column80prcnt {
    width: 80%;
}
.column90prcnt {
    width: 90%;
}
.column100prcnt {
    width: 100%;
}



/*Button*/
.button {
  display: inline-block;
  border-radius: 15px;
  background-color: #ff7e4f;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border:2px solid #2c3e50;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  // content: '/00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}



/*Drag & drop*/
#heading{
    height:100px;
  }

  #dragScriptContainer{ /* BIG DIV containing HTML needed for the entire script */
    width:1000px;
    margin:0 auto;
    border:1px solid DodgerBlue;
    border-radius: 10px;
    height:435px;
    margin-top:20px;
    padding:3px;
    -moz-user-select:no;
    background-color:white;
  }
    #questionDiv{ /* Big div for all the questions */
    float:right;
    height:100%;
    width:407px;
    border:4px solid #ff7e4f;
    border-radius:5px;
    background-color:white;
    padding:2px;
  }
  #answerDiv{ /* Big div for all the answers */
    float:left;
    height:100%;
    width:200px;
   
    background-color:white;
    border-radius: 2px;

      
  }
  #questionDiv div,#answerDiv div,#dragContent div{ /* General rules for small divs - i.e. specific questions and answers */
    width:195px;
    height:50px;
    line-height:20px;   
    float:right;
    margin-right:2px;
    margin-bottom:2px;
    text-align:center;
    
  } 
  #dragContent div{ /* Drag content div - i.e. specific answers when they are beeing dragged */
    border:1px solid #000;
    border-radius: 5px;
    background-color: #66a3ff;


  }
  #answerDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid blue;
    cursor:pointer;
    border-radius: 5px;
    background-color: #ffa280;
  }
  #questionDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid #000;
    cursor:pointer;
    background-color:#ff571a;
    border-radius: 5px; 
  }
  #questionDiv div div{ /* DIV after it has been dragged from right to left box */
    margin:0px;
    border:0px;
    padding:0px;
    background-color:dodgerblue;
    border-radius: 5px;
  }
    #questionDiv .destinationBox{ /* Small empty boxes for the questions - i.e. where answers could be dragged */
    border:0px;
    background-color:#ffc7b3;
    width:195px;
    height:50px; 
    border-radius: 5px;
  }
  #questionDiv .correctAnswer{  /* CSS indicating correct answer */
    background-color:green;
    color:#fff;
    border:1px solid #000;
  }
  #questionDiv .wrongAnswer{  /* CSS indicating wrong answer */
    background-color:red;
    color:#fff;
    border:1px solid #000;
  }
  #dragContent div{
    background-color:lightblue;
  }
  #questionDiv .dragContentOver{  /* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#ffa280;
  }
  #answerDiv.dragContentOver{ /* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#ffa280;
  }
  /* NEVER CHANGE THIS */
  #dragContent{
    position:absolute;
    display:none;

  } 



/* Tabellen (Artikel/Opdracht) */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

div.table-title {
   display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.opdracht table-title h3 {
   color: #fafafa;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}

/*** Table Styles **/

.opdracht table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
 
.opdracht th {
  color: white;
  background:#ff7e4f;
  border-bottom:px solid;
  font-size:23px;
  font-weight: 100;
  width:300px;
  padding:24px;
  text-align:middle;
  vertical-align:middle;
}


.opdracht th:first-child {
  border-top-left-radius:3px;
}
 
.opdracht th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
.opdracht tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#010729;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 

.opdracht tr:hover td {
  background:#f55959;

  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
.opdracht tr:first-child {
  border-top:none;
}

.opdracht tr:last-child {
  border-bottom:none;
}
 
.opdracht tr:nth-child(odd) td {
  background:#fdfdfd9c;
}
 
.opdracht tr:nth-child(odd):hover td {
background:#f55959;

}

.opdracht tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
.opdracht tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 

.opdracht td {
  background:#fdfdfd9c;
  padding:20px;
  text-align:center;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
}

.opdracht td:last-child {
  border-right: 0px;
}

.opdracht th.text-left {
  text-align: left;
}

.opdracht th.text-center {
  text-align: center;
}

.opdracht th.text-right {
  text-align: right;
}

.opdracht td.text-left {
  text-align: left;
}

.opdracht td.text-center {
  text-align: center;
}

.opdracht td.text-right {
  text-align: right;
}

.opdracht td a { 
   display: block; 
   padding: 10px; 
}



#content {
  margin:auto;
  text-align:center;
  padding:10px;
  background-color:rgba(255, 255, 255, 0.7);
  border:3px outset;
  border-radius:5px;
  display:block;
}

#knopaan {
  background-image: url(css/Images/knopAdd.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}

#knopuit {
  background-image: url(css/Images/knopRmv.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}







/* BEGIN MEMORY GAME CSS */

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
font-family: nunito;
  font-size: 16px;
}

.container {
  margin-right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards12{
  margin-left: 29.5%;
}

.cards16{
  margin-left: 26%;
}

.cards20{
  margin-left: 25%;
}

/*
 * Styles for the deck of cards
 */

.deck12{
  width: 600px;
  height: 680px;  
}

.deck16{
  width: 720px;
  height: 680px;  
}

.deck20{
  width: 720px;
  height: 680px;  
}

.deck { 
  background: #b33939;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 3em;
}

.deck .card {
  height: 3.7rem;
  width: 3.7rem;
  margin: 0.2rem 0.2rem;
  background: #FFFFFF url('css/Images/obaLogoJunior.png') no-repeat center center / contain;
  font-size: 0;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

}

.deck .card img {
  display: none;
}

.deck .card.open {
  transform: rotateY(0);
  background: #ffffff;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.card.open img {
  display: block;
}

.card.match img {
  display: block;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #2ecc71;
  font-size: 33px;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
  text-align: left;
  margin-bottom: 10px;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
}

.fa-star {
  color: #FFD700;
}

.timer {
  display: inline-block;
  margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
  
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 85%;
  position: relative;
  transition: all 5s ease-in-out;
font-family: nunito;
}
  
.popup h2 {
  text-align: center;
  margin-top: 0;
  color: #333;
font-family: nunito;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #E5F720;
}

.popup .content-1,
.content-2 {
  max-height: 30%;
  overflow: auto;
  text-align: center;
}

.show {
  visibility: visible !important;
  opacity: 100 !important;
}

#starRating li {
  display: inline-block;
}

#play-again {
  background-color: #141214;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  display: block;
  margin: 0 auto;
  width: 50%;
font-family: nunito;
  color: #ffffff;
  border-radius: 5px;
}

/* animations */
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}


/****** Media queries
***************************/


@media (max-width: 320px) {

  .deck .card {
    height: 4.7rem;
    width: 4.7rem;
  }
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
  .container {
    font-size: 22px;
  }



  .deck .card {
    height: 125px;
    width: 125px;
  }

  .popup {
    width: 60%;
  }
}

/* END MEMORY GAME */


/* MASCOTTE */

/* Tooltip container */
.tooltip {
    position: fixed;
    display: inline-block;
    top: 25%;
    left: 5%;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 105%;
    left: 35%;
    margin-left: -60px;
}

/* Tooltip text */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}


`;













































































var styleGeel = `
@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  background-image: url(css/Images/geelGradient.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-size:100%;

color: black;
font-family: nunito;
}

input {
  border: solid #c8e322;
  border-radius: 2px;
  outline:none;
}

textarea {
  border: 2px solid #c8e322;
  border-radius: 2px;
  outline:none;
}


#imported > textarea, input {
  border: 2px solid #c8e322;
  border-radius: 2px;
  outline:none;
}

select {
  border: 2px solid #c8e322;
  border-radius: 2px;
  outline:none;
}

a {
      text-decoration:none;
}


.column10prcnt {
    width: 10%;
}
.column20prcnt {
    width: 20%;
}
.column30prcnt {
    width: 30%;
}
.column40prcnt {
    width: 40%;
}
.column50prcnt {
    width: 50%;
}
.column60prcnt {
    width: 60%;
}
.column70prcnt {
    width: 70%;
}
.column80prcnt {
    width: 80%;
}
.column90prcnt {
    width: 90%;
}
.column100prcnt {
    width: 100%;
}


/*Button*/
.button {
  display: inline-block;
  border-radius: 15px;
  background-color: #c8e322;
  border: none;
  color: #000000;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border:2px solid #2c3e50;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  // content: '/00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}



/*Drag & drop*/
#heading{
    height:100px;
  }

  #dragScriptContainer{ /* BIG DIV containing HTML needed for the entire script */
    width:1000px;
    margin:0 auto;
    border:1px solid DodgerBlue;
    border-radius: 10px;
    height:435px;
    margin-top:20px;
    padding:3px;
    -moz-user-select:no;
    background-color:white;
  }
    #questionDiv{ /* Big div for all the questions */
    float:right;
    height:100%;
    width:407px;
    border:4px solid #c8e322;
    border-radius:5px;
    background-color:white;
    padding:2px;
  }
  #answerDiv{ /* Big div for all the answers */
    float:left;
    height:100%;
    width:200px;
   
    background-color:white;
    border-radius: 2px;

      
  }
  #questionDiv div,#answerDiv div,#dragContent div{ /* General rules for small divs - i.e. specific questions and answers */
    width:195px;
    height:50px;
    line-height:20px;   
    float:right;
    margin-right:2px;
    margin-bottom:2px;
    text-align:center;
    
  } 
  #dragContent div{ /* Drag content div - i.e. specific answers when they are beeing dragged */
    border:1px solid #000;
    border-radius: 5px;
    background-color: #deee77;


  }
  #answerDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid blue;
    cursor:pointer;
    border-radius: 5px;
    background-color: #deee77;
  }
  #questionDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid #000;
    cursor:pointer;
    background-color:#c8e322;
    border-radius: 5px; 
  }
  #questionDiv div div{ /* DIV after it has been dragged from right to left box */
    margin:0px;
    border:0px;
    padding:0px;
    background-color:dodgerblue;
    border-radius: 5px;
  }
    #questionDiv .destinationBox{ /* Small empty boxes for the questions - i.e. where answers could be dragged */
    border:0px;
    background-color:#e9f4a4;
    width:195px;
    height:50px; 
    border-radius: 5px;
  }
  #questionDiv .correctAnswer{  /* CSS indicating correct answer */
    background-color:green;
    color:#fff;
    border:1px solid #000;
  }
  #questionDiv .wrongAnswer{  /* CSS indicating wrong answer */
    background-color:red;
    color:#fff;
    border:1px solid #000;
  }
  #dragContent div{
    background-color:lightblue;
  }
  #questionDiv .dragContentOver{  /* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#deee77;
  }
  #answerDiv.dragContentOver{ /* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#deee77;
  }
  /* NEVER CHANGE THIS */
  #dragContent{
    position:absolute;
    display:none;

  } 



/* Tabellen (Artikel/Opdracht) */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

div.table-title {
   display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.opdracht table-title h3 {
   color: #000000;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}

/*** Table Styles **/

.opdracht table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
 
.opdracht th {
  color: #000000;
  background:#c8e322;
  font-size:23px;
  font-weight: 100;
  width:300px;
  padding:24px;
  text-align:middle;
  vertical-align:middle;
}


.opdracht th:first-child {
  border-top-left-radius:3px;
}
 
.opdracht th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
.opdracht tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#010729;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 
.opdracht tr:hover td {
  background:#ffdf5f;

  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
.opdracht tr:first-child {
  border-top:none;
}

.opdracht tr:last-child {
  border-bottom:none;
}
 

.opdracht tr:nth-child(odd) td {
  background:#ffffffa3;
}
 
.opdracht tr:nth-child(odd):hover td {
background:#ffdf5f;

}

.opdracht tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
.opdracht tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 
.opdracht td {
  background:#ffffffa3;

  padding:20px;
  text-align:center;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
}

.opdracht td:last-child {
  border-right: 0px;
}

.opdracht th.text-left {
  text-align: left;
}

.opdracht th.text-center {
  text-align: center;
}

.opdracht th.text-right {
  text-align: right;
}

.opdracht td.text-left {
  text-align: left;
}

.opdracht td.text-center {
  text-align: center;
}

.opdracht td.text-right {
  text-align: right;
}

.opdracht td a { 
   display: block; 
   padding: 10px; 
}



a {
      text-decoration:none;
}



#content {
  margin:auto;
  text-align:center;
  padding:10px;
  background-color:rgba(255, 255, 255, 0.7);
  border:3px outset;
  border-radius:5px;
  display:block;
}

#knopaan {
  background-image: url(css/Images/knopAdd.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}

#knopuit {
  background-image: url(css/Images/knopRmv.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}










/* BEGIN MEMORY GAME CSS */

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
font-family: nunito;
  font-size: 16px;
}

.container {
  margin-right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards12{
  margin-left: 29.5%;
}

.cards16{
  margin-left: 26%;
}

.cards20{
  margin-left: 25%;
}

/*
 * Styles for the deck of cards
 */

.deck12{
  width: 600px;
  height: 680px;  
}

.deck16{
  width: 720px;
  height: 680px;  
}

.deck20{
  width: 720px;
  height: 680px;  
}

.deck { 
  background: #f7b731;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 3em;
}

.deck .card {
  height: 3.7rem;
  width: 3.7rem;
  margin: 0.2rem 0.2rem;
  background: #FFFFFF url('css/Images/obaLogoJunior.png') no-repeat center center / contain;
  font-size: 0;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

}

.deck .card img {
  display: none;
}

.deck .card.open {
  transform: rotateY(0);
  background: #ffffff;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.card.open img {
  display: block;
}

.card.match img {
  display: block;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #2ecc71;
  font-size: 33px;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
  text-align: left;
  margin-bottom: 10px;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
}

.fa-star {
  color: #FFD700;
}

.timer {
  display: inline-block;
  margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
  
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 85%;
  position: relative;
  transition: all 5s ease-in-out;
font-family: nunito;
}
  
.popup h2 {
  text-align: center;
  margin-top: 0;
  color: #333;
font-family: nunito;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #E5F720;
}

.popup .content-1,
.content-2 {
  max-height: 30%;
  overflow: auto;
  text-align: center;
}

.show {
  visibility: visible !important;
  opacity: 100 !important;
}

#starRating li {
  display: inline-block;
}

#play-again {
  background-color: #141214;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  display: block;
  margin: 0 auto;
  width: 50%;
font-family: nunito;
  color: #ffffff;
  border-radius: 5px;
}

/* animations */
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}


/****** Media queries
***************************/


@media (max-width: 320px) {

  .deck .card {
    height: 4.7rem;
    width: 4.7rem;
  }
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
  .container {
    font-size: 22px;
  }



  .deck .card {
    height: 125px;
    width: 125px;
  }

  .popup {
    width: 60%;
  }
}

/* END MEMORY GAME */



/* MASCOTTE */

/* Tooltip container */
.tooltip {
    position: fixed;
    display: inline-block;
    top: 25%;
    left: 5%;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 105%;
    left: 35%;
    margin-left: -60px;
}

/* Tooltip text */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}


`;




































var styleGroen = `
@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  background-image: url(css/Images/groenGradient.png);
background-repeat: no-repeat;
background-attachment: fixed;
background-size:100%;

color: black;
font-family: nunito;
}

input {
  border: 2px solid #66ffd9;
  border-radius: 2px;
  outline:none;
}

textarea {
  border: 2px solid #66ffd9;
  border-radius: 2px;
  outline:none;
}


#imported > textarea, input {
  border: 2px solid #66ffd9;
  border-radius: 2px;
  outline:none;
}

select {
  border: 2px solid #66ffd9;
  border-radius: 2px;
  outline:none;
}

a {
      text-decoration:none;
}


.column10prcnt {
    width: 10%;
}
.column20prcnt {
    width: 20%;
}
.column30prcnt {
    width: 30%;
}
.column40prcnt {
    width: 40%;
}
.column50prcnt {
    width: 50%;
}
.column60prcnt {
    width: 60%;
}
.column70prcnt {
    width: 70%;
}
.column80prcnt {
    width: 80%;
}
.column90prcnt {
    width: 90%;
}
.column100prcnt {
    width: 100%;
}

a {
      text-decoration:none;
}


/*Button*/
.button {
  display: inline-block;
  border-radius: 15px;
  background-color: #578a7d;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border:2px solid #2c3e50;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  // content: '/00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}


/*Drag & drop*/
#heading{
    height:100px;
  }

  #dragScriptContainer{ /* BIG DIV containing HTML needed for the entire script */
    width:1000px;
    margin:0 auto;
    border:1px solid DodgerBlue;
    border-radius: 10px;
    height:435px;
    margin-top:20px;
    padding:3px;
    -moz-user-select:no;
    background-color:white;
  }
    #questionDiv{ /* Big div for all the questions */
    float:right;
    height:100%;
    width:407px;
    border:4px solid #578a7d;
    border-radius:5px;
    background-color:white;
    padding:2px;
  }
  #answerDiv{ /* Big div for all the answers */
    float:left;
    height:100%;
    width:200px;
   
    background-color:white;
    border-radius: 2px;

      
  }
  #questionDiv div,#answerDiv div,#dragContent div{ /* General rules for small divs - i.e. specific questions and answers */
    width:195px;
    height:50px;
    line-height:20px;   
    float:right;
    margin-right:2px;
    margin-bottom:2px;
    text-align:center;
    
  } 
  #dragContent div{ /* Drag content div - i.e. specific answers when they are beeing dragged */
    border:1px solid #000;
    border-radius: 5px;
    background-color: #82b0a5;


  }
  #answerDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid blue;
    cursor:pointer;
    border-radius: 5px;
    background-color: #72a799;
  }
  #questionDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid #000;
    cursor:pointer;
    background-color:#578a7d;
    border-radius: 5px; 
  }
  #questionDiv div div{ /* DIV after it has been dragged from right to left box */
    margin:0px;
    border:0px;
    padding:0px;
    background-color:dodgerblue;
    border-radius: 5px;
  }
    #questionDiv .destinationBox{ /* Small empty boxes for the questions - i.e. where answers could be dragged */
    border:0px;
    background-color:#c0d8d2;
    width:195px;
    height:50px; 
    border-radius: 5px;
  }
  #questionDiv .correctAnswer{  /* CSS indicating correct answer */
    background-color:green;
    color:#fff;
    border:1px solid #000;
  }
  #questionDiv .wrongAnswer{  /* CSS indicating wrong answer */
    background-color:red;
    color:#fff;
    border:1px solid #000;
  }
  #dragContent div{
    background-color:lightblue;
  }
  #questionDiv .dragContentOver{  /* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#82b0a5;
  }
  #answerDiv.dragContentOver{ /* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#82b0a5;
  }
  /* NEVER CHANGE THIS */
  #dragContent{
    position:absolute;
    display:none;

  } 


/* Tabellen (Artikel/Opdracht) */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

div.table-title {
   display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.opdracht table-title h3 {
   color: #fafafa;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}

/*** Table Styles **/

.opdracht table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

.opdracht th {
  color: white;
  background:#578a7d;
  font-size:23px;
  font-weight: 100;
  width:300px;
  padding:24px;
  text-align:middle;
  vertical-align:middle;
}


.opdracht th:first-child {
  border-top-left-radius:3px;
}
 
.opdracht th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
.opdracht tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#010729;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 

.opdracht tr:hover td {
  background:#99f6a2;

  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
.opdracht tr:first-child {
  border-top:none;
}

.opdracht tr:last-child {
  border-bottom:none;
}
 

.opdracht tr:nth-child(odd) td {
  background:#fffffff2;
}
 
.opdracht tr:nth-child(odd):hover td {
background:#99f6a2;

}

.opdracht tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
.opdracht tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 

.opdracht td {
  background:#fffffff2;
  padding:20px;
  text-align:center;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
}

.opdracht td:last-child {
  border-right: 0px;
}

.opdracht th.text-left {
  text-align: left;
}

.opdracht th.text-center {
  text-align: center;
}

.opdracht th.text-right {
  text-align: right;
}

.opdracht td.text-left {
  text-align: left;
}

.opdracht td.text-center {
  text-align: center;
}

.opdracht td.text-right {
  text-align: right;
}

.opdracht td a { 
   display: block; 
   padding: 10px; 
}


#content {
  margin:auto;
  text-align:center;
  padding:10px;
  background-color:rgba(255, 255, 255, 0.9);
  border:3px outset;
  border-radius:5px;
  display:block;
}

#knopaan {
  background-image: url(css/Images/knopAdd.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}

#knopuit {
  background-image: url(css/Images/knopRmv.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}










/* BEGIN MEMORY GAME CSS */

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
font-family: nunito;
  font-size: 16px;
}

.container {
  margin-right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards12{
  margin-left: 29.5%;
}

.cards16{
  margin-left: 26%;
}

.cards20{
  margin-left: 25%;
}

/*
 * Styles for the deck of cards
 */

.deck12{
  width: 600px;
  height: 680px;  
}

.deck16{
  width: 720px;
  height: 680px;  
}

.deck20{
  width: 720px;
  height: 680px;  
}

.deck { 
  background: #05c46b;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 3em;
}

.deck .card {
  height: 3.7rem;
  width: 3.7rem;
  margin: 0.2rem 0.2rem;
  background: #FFFFFF url('css/Images/obaLogoJunior.png') no-repeat center center / contain;
  font-size: 0;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

}

.deck .card img {
  display: none;
}

.deck .card.open {
  transform: rotateY(0);
  background: #ffffff;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.card.open img {
  display: block;
}

.card.match img {
  display: block;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #2ecc71;
  font-size: 33px;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
  text-align: left;
  margin-bottom: 10px;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
}

.fa-star {
  color: #FFD700;
}

.timer {
  display: inline-block;
  margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
  
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 85%;
  position: relative;
  transition: all 5s ease-in-out;
font-family: nunito;
}
  
.popup h2 {
  text-align: center;
  margin-top: 0;
  color: #333;
font-family: nunito;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #E5F720;
}

.popup .content-1,
.content-2 {
  max-height: 30%;
  overflow: auto;
  text-align: center;
}

.show {
  visibility: visible !important;
  opacity: 100 !important;
}

#starRating li {
  display: inline-block;
}

#play-again {
  background-color: #141214;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  display: block;
  margin: 0 auto;
  width: 50%;
font-family: nunito;
  color: #ffffff;
  border-radius: 5px;
}

/* animations */
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}


/****** Media queries
***************************/


@media (max-width: 320px) {

  .deck .card {
    height: 4.7rem;
    width: 4.7rem;
  }
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
  .container {
    font-size: 22px;
  }



  .deck .card {
    height: 125px;
    width: 125px;
  }

  .popup {
    width: 60%;
  }
}

/* END MEMORY GAME */



/* MASCOTTE */

/* Tooltip container */
.tooltip {
    position: fixed;
    display: inline-block;
    top: 25%;
    left: 5%;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 105%;
    left: 35%;
    margin-left: -60px;
}

/* Tooltip text */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}



`;







































var styleRoze = `
@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
background-image: url(css/Images/rozeGradient.svg);
background-repeat: no-repeat;
background-attachment: fixed;
background-size:100%;

color: black;
font-family: nunito;
}

input{
  border: 2px solid #cc00cc;
  border-radius: 2px;
  outline:none;
}

textarea {
  border: 2px solid #cc00cc;
  border-radius: 2px;
  outline:none;
}


#imported > textarea, input {
  border: 2px solid #cc00cc;
  border-radius: 2px;
  outline:none;
}

select {
  border: 2px solid #cc00cc;
  border-radius: 2px;
  outline:none;
}



a {
      text-decoration:none;
}


.column10prcnt {
    width: 10%;
}
.column20prcnt {
    width: 20%;
}
.column30prcnt {
    width: 30%;
}
.column40prcnt {
    width: 40%;
}
.column50prcnt {
    width: 50%;
}
.column60prcnt {
    width: 60%;
}
.column70prcnt {
    width: 70%;
}
.column80prcnt {
    width: 80%;
}
.column90prcnt {
    width: 90%;
}
.column100prcnt {
    width: 100%;
}


/*Button*/
.button {
  display: inline-block;
  border-radius: 15px;
  background-color: #ff1cff;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border:2px solid #2c3e50;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  // content: '/00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}


/*Drag & drop*/
#heading{
    height:100px;
  }

  #dragScriptContainer{ /* BIG DIV containing HTML needed for the entire script */
    width:1000px;
    margin:0 auto;
    border:1px solid DodgerBlue;
    border-radius: 10px;
    height:435px;
    margin-top:20px;
    padding:3px;
    -moz-user-select:no;
    background-color:white;
  }
    #questionDiv{ /* Big div for all the questions */
    float:right;
    height:100%;
    width:407px;
    border:4px solid #ff1cff;
    border-radius:5px;
    background-color:white;
    padding:2px;
  }
  #answerDiv{ /* Big div for all the answers */
    float:left;
    height:100%;
    width:200px;
   
    background-color:white;
    border-radius: 2px;

      
  }
  #questionDiv div,#answerDiv div,#dragContent div{ /* General rules for small divs - i.e. specific questions and answers */
    width:195px;
    height:50px;
    line-height:20px;   
    float:right;
    margin-right:2px;
    margin-bottom:2px;
    text-align:center;
    
  } 
  #dragContent div{ /* Drag content div - i.e. specific answers when they are beeing dragged */
    border:1px solid #000;
    border-radius: 5px;
    background-color: #ffb3ff;


  }
  #answerDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid blue;
    cursor:pointer;
    border-radius: 5px;
    background-color: #ff80ff;
  }
  #questionDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid #000;
    cursor:pointer;
    background-color:#ff1cff;
    border-radius: 5px; 
  }
  #questionDiv div div{ /* DIV after it has been dragged from right to left box */
    margin:0px;
    border:0px;
    padding:0px;
    background-color:dodgerblue;
    border-radius: 5px;
  }
    #questionDiv .destinationBox{ /* Small empty boxes for the questions - i.e. where answers could be dragged */
    border:0px;
    background-color:#ffb3ff;
    width:195px;
    height:50px; 
    border-radius: 5px;
  }
  #questionDiv .correctAnswer{  /* CSS indicating correct answer */
    background-color:green;
    color:#fff;
    border:1px solid #000;
  }
  #questionDiv .wrongAnswer{  /* CSS indicating wrong answer */
    background-color:red;
    color:#fff;
    border:1px solid #000;
  }
  #dragContent div{
    background-color:lightblue;
  }
  #questionDiv .dragContentOver{  /* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#ff80ff;
  }
  #answerDiv.dragContentOver{ /* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#ff80ff;
  }
  /* NEVER CHANGE THIS */
  #dragContent{
    position:absolute;
    display:none;

  } 



/* Tabellen (Artikel/Opdracht) */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

div.table-title {
   display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.opdracht table-title h3 {
   color: #fafafa;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}

/*** Table Styles **/

.opdracht table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

.opdracht th {
  color: white;
  background:#ff1cff;
  font-size:23px;
  font-weight: 100;
  width:300px;
  padding:24px;
  text-align:middle;
  vertical-align:middle;
}


.opdracht th:first-child {
  border-top-left-radius:3px;
}
 
.opdracht th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
.opdracht tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#010729;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 
.opdracht tr:hover td {
  background:#fbabe0;
  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
.opdracht tr:first-child {
  border-top:none;
}

.opdracht tr:last-child {
  border-bottom:none;
}

.opdracht tr:nth-child(odd) td {
  background:#ffffffbf;
}
 
.opdracht tr:nth-child(odd):hover td {
background:#fbabe0;

}

.opdracht tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
.opdracht tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 

.opdracht td {
  background:#ffffffbf;

  padding:20px;
  text-align:center;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
}

.opdracht td:last-child {
  border-right: 0px;
}

.opdracht th.text-left {
  text-align: left;
}

.opdracht th.text-center {
  text-align: center;
}

.opdracht th.text-right {
  text-align: right;
}

.opdracht td.text-left {
  text-align: left;
}

.opdracht td.text-center {
  text-align: center;
}

.opdracht td.text-right {
  text-align: right;
}

.opdracht td a { 
   display: block; 
   padding: 10px; 
}


#content {
  margin:auto;
  text-align:center;
  padding:10px;
  background-color:rgba(255, 255, 255, 0.7);
  border:3px outset;
  border-radius:5px;
  display:block;
}

#knopaan {
  background-image: url(css/Images/knopAdd.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}

#knopuit {
  background-image: url(css/Images/knopRmv.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}












/* BEGIN MEMORY GAME CSS */

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
font-family: nunito;
  font-size: 16px;
}

.container {
  margin-right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards12{
  margin-left: 29.5%;
}

.cards16{
  margin-left: 26%;
}

.cards20{
  margin-left: 25%;
}

/*
 * Styles for the deck of cards
 */

.deck12{
  width: 600px;
  height: 680px;  
}

.deck16{
  width: 720px;
  height: 680px;  
}

.deck20{
  width: 720px;
  height: 680px;  
}

.deck { 
  background: #FC427B;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 3em;
}

.deck .card {
  height: 3.7rem;
  width: 3.7rem;
  margin: 0.2rem 0.2rem;
  background: #FFFFFF url('css/Images/obaLogoJunior.png') no-repeat center center / contain;
  font-size: 0;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

}

.deck .card img {
  display: none;
}

.deck .card.open {
  transform: rotateY(0);
  background: #ffffff;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.card.open img {
  display: block;
}

.card.match img {
  display: block;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #2ecc71;
  font-size: 33px;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
  text-align: left;
  margin-bottom: 10px;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
}

.fa-star {
  color: #FFD700;
}

.timer {
  display: inline-block;
  margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
  
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 85%;
  position: relative;
  transition: all 5s ease-in-out;
font-family: nunito;
}
  
.popup h2 {
  text-align: center;
  margin-top: 0;
  color: #333;
font-family: nunito;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #E5F720;
}

.popup .content-1,
.content-2 {
  max-height: 30%;
  overflow: auto;
  text-align: center;
}

.show {
  visibility: visible !important;
  opacity: 100 !important;
}

#starRating li {
  display: inline-block;
}

#play-again {
  background-color: #141214;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  display: block;
  margin: 0 auto;
  width: 50%;
font-family: nunito;
  color: #ffffff;
  border-radius: 5px;
}

/* animations */
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}


/****** Media queries
***************************/


@media (max-width: 320px) {

  .deck .card {
    height: 4.7rem;
    width: 4.7rem;
  }
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
  .container {
    font-size: 22px;
  }



  .deck .card {
    height: 125px;
    width: 125px;
  }

  .popup {
    width: 60%;
  }
}

/* END MEMORY GAME */




/* MASCOTTE */

/* Tooltip container */
.tooltip {
    position: fixed;
    display: inline-block;
    top: 25%;
    left: 5%;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 105%;
    left: 35%;
    margin-left: -60px;
}

/* Tooltip text */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}



`;
















































var stylePaars = `
@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
background-image: url(css/Images/paarsGradient.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-size:100%;

color: black;
font-family: nunito;
}

input {
  border: 2px solid #cc99ff;
  border-radius: 2px;
  outline:none;
}

textarea {
  border: 2px solid #cc99ff;
  border-radius: 2px;
  outline:none;
}


#imported > textarea, input {
  border: 2px solid #cc99ff;
  border-radius: 2px;
  outline:none;
}

select {
  border: 2px solid #cc99ff;
  border-radius: 2px;
  outline:none;
}
a {
      text-decoration:none;
}



.column10prcnt {
    width: 10%;
}
.column20prcnt {
    width: 20%;
}
.column30prcnt {
    width: 30%;
}
.column40prcnt {
    width: 40%;
}
.column50prcnt {
    width: 50%;
}
.column60prcnt {
    width: 60%;
}
.column70prcnt {
    width: 70%;
}
.column80prcnt {
    width: 80%;
}
.column90prcnt {
    width: 90%;
}
.column100prcnt {
    width: 100%;
}


a {
      text-decoration:none;
}

/*Button*/
.button {
  display: inline-block;
  border-radius: 15px;
  background-color: #cc99ff;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border:2px solid #2c3e50;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  // content: '/00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}


/*Drag & drop*/
#heading{
    height:100px;
  }

  #dragScriptContainer{ /* BIG DIV containing HTML needed for the entire script */
    width:1000px;
    margin:0 auto;
    border:1px solid DodgerBlue;
    border-radius: 10px;
    height:435px;
    margin-top:20px;
    padding:3px;
    -moz-user-select:no;
    background-color:white;
  }
    #questionDiv{ /* Big div for all the questions */
    float:right;
    height:100%;
    width:407px;
    border:4px solid #9933ff;
    border-radius:5px;
    background-color:white;
    padding:2px;
  }
  #answerDiv{ /* Big div for all the answers */
    float:left;
    height:100%;
    width:200px;
   
    background-color:white;
    border-radius: 2px;

      
  }
  #questionDiv div,#answerDiv div,#dragContent div{ /* General rules for small divs - i.e. specific questions and answers */
    width:195px;
    height:50px;
    line-height:20px;   
    float:right;
    margin-right:2px;
    margin-bottom:2px;
    text-align:center;
    
  } 
  #dragContent div{ /* Drag content div - i.e. specific answers when they are beeing dragged */
    border:1px solid #000;
    border-radius: 5px;
    background-color: #66a3ff;


  }
  #answerDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid blue;
    cursor:pointer;
    border-radius: 5px;
    background-color: #cc99ff ;
  }
  #questionDiv .dragDropSmallBox{ /* Small answer divs */
    border:1px solid #000;
    cursor:pointer;
    background-color:#9933ff;
    border-radius: 5px; 
  }
  #questionDiv div div{ /* DIV after it has been dragged from right to left box */
    margin:0px;
    border:0px;
    padding:0px;
    background-color:dodgerblue;
    border-radius: 5px;
  }
    #questionDiv .destinationBox{ /* Small empty boxes for the questions - i.e. where answers could be dragged */
    border:0px;
    background-color:#e6ccff;
    width:195px;
    height:50px; 
    border-radius: 5px;
  }
  #questionDiv .correctAnswer{  /* CSS indicating correct answer */
    background-color:green;
    color:#fff;
    border:1px solid #000;
  }
  #questionDiv .wrongAnswer{  /* CSS indicating wrong answer */
    background-color:red;
    color:#fff;
    border:1px solid #000;
  }
  #dragContent div{
    background-color:lightblue;
  }
  #questionDiv .dragContentOver{  /* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#cc99ff ;
  }
  #answerDiv.dragContentOver{ /* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
    border:0.5px solid #F00;
    border-radius: 5px;
    background-color:#cc99ff ;
  }
  /* NEVER CHANGE THIS */
  #dragContent{
    position:absolute;
    display:none;

  } 


/* Tabellen (Artikel/Opdracht) */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

div.table-title {
   display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.opdracht table-title h3 {
   color: #fafafa;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}

/*** Table Styles **/

.opdracht table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
 
.opdracht th {
  color: white;
  background:#cc99ff;
  font-size:23px;
  font-weight: 100;
  width:300px;
  padding:24px;
  text-align:middle;
  vertical-align:middle;
}


.opdracht th:first-child {
  border-top-left-radius:3px;
}
 
.opdracht th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
.opdracht tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#010729;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 

.opdracht tr:hover td {
  background:#eb96f8;

  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
.opdracht tr:first-child {
  border-top:none;
}

.opdracht tr:last-child {
  border-bottom:none;
}
 
.opdracht tr:nth-child(odd) td {
  background:#fffffff0;
}
 
.opdracht tr:nth-child(odd):hover td {
background:#eb96f8;

}

.opdracht tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
.opdracht tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 

.opdracht td {
  background:#fffffff0;

  padding:20px;
  text-align:center;
  vertical-align:middle;
  
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
}



.opdracht td:last-child {

  border-right: 0px;
}

.opdracht th.text-left {
  text-align: left;
}

.opdracht th.text-center {
  text-align: center;
}

.opdracht th.text-right {
  text-align: right;
}

.opdracht td.text-left {
  text-align: left;
}

.opdracht td.text-center {
  text-align: center;
}

.opdracht td.text-right {
  text-align: right;
}

.opdracht td a { 
   display: block; 
   padding: 10px; 
}


#content {
  margin:auto;
  text-align:center;
  padding:10px;
  background-color:rgba(255, 255, 255, 0.7);
  border:3px outset;
  border-radius:5px;
  display:block;
}

#knopaan {
  background-image: url(css/Images/knopAdd.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}

#knopuit {
  background-image: url(css/Images/knopRmv.jpg);
  width:100px;
  height:100px;
  border-radius:5px;
  padding-top:73px;
  border:2px solid #2c3e50;
}








/* BEGIN MEMORY GAME CSS */

@font-face{
  font-family: "nunito";
  src:url("/DigitaleLeeromgeving/css/fonts/Nunito-Medium.ttf");
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
font-family: nunito;
  font-size: 16px;
}

.container {
  margin-right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards12{
  margin-left: 29.5%;
}

.cards16{
  margin-left: 26%;
}

.cards20{
  margin-left: 25%;
}

/*
 * Styles for the deck of cards
 */

.deck12{
  width: 600px;
  height: 680px;  
}

.deck16{
  width: 720px;
  height: 680px;  
}

.deck20{
  width: 720px;
  height: 680px;  
}

.deck { 
  background: #a55eea;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 3em;
}

.deck .card {
  height: 3.7rem;
  width: 3.7rem;
  margin: 0.2rem 0.2rem;
  background: #FFFFFF url('css/Images/obaLogoJunior.png') no-repeat center center / contain;
  font-size: 0;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

}

.deck .card img {
  display: none;
}

.deck .card.open {
  transform: rotateY(0);
  background: #ffffff;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.card.open img {
  display: block;
}

.card.match img {
  display: block;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #2ecc71;
  font-size: 33px;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
  text-align: left;
  margin-bottom: 10px;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
}

.fa-star {
  color: #FFD700;
}

.timer {
  display: inline-block;
  margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
  
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 85%;
  position: relative;
  transition: all 5s ease-in-out;
font-family: nunito;
}
  
.popup h2 {
  text-align: center;
  margin-top: 0;
  color: #333;
font-family: nunito;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #E5F720;
}

.popup .content-1,
.content-2 {
  max-height: 30%;
  overflow: auto;
  text-align: center;
}

.show {
  visibility: visible !important;
  opacity: 100 !important;
}

#starRating li {
  display: inline-block;
}

#play-again {
  background-color: #141214;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  display: block;
  margin: 0 auto;
  width: 50%;
font-family: nunito;
  color: #ffffff;
  border-radius: 5px;
}

/* animations */
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}


/****** Media queries
***************************/


@media (max-width: 320px) {

  .deck .card {
    height: 4.7rem;
    width: 4.7rem;
  }
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
  .container {
    font-size: 22px;
  }



  .deck .card {
    height: 125px;
    width: 125px;
  }

  .popup {
    width: 60%;
  }
}

/* END MEMORY GAME */




/* MASCOTTE */

/* Tooltip container */
.tooltip {
    position: fixed;
    display: inline-block;
    top: 25%;
    left: 5%;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 105%;
    left: 35%;
    margin-left: -60px;
}

/* Tooltip text */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}


`;