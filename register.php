<!-- register.php -->
<!DOCTYPE html>
<html lang="kk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тіркелу</title>
</head>
<body>
    <h2>Тіркелу формасы</h2>
    <form action="register_process.php" method="POST">
        <label for="username">Логин:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Құпиясөз:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Тіркелу</button>
    </form>
</body>
</html>
