<?php
// logout.php
session_start();
session_destroy();
header("Location: login.php"); // Кіру бетіне қайта бағыттау
exit();
?>
