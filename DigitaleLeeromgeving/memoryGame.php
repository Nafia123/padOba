    <?php
    include 'dbClass.php';
    include 'dbInfo.php';
    include 'mascotte.php';
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
    cssHTML();

    //Maak connectie met db, print error als mislukt
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn-> connect_error){
        die("Connectie gefaald: " . $conn->connect_error);
    }

    //Gebruikt id om data uit de database the halen
    $i = $_GET['id'];
    $sql= "SELECT * FROM oba2.memorygame WHERE memoryGameId = '$i'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    ?>

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Memory Game</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">

        <?php
        $titel = $row['titel'];
        ?>
    </head>
    <body>

        <div style="position:absolute; margin-top:-100px;margin-left:91.5%;">
    <a href="/DigitaleLeeromgeving/hoofdmenu.php">
        <button class="button"><span><- Terug naar hoofdmenu</span></button>
    </a>
</div>

        <div class="container">
            <header>
                <h1 id='content' align="center" style="width: 720px; height:90px; border-radius:50px;">
                <?php echo $titel ?>
            </header>
            <section class="score-panel">
             <ul class="stars">
                <?php
                for($x = 0; $x <= 2; $x++)
                    echo '<li><i class="fa fa-star"></i></li>';
                ?>
            </ul>

            <span class="moves">0</span> Zetten

            <div class="timer">
            </div>

            <div class="restart" onclick=startGame()>
              <i class="fa fa-repeat"></i>
          </div>
      </section>

  </div>

  <?php
  if ($row['memoryObj10'] == null && $row['memoryObj8'] == null){
    ?>
    <div class="cards12">
      <ul class="deck deck12 containerColor" id="card-deck">
          <?php $template_string = '<li class="card" type="pair%s"> <img src="%s" height="100 px" width="100 px"> </li>';
          for ($x = 1; $x <= 10; $x++) {
            if ($row['memoryObj' . $x] != null) {
                echo sprintf($template_string, $x, $row['memoryObj' . $x]);
                echo sprintf($template_string, $x, $row['memoryObj' . $x]);
            } 
        }
    }
    ?>

    <?php
    if ($row['memoryObj10'] == null && $row['memoryObj8'] != null){
        ?>
        <div class="cards16">
          <ul class="deck deck16 containerColor" id="card-deck">
              <?php $template_string = '<li class="card" type="pair%s"> <img src="%s" height="100 px" width="100 px"> </li>';
              for ($x = 1; $x <= 10; $x++) {
                if ($row['memoryObj' . $x] != null) {
                    echo sprintf($template_string, $x, $row['memoryObj' . $x]);
                    echo sprintf($template_string, $x, $row['memoryObj' . $x]);
                } 
            }
        }
        ?>

        <?php
        if ($row['memoryObj10'] != null){
            ?>
            <div class="cards20">
              <ul class="deck deck20 containerColor" id="card-deck">
                  <?php $template_string = '<li class="card" type="pair%s"> <img src="%s" height="100 px" width="100 px"> </li>';
                  for ($x = 1; $x <= 10; $x++) {
                    if ($row['memoryObj' . $x] != null) {
                        echo sprintf($template_string, $x, $row['memoryObj' . $x]);
                        echo sprintf($template_string, $x, $row['memoryObj' . $x]);
                    } 
                }
            }
            ?>
        </ul>

        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>Gefeliciteerd!</h2>
                <a class="close" href=# >×</a>
                <div class="content-1">
                    Gefeliciteerd! Jij hebt gewonnen!
                </div>
                <div class="content-2">
                    <p>Jij hebt <span id=finalMove> </span> zetten gedaan </p>
                    <p>in <span id=totalTime></span></p>
                    <p>Score:  <span id=starRating></span></p>
                </div>
                <button id="play-again"onclick="playAgain()">
                Nog een keer?</a>
            </button>
        </div>
    </div>

</div>
<script src="memoryGame.js"></script>
</body>
</html>