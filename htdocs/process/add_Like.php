<?php
session_start();
// include "./config/verif_superglobal.php";
require_once "../config/connexion.php";


$prepareSQL2 = $connexion->prepare("SELECT * FROM songs");
$prepareSQL2->execute();
$songlist = $prepareSQL2->fetch(PDO::FETCH_ASSOC);




$SQLrequest = $connexion->prepare(
    "SELECT * FROM users JOIN liked ON users.id = liked.id_user");
$SQLrequest->execute(
    $_SESSION['id']
);

// if (dans la base de donne like = 0) {

//     if (si like = 1 ) {

//         header location sorry deja like 
        
//         insert id user
//         insert 
//         retourne 1
//     }
// } else {
//     retourne 0
// }


// recuperer id song get
// verifier si ca existe dja dans liked
// insert id song et id user dans la table liked 




echo $_GET['like'];