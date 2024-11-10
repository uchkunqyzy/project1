<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "classifieds_db"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Қосылым сәтсіз: " . $conn->connect_error);
}
?>
