<?php
session_start();

if (!empty($_POST['pseudo'])
    && !empty($_POST['password']) ) {
        
        require_once '../config/connexion.php';

        $hashed_password = password_hash($_POST["password"], PASSWORD_DEFAULT);

        $preparedRequestCreateUser = $connexion->prepare(
            "INSERT INTO users (`pseudo`, `passWord`) VALUES (?,?)"
        );
        $preparedRequestCreateUser->execute([
            $_POST["pseudo"],
            $hashed_password,
        ]);

        $_SESSION['id'] = $connexion->lastInsertId();
        $_SESSION['pseudo'] = $_POST["pseudo"];
        

        header('Location: ../index.php');
}else{
    header('Location: ../register.php?error=Merci de remplir le formulaire');

}