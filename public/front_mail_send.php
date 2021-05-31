<?php
// header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Content-type: application/json; charset=UTF-8");

$companyName = htmlspecialchars($_POST['companyName'], ENT_QUOTES);
$clientName = htmlspecialchars($_POST['clientName'], ENT_QUOTES);
$mailAddress = htmlspecialchars($_POST['mailAddress'], ENT_QUOTES);
$deadDate = htmlspecialchars($_POST['deadDate'], ENT_QUOTES);
$budget = htmlspecialchars($_POST['budget'], ENT_QUOTES);
$detailtext = htmlspecialchars($_POST['detailtext'], ENT_QUOTES);

mb_language("Japanese");
mb_internal_encoding("UTF-8");

$to='info@atelier-ameni.com';
$subject='メールフォームより/フロント構築に関するお問い合わせ';
$text='[企業名：]'."\n".$companyName."\n\n"
  .'[担当者名]'."\n".$clientName."\n\n"
  .'[メールアドレス]'."\n".$mailAddress."\n\n"
  .'[ご希望納品日]'."\n".$deadDate."\n\n"
  .'[ご予算]'."\n".$budget."\n\n"
  .'[詳細]'."\n".$detailtext."\n\n";
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
