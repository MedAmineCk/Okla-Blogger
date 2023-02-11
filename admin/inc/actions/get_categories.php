<?php
include_once 'db.php';
$sql = "SELECT * FROM categories";
$result = $con->query($sql);

if ($result->num_rows > 0) {
  // output data of each row

  while ($row = $result->fetch_assoc()) {
    $json_array[] = $row;
  }
  $myJSON = json_encode($json_array);
  echo $myJSON;
} else {
  echo "0 results";
}
