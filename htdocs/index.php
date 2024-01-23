<?php
session_start();
include "./config/verif_superglobal.php";
require_once "./config/connexion.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="./style/style.css">
</head>
<header>
<nav class="navbar  nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php" alt="menu">
        <img class="logo" src="./images/spotify.png">
    </a>

    <a href="./register.php">
      <!-- inscription  -->
      <button class="btn btn-outline fs-5 subscribe " type="submit">S'inscrire</button>
</a>

  <form action="./process/logout.php" method="post">
          <button type="submit">deconnexion</button>
  </form>

    <a href="./pagelogin.php">
      <!-- connexion session  -->
      <button type="submit login" class="btn btn-light fs-5 login">Connexion</button>

</a>
  </div>
</nav>
</header>
<body>
<!-- boutons de droite  -->
<div class="row g-0 text-center">

  <div class="col-2 col-md-2">
  <div class="d-grid col-6 ">
  <button class="btn btn-flex mt-3" type="button"><a href="./index.php">Accueil</a></button>
  <button class="btn btn-flex" type="button"><a href="">Rechercher</a></button>
  <button class="btn btn-flex mt-1" type="button"><a href="">Bibiliothèque</a></button>
  <div class="test">
    <div class="inside ">
    <button class="btn btn-flex mt-5 btninside" type="button"><a href="">Créer une playlist</a></button>
    
    <p class="text-white fs-5 mt-1">C'est simple nous allons vous aider</p>
    </div>
  </div>
</div>
    
 
  </div>





<!-- grosse partie droite  Le code doit se passer ici !! -->
  <div class="col-sm-10 col-md-10">
    <div class="secteur">
      <br>
      <p class="text-white fs-3">Connectez-vous pour accéder à vos Playlists</p>
      





    
    
    
    </div>
</div>
</div>










   









<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>