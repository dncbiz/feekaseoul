<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message']
        
    try{
        $mail->isSMTP();
        $mail->Host = 'smtp.gmaul.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'dncbiz01@gmail.com'
        $mail->Password = 'bwrl tmht okbd oyuk'
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        
        $mail->setFrom('dncbiz01@gmail.com', 'Name');
        $mail->addAddress('dncbiz01@gmail.com');
        
        $mail->isHTML(true);
        $mail->Subject = 'Message received from contact :'. $name;
        $mail->Body = "Name: $name <br>Phone: $phone<br>Email: $email<br>Subject: $subject<br>Message: $message:";
        $mail->send();
        
        $alert = "<div class=alert-success><span>성공적으로 전송되었습니다.</span></div>";
     } catch (Exception $e){
        $alert = "<div class=alert-error><span>Error!! 전송되지 않았습니다.</span></div>";
    } 
}
?>