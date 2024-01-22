<?php
// include "./config/verif_superglobal.php";
require_once "./config/connexion.php";
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="./style/style.css">
</head>
<body>
<header>
<nav class="navbar  nav ">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php" alt="menu">
        <img class="logo" src="./images/spotify.png">
    </a>
</div>
</nav>
</header>
<!-- Section pour connnexion -->
<section class="sectionlog container">
    <div class="text-center">
        <h1 class="text-white ">Inscription</h1>
    </div>

<!-- connection formulaire -->
    <form action="" method="post">
  <div class="mb-3 text-center">
    <label for="exampleInputEmail1" class="form-label text-white">Adresse mail</label>
    <input type="email" class="form-control" name="mail">
    <div id="emailHelp" class="form-text text-secondary">Tu ne vas pas le regretter</div>
  </div>
  <div class="mb-3 text-center">
    <label for="exampleInputPassword1" class="form-label text-white" name="password">Mot de passe</label>
    <input type="password" class="form-control" >
  </div>
  
  <button type="submit" class="btn btn- bouton mt-5 ">S'inscrire</button>
</form>






</section>

    
    
</body>
</html>