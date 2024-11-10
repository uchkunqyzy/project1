<?php
// login_process.php
session_start();
include 'db.php'; // Мәліметтер базасымен байланысу үшін db.php файлын қосамыз

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Пайдаланушыны мәліметтер базасынан алу
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Құпиясөзді тексеру
        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $username;
            echo "Сіз сәтті кірудесіз!";
            // Мұнда сәтті кіргеннен кейін қайта бағыттауды қоса аласыз (мысалы, басты бетке)
        } else {
            echo "Құпиясөз дұрыс емес!";
        }
    } else {
        echo "Пайдаланушы табылған жоқ!";
    }
}

$conn->close();
?>
