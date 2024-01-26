<?php
require_once "../config/connexion.php";

$SQLinsertSong = $connexion->prepare(
    "INSERT INTO songs (url, cover, name, artiste) VALUES (?, ?, ?, ?)"
);

$SQLinsertSong->execute([

    $_POST['url'],
    $_POST['cover'],
    $_POST['name'],
    $_POST['artiste'],
]);

header("Location: index.html");