<?php 
session_start();
include "./config/verif_superglobal.php";


if (!empty($_POST['email']) && !empty($_POST['password'])) {

    require_once '../config/connexion.php';

    $preparedRequest = $connexion->prepare("SELECT * FROM user WHERE email = ?");
    $preparedRequest->execute([
        $_POST['email']
    ]);

    $user = $preparedRequest->fetch(PDO::FETCH_ASSOC);

    if (empty($user)) {
        header('Location: ../../login.php?error=Email incorrect');
        die;
    }

    $isverified = password_verify($_POST['password'], $user['password']);
    if ($isverified) {
        
        $_SESSION['id'] = $user['id'];
        $_SESSION['pseudo'] = $user["pseudo"];
        $_SESSION['email'] = $user["email"];

        setcookie('pseudo', $_SESSION['pseudo'], time()+3600, '/');
        header('Location: ../../index.php?success=tu es connecté');
        die;
    }else{
        header('Location: ../../login.php?error=Password incorrect');
        die;
    }
}