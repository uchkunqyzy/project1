<?php
// register_process.php
include 'db.php'; // Мәліметтер базасымен байланысу үшін db.php файлын қосамыз

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Құпиясөзді хэштеу

    // Пайдаланушыны мәліметтер базасына қосу
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Тіркелу сәтті өтті!";
    } else {
        echo "Қате: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
