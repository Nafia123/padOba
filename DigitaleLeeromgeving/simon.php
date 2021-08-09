<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body

/* Css */
.overlay {
    margin-left: 25%;
    margin-top: 5%;
    margin-right: 25%;
    height: 50%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    overflow-x: hidden;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
    color: #f1f1f1;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
</head>
<body>

<div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <div class="overlay-content">
    <a href="#">Item1</a>
    <a href="#">Item2</a>
    <a href="#">Item3</a>
    <a href="#">Item4</a>
  </div>
</div>

<h2>Fullscreen Overlay Nav Example</h2>
<p>Click on the element below to open the fullscreen overlay navigation menu.</p>
<p>In this example, the navigation menu will slide in, from left to right:</p>
<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>

<!-- Voert Javascript uit om de overlay te open en sluiten -->
<script>
    // Opent de overlay    
function openNav() {
    document.getElementById("myNav").style.width = "50%";
}

// Sluit de overlay
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
</script>
     
</body>
</html>
