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
$recipe_id = $_POST['_recipe_id'];

$sql = "UPDATE recipes SET 
title = '$title', 
description = '$description', 
ingredients = '$ingredients', 
steps = '$steps', 
image_link = '$imgLink', 
video_link = '$videoLink', 
category_id = $category_id, 
tags = '$tags' 
WHERE recipe_id = $recipe_id;";

if ($con->query($sql) === TRUE) {
  echo "recipe Update successfully";
} else {
  echo "Error: " . $sql . "<br>" . $con->error;
}
