<?php
echo("Thank you for contacting me. I'll get back to you as soon as possible.");
if (isset($_POST['submit'])) {
      $name= $_POST['name'];
      $mailFrom= $_POST['mail'];
    $contactNumber= $_POST['contactPhone'];
     $subject= $_POST['subject'];
      $message= $_POST['message'];
    
    $mailTo = "quasidance03@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name. ".\n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index1.php?mailsend");
    
}
