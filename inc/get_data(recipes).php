<?php
include_once 'db.php';

$sql = "SELECT recipe_id, image_link, title, created_at, views, description FROM recipes WHERE is_public = 1";
$result = $con->query($sql);

if ($result->num_rows > 0) {
  // output data of each row

  while ($row = $result->fetch_assoc()) {
    $json_array[] = $row;
  }
  $myJSON = json_encode($json_array);
  echo $myJSON;
} else {
  echo "0";
}
