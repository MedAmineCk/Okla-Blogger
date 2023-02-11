<?php
session_start();
if(isset($_SESSION['admin_connected'])){
    header('Location: ./inc/dashboard.html?m="welcome back');
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./css/login.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <header>
        <div class="logo">
            <img src="img/notoriety-white-logo-.png" alt="">
        </div>
    </header>
    <main>
        <section class="info">
            <h1>أهلا و سهلا</h1>
            <p>
              <span>صحة الجسم في قلة الطعام</span>
              <br>
              <span>وصحة القلب في قلة الذنوب</span>
              <br>
              <span>والآثام وصحة النفس في قلة الكلام.</span>
            </p>
        </section>
        <section class="login">
            <h1>لوحة القيادة الموقع</h1>
            <form action="./inc/login.php" method="POST">
                <div class="input">
                    <label for="user_name">
                        <i class="material-icons">
                            perm_identity
                        </i>
                    </label>
                    <input type="text" name="user_name" placeholder="إسم المستخدم">
                </div>
                <div class="input">
                    <label for="password">
                        <i class="material-icons">
                            lock
                        </i>
                    </label>
                    <input type="password" name="password" placeholder="****">
                </div>
                <button type="submit">تسجلي الدخول</button>
            </form>
        </section>
    </main>
</body>

</html>
