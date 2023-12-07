<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hangman";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
     if ($conn){
       //echo"connected";
     }
     if ($conn === false)
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    }
catch(PDOException $e)
    {
    echo "Připojení selhalo: " . $e->getMessage();
    }
?>
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
  <title>Ukolnik</title>
</head>
<body class="bg-secondary">
<div class="container py-4">
  <form action="">
    <div class="navbar navbar-dark">
    <h2>Úkolník</h2>
    </div>
  <table id="calendar" class="table table-striped-columns">
    <thead>
      <tr>
        <th>Pondělí</th>
        <th>Úterý</th>
        <th>Středa</th>
        <th>Čtvrtek</th>
        <th>Pátek</th>
        <th>Sobota</th>
        <th>Neděle</th>
      </tr>
    </thead>
    <tbody class="table table-striped-columns"></tbody>
  </table>



    </div>

  </form>
  </div>
  <script src="script.js"></script>
</body>
</html>