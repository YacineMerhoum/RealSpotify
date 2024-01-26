<?php 
session_start();

if (!empty($_POST['pseudo']) && !empty($_POST['password'])) {

    require_once '../config/connexion.php';

    $preparedRequest = $connexion->prepare("SELECT * FROM users WHERE pseudo = ? ");
    $preparedRequest->execute([
        $_POST['pseudo']
    ]);
    $user = $preparedRequest->fetch(PDO::FETCH_ASSOC);

    $inputPassword = $_POST['password'];
    $hash = $user['passWord'];
    
    $isverified = password_verify($inputPassword, $hash);
    if ($isverified) {
        
        
         $_SESSION['id'] = $user['id'];
         $_SESSION['pseudo'] = $user["pseudo"];

         
        
         header('Location: ../index.php');
         die;
    }else{
         header('Location: ../pagelogin.php');
         die;
      

    }
}


