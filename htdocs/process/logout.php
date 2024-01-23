<?php
session_start();

 if (!empty($_SESSION['pseudo'])){

    session_destroy();

     header('Location: ../index.php');
 }