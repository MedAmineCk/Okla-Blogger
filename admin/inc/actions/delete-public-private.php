<?php
include_once 'db.php';
//TODO: create actions for delete recipes, and change status of recipe from public(ex: private) to private(ex: public)
$recipe_id = $_POST['_recipe_id'];
$type = $_POST['_type'];

if($type == 'delete'){
  // sql to delete a record
  $sql = "DELETE FROM recipes WHERE recipe_id = $recipe_id";

  if ($con->query($sql) === TRUE) {
    echo "Record deleted successfully";
  } else {
    echo "Error deleting record: " . $con->error;
  }
}

if ($type == 'public'){
  $sql = "UPDATE recipes SET is_public = 1 WHERE recipe_id = $recipe_id;";

  if ($con->query($sql) === TRUE) {
    echo "recipe its on air successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $con->error;
  }
}

if($type == 'private'){
  $sql = "UPDATE recipes SET is_public = 0 WHERE recipe_id = $recipe_id;";

  if ($con->query($sql) === TRUE) {
    echo "recipe its private successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $con->error;
  }
}
