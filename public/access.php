<?php
// header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Content-type: application/json; charset=UTF-8");

$id = htmlspecialchars($_POST['id'], ENT_QUOTES);
$pass = htmlspecialchars($_POST['pass'], ENT_QUOTES);

if($id == 'amenipf') {
  if($pass == 'KUFsnFpu') {
    $response['message'] = 'ok';
    echo json_encode( "認証されました" );
  }else {
    echo json_encode( "error" );
  }
}else {
  echo json_encode( "error" );
}

exit;
?>
