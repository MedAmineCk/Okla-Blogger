<?php
$con = mysqli_connect("localhost","root","19151095","okla_blog");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

