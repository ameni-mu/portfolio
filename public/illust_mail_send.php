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
$deadDate = htmlspecialchars($_POST['deadDate'], ENT_QUOTES);
$media = htmlspecialchars($_POST['media'], ENT_QUOTES);
$illustUseYesNo = htmlspecialchars($_POST['illustUseYesNo'], ENT_QUOTES);
$illustUseYesNo = $illustUseYesNo == 'no' ? '禁じる' : '禁じない';
$budget = htmlspecialchars($_POST['budget'], ENT_QUOTES);
$term = htmlspecialchars($_POST['term'], ENT_QUOTES);
$message = htmlspecialchars($_POST['message'], ENT_QUOTES);
$attentionCheck = htmlspecialchars($_POST['attentionCheck'], ENT_QUOTES);
$attentionCheck = $attentionCheck == true ? '確認しました' : '確認してません';

session_destroy();

mb_language("Japanese");
mb_internal_encoding("UTF-8");

$to='info@atelier-ameni.com';
$subject='メールフォームより/イラスト制作に関するお問い合わせ';
$text='[企業名：]'."\n".$companyName."\n\n"
  .'[担当者名]'."\n".$clientName."\n\n"
  .'[メールアドレス]'."\n".$mailAddress."\n\n"
  .'[ご希望納品日]'."\n".$deadDate."\n\n"
  .'[使用媒体]'."\n".$media."\n\n"
  .'[競合他社との取引]'."\n".$illustUseYesNo."\n\n"
  .'[予算]'."\n".$budget."\n\n"
  .'[イラスト使用期間]'."\n".$term."\n\n"
  .'[メッセージ]'."\n".$message."\n\n"
  .'[イラストご依頼時の注意点]'."\n".$attentionCheck."\n\n";
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
