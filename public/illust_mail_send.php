<?php ini_set('display_errors', 1);?>
<?php

$companyName = isset($_POST['companyName']) ? htmlspecialchars($__POST['companyName'], ENT_QUOTES) : '';
$clientName = isset($_POST['clientName']) ? htmlspecialchars($__POST['clientName'], ENT_QUOTES) : '';
$mailAddress = isset($_POST['mailAddress']) ? htmlspecialchars($__POST['mailAddress'], ENT_QUOTES);
$deadDate = isset($_POST['deadDate']) ? htmlspecialchars($__POST['deadDate'], ENT_QUOTES);
$media = isset($_POST['media']) ? htmlspecialchars($__POST['media'], ENT_QUOTES);
if(isset($_POST['illustUseYesNo'])) {
  $illustUseYesNo = htmlspecialchars($__POST['illustUseYesNo'], ENT_QUOTES);
  $illustUseYesNo = $illustUseYesNo == 'no' ? '禁じる' : '禁じない';
}else {
  $illustUseYesNo = '';
}
$budget = isset($_POST['budget']) ? htmlspecialchars($__POST['budget'], ENT_QUOTES);
$term = isset($_POST['term']) ? htmlspecialchars($__POST['term'], ENT_QUOTES);
$message = isset($_POST['message']) ? htmlspecialchars($__POST['message'], ENT_QUOTES);
if(isset($_POST['attentionCheck'])) {
  $attentionCheck = htmlspecialchars($__POST['attentionCheck'], ENT_QUOTES);
  $attentionCheck = $attentionCheck == true ? '確認しました' : '確認してません';
}else {
  $attentionCheck = '';
}

  mb_language("Japanese");
  mb_internal_encoding("UTF-8");

  $to='info@atelier-ameni.com';
  $subject='イラスト制作に関するお問い合わせ';
  $message='企業名：'."\n".$name."\n"
    .'担当者名'."\n".$clientName."\n"
    .'メールアドレス'."\n".$mailAddress."\n"
    .'ご希望納品日'."\n".$deadDate."\n"
    .'使用媒体'."\n".$media."\n"
    .'競合他社との取引'."\n".$illustUseYesNo."\n"
    .'予算'."\n".$budget."\n"
    .'イラスト使用期間'."\n".$term."\n"
    .'メッセージ'."\n".$message."\n"
    .'イラストご依頼時の注意点'."\n".$attentionCheck."\n";
  $fromAddress=$mailAddress;
  $header="Content-Type: text/plain; charset=UTF-8 \n".
          "From: ".$fromAddress."\n".
          "Content-Transfer-Encoding: BASE64\n";
  $result=mb_send_mail($to, $subject, $message, $header);

  if($result) {
    $resultMessage='メール送信に成功しました';
  }else {
    $resultMessage='メール送信に失敗しました';
  }

header("Content-type: application/json; charset=UTF-8");

echo json_encode( "送信が完了しました" );
exit;
?>
