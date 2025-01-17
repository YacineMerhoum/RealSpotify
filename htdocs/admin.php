<?php
session_start();
// include "./config/verif_superglobal.php";
require_once "./config/connexion.php";


$prepareSQL = $connexion->prepare("SELECT * FROM songs");
$prepareSQL->execute();
$songlist = $prepareSQL->fetch(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spotify</title>
  <script src="https://kit.fontawesome.com/23471b5a81.js" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="./style/style.css">
</head>
<header>
  <nav class="navbar  nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.php" alt="menu">
        <img class="logo" src="./images/spotify.png">
      </a>

    </div>
  </nav>
</header>

<body>


  <section class="d-flex flex-column text-center">
  
  <h1 class="fs-1 text-white mb-5 mt-5">Page administrateur</h1>
  <h1 class="fs-5 text-white mb-5 ">Réservé aux bg</h1>
    <div class="fs-3 d-flex justify-content-center">
  <form action="./process/add_song_admin.php" method="post">

      <input class="mb-5" type="text" name="url" placeholder="url"><br>
      <input class="mb-5" type="text" name="cover" placeholder="cover"><br>
      <input class="mb-5"type="text" name="name" placeholder="name"><br>
      <input class="mb-5" type="text" name="artiste" placeholder="artiste"><br>
      <input class="mb-5" type="hidden" name="like" value="0"><br>

      <button class="bg-success text-white" type="submit">Ajouter musique</button>

    </form>
    </div>
  </section>
</body>

<script src="./js/index.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>