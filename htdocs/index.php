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

<div class="container text-center">
  <div class="row justify-content-start">
    <div class="col-2 row justify-content-start">
       <!-- One of two columns -->
       <div class="list-group">
 
  <button type="button" class="list-group-item list-group-item-action">A second button item</button>
  <button type="button" class="list-group-item list-group-item-action">A third button item</button>
  <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
  
</div>
       
      
    </div>
    <div class="col-10">
      <!-- One of two columns -->




    </div>
  </div>




   









<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>