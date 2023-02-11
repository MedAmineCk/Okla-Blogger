<?php
$user_name = $_POST['user_name'];
$password = $_POST['password'];

if ($user_name == 'admin' && $password == '@okla_blog.01@') {
    session_start();
    $_SESSION['admin_connected'] = true;
    header('Location: dashboard.html');
}else{
    header('Location: ../index.php?m=some info not correct!');
}
