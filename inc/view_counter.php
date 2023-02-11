<?php
include_once 'db.php';

$id = $_POST['_recipe_id'];

$sql = "update recipes set views = views + 1 where recipe_id = $id;";

if ($con->query($sql) === TRUE) {
  echo "new visitor counts";
} else {
  echo "Error: " . $sql . "<br>" . $con->error;
}
