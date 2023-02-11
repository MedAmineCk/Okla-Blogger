<?php
include_once 'db.php';
if(isset($_POST['_privilege'])){
  $sql = "SELECT recipe_id, image_link, title, created_at, views, description, FROM recipes WHERE is_public = 1";
}
elseif(isset($_POST['_recipe_id'])){
  $recipe_id = $_POST['_recipe_id'];
  $sql = "SELECT * FROM recipes WHERE recipe_id = '$recipe_id'";
}else{
  $sql = "SELECT 
                recipes.recipe_id, 
                recipes.image_link, 
                recipes.title, 
                recipes.created_at, 
                recipes.views, 
                recipes.is_public,
                recipes.description, 
                categories.category_name 
                FROM recipes INNER JOIN categories ON recipes.category_id=categories.category_id;";
}
$result = $con->query($sql);

if ($result->num_rows > 0) {
  // output data of each row

  while($row = $result->fetch_assoc()) {
    $json_array[] = $row;
  }
  $myJSON = json_encode($json_array);
  echo $myJSON;
} else {
  echo "0";
}
