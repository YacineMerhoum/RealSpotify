<?php
session_start();
require_once "../config/connexion.php";

// var_dump($_POST, $_SESSION);
// die;


$prepareSQL2 = $connexion->prepare(
    "SELECT * FROM liked 
    INNER JOIN songs 
        ON liked.id_song = songs.id 
    INNER JOIN users 
        ON liked.id_user = users.id
    WHERE 
        songs.id = ?
    AND
        users.id = ?
    "
);
$prepareSQL2->execute([
        $_POST['id_song'],
        $_SESSION['id']
]);
$songlist = $prepareSQL2->fetch(PDO::FETCH_ASSOC);

if (!$songlist) {

    $songlist->prepare(
    "INSERT INTO liked (id_user, id_song) VALUES (?, ?)");

    $songlist->execute([
        $_POST['id_song'],
        $_SESSION['id']
    ]);

}else{
    echo "salut";
};


var_dump(json_encode($songlist));
die;



