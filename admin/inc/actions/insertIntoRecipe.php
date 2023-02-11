<?php
include_once 'db.php';
$title = $_POST['_title'];
$description = $_POST['_description'];
$ingredients = $_POST['_ingredients'];
$steps = $_POST['_steps'];
$imgLink = $_POST['_imgLink'];
$videoLink = $_POST['_videoLink'];
$category_id = (int)$_POST['_category_id'];
$tags = $_POST['_tags'];

$sql = "INSERT INTO recipes(title, description, ingredients, steps, image_link, video_link, category_id, tags)
 values ('$title', '$description', '$ingredients', '$steps', '$imgLink', '$videoLink', $category_id, '$tags');";

if ($con->query($sql) === TRUE) {
  echo "تمة إنشاء الوصفة بنجاح";
} else {
  echo "Error: " . $sql . "<br>" . $con->error;
}
