<?
session_start();
require_once "../config/connexion.php";

$prepareSQL2 = $connexion->prepare("SELECT * FROM songs ORDER BY id ASC ");
$prepareSQL2->execute();
$songslist = $prepareSQL2->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($songslist);