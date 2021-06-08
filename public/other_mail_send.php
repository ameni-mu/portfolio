<?php
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Content-type: application/json; charset=UTF-8");

session_start();
$token = htmlspecialchars($_POST['token'], ENT_QUOTES);
if(empty($_SESSION['token']) || $_SESSION['token'] != $token) {
  exit;
}
$companyName = htmlspecialchars($_POST['companyName'], ENT_QUOTES);
$clientName = htmlspecialchars($_POST['clientName'], ENT_QUOTES);
$mailAddress = htmlspecialchars($_POST['mailAddress'], ENT_QUOTES);
$message = htmlspecialchars($_POST['message'], ENT_QUOTES);

session_destroy();

mb_language("Japanese");
mb_internal_encoding("UTF-8");

$to='info@atelier-ameni.com';
$subject='メールフォームより/その他のお問い合わせ';
$text='[企業名：]'."\n".$companyName."\n\n"
  .'[お名前]'."\n".$clientName."\n\n"
  .'[メールアドレス]'."\n".$mailAddress."\n\n"
  .'[メッセージ]'."\n".$message."\n\n";
$fromAddress=$mailAddress;
$header="Content-Type: text/plain; charset=UTF-8 \n".
        "From: ".$fromAddress."\n".
        "Content-Transfer-Encoding: BASE64\n";
$result=mb_send_mail($to, $subject, $text, $header);

if($result) {
  $resultMessage='メール送信に成功しました';
}else {
  $resultMessage='メール送信に失敗しました';
}
echo json_encode( "送信が完了しました" );
exit;
?>
