<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Content-type: application/json; charset=UTF-8");
session_start();
$_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(16));
echo json_encode( $_SESSION['token'] );
exit;
?>
